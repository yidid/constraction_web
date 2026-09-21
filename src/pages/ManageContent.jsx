import React, { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  browserLocalPersistence,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getFirebaseAuth } from "../firebase";
import { createProject, deleteProject, getProjects, updateProject } from "../services/projectService";
import { createTeamMember, deleteTeamMember, getTeamMembers, updateTeamMember } from "../services/teamService";
import { getCompanyStats, updateCompanyStats } from "../services/statsService";
import { createSocialLink, deleteSocialLink, getSocialLinks, updateSocialLink } from "../services/socialLinkService";

const emptyProject = { title: "", category: "commercial", client: "", image: "", image2: "", location: "", year: "", description: "", featured: false, gallery: [] };
const emptyMember = { name: "", role: "", department: "", photo: "", bio: "", linkedin: "", twitter: "", email: "", order: "" };
const emptyLink = { name: "", url: "" };
const defaultStats = { foundedYear: 2005, projects: 250, clients: 180, team: 45 };

function ManageContent() {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  useEffect(() => {
    let active = true;
    let auth;
    try {
      auth = getFirebaseAuth();
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (active) {
          setUser(currentUser);
          setAuthLoading(false);
        }
      });
      return () => {
        active = false;
        unsubscribe();
      };
    } catch (error) {
      setAuthError(error.message);
      setAuthLoading(false);
    }
    return () => { active = false; };
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    setAuthError("");
    try {
      await signInWithEmailAndPassword(getFirebaseAuth(), email, password);
    } catch (error) {
      setAuthError(error.message || "Unable to sign in.");
    }
  };

  const handleGoogleLogin = async () => {
    setAuthError("");
    try {
      const auth = getFirebaseAuth();
      await setPersistence(auth, browserLocalPersistence);
      await signInWithPopup(auth, new GoogleAuthProvider());
    } catch (error) {
      const authMessages = {
        "auth/unauthorized-domain": "This website is not authorized in Firebase. Add its domain in Firebase Authentication settings.",
        "auth/operation-not-allowed": "Enable Google sign-in in Firebase Authentication.",
        "auth/popup-blocked": "Your browser blocked the Google sign-in window.",
        "auth/popup-closed-by-user": "Google sign-in was cancelled.",
      };
      setAuthError(authMessages[error.code] || error.message || "Unable to sign in with Google.");
    }
  };

  if (authLoading) return <main className="min-h-screen px-6 py-24 text-center">Loading management area...</main>;
  if (!user) {
    return (
      <main className="min-h-screen bg-light-off px-6 py-24">
        <form onSubmit={handleLogin} className="mx-auto max-w-md rounded-card bg-light p-8 shadow-card">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">NAF Construction</p>
          <h1 className="mb-2 text-3xl font-bold text-dark">Content management</h1>
          <p className="mb-8 text-dark/70">Sign in to manage the public website.</p>
          <label className="mb-4 block text-sm font-semibold">Email<input className="mt-2 w-full rounded border border-dark/20 p-3" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required /></label>
          <label className="mb-5 block text-sm font-semibold">Password<input className="mt-2 w-full rounded border border-dark/20 p-3" type="password" value={password} onChange={(event) => setPassword(event.target.value)} required /></label>
          {authError && <p className="mb-4 text-sm text-red-600" role="alert">{authError}</p>}
          <button className="w-full rounded bg-primary px-5 py-3 font-semibold text-light hover:bg-primary-dark" type="submit">Sign in</button>
          <div className="my-5 flex items-center gap-3 text-xs uppercase tracking-widest text-dark/50"><span className="h-px flex-1 bg-dark/15" />or<span className="h-px flex-1 bg-dark/15" /></div>
          <button className="w-full rounded border border-dark/20 bg-light px-5 py-3 font-semibold text-dark hover:bg-dark/5" type="button" onClick={handleGoogleLogin}>Continue with Google</button>
        </form>
      </main>
    );
  }

  return <ContentEditor user={user} onSignOut={() => signOut(getFirebaseAuth())} />;
}

function ContentEditor({ user, onSignOut }) {
  const [tab, setTab] = useState("projects");
  const [projects, setProjects] = useState([]);
  const [members, setMembers] = useState([]);
  const [links, setLinks] = useState([]);
  const [stats, setStats] = useState(defaultStats);
  const [project, setProject] = useState(emptyProject);
  const [member, setMember] = useState(emptyMember);
  const [link, setLink] = useState(emptyLink);
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");

  const refresh = async () => {
    const [nextProjects, nextMembers, nextLinks, nextStats] = await Promise.all([getProjects(), getTeamMembers(), getSocialLinks(), getCompanyStats()]);
    setProjects(nextProjects); setMembers(nextMembers); setLinks(nextLinks); setStats(nextStats);
  };

  useEffect(() => { refresh().catch((error) => setMessage(error.message)); }, []);

  const save = async (event) => {
    event.preventDefault(); setMessage("");
    try {
      if (tab === "projects") {
        const payload = {
          ...project,
          gallery: [...new Set(project.gallery.map((item) => item.trim()).filter(Boolean))],
        };
        editingId ? await updateProject(editingId, payload) : await createProject(payload);
        setProject(emptyProject);
      } else if (tab === "team") {
        const payload = { ...member, socials: Object.fromEntries(Object.entries({ linkedin: member.linkedin, twitter: member.twitter, email: member.email }).filter(([, value]) => value)) };
        delete payload.linkedin; delete payload.twitter; delete payload.email;
        editingId ? await updateTeamMember(editingId, payload) : await createTeamMember(payload);
        setMember(emptyMember);
      } else if (tab === "social") {
        editingId ? await updateSocialLink(editingId, link) : await createSocialLink(link);
        setLink(emptyLink);
      } else {
        await updateCompanyStats(stats);
      }
      setEditingId(null); setMessage("Saved successfully."); await refresh();
    } catch (error) { setMessage(error.message || "Unable to save changes."); }
  };

  const remove = async (kind, id) => {
    if (!window.confirm("Delete this item?")) return;
    try {
      if (kind === "project") await deleteProject(id);
      if (kind === "team") await deleteTeamMember(id);
      if (kind === "social") await deleteSocialLink(id);
      await refresh(); setMessage("Deleted successfully.");
    } catch (error) { setMessage(error.message || "Unable to delete item."); }
  };

  const startEdit = (kind, item) => {
    setEditingId(item.id); setTab(kind === "project" ? "projects" : kind);
    if (kind === "project") {
      setProject({ ...emptyProject, ...item, gallery: item.gallery || [] });
    }
    if (kind === "team") setMember({ ...emptyMember, ...item, ...item.socials });
    if (kind === "social") setLink({ name: item.name || "", url: item.url || "" });
  };

  const field = (label, value, onChange, type = "text", required = true) => <label className="block text-sm font-semibold">{label}<input className="mt-1 w-full rounded border border-dark/20 p-2.5 font-normal" type={type} value={value} onChange={(event) => onChange(event.target.value)} required={required} /></label>;
  const addGalleryImage = () => setProject((current) => ({ ...current, gallery: [...current.gallery, ""] }));
  const updateGalleryImage = (index, value) => setProject((current) => ({ ...current, gallery: current.gallery.map((image, imageIndex) => imageIndex === index ? value : image) }));
  const removeGalleryImage = (index) => setProject((current) => ({ ...current, gallery: current.gallery.filter((_, imageIndex) => imageIndex !== index) }));
  const tabs = [{ id: "projects", label: "Projects" }, { id: "team", label: "Team" }, { id: "stats", label: "Stats" }, { id: "social", label: "Social links" }];

  return (
    <main className="min-h-screen bg-light-off px-4 py-12 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4"><div><p className="text-sm font-semibold uppercase tracking-widest text-primary">Private workspace</p><h1 className="text-4xl font-bold text-dark">Manage website content</h1><p className="text-dark/60">Signed in as {user.email}</p></div><button onClick={onSignOut} className="rounded border border-dark/20 bg-light px-4 py-2 font-semibold">Sign out</button></div>
        <nav className="mb-6 flex flex-wrap gap-2" aria-label="Content types">{tabs.map((item) => <button key={item.id} onClick={() => { setTab(item.id); setEditingId(null); }} className={`rounded px-4 py-2 font-semibold ${tab === item.id ? "bg-primary text-light" : "bg-light text-dark"}`}>{item.label}</button>)}</nav>
        {message && <p className="mb-5 rounded border border-primary/30 bg-light p-3 text-sm" role="status">{message}</p>}
        <section className="grid gap-6 lg:grid-cols-[minmax(0,400px)_1fr]">
          <form onSubmit={save} className="space-y-4 rounded-card bg-light p-6 shadow-card">
            <h2 className="text-2xl font-bold">{editingId ? "Edit" : "Add"} {tab === "projects" ? "project" : tab === "team" ? "team member" : tab === "stats" ? "company stats" : "social link"}</h2>
            {tab === "projects" && <><div className="grid gap-4 sm:grid-cols-2">{field("Title", project.title, (value) => setProject({ ...project, title: value }))}<label className="block text-sm font-semibold">Category<select className="mt-1 w-full rounded border border-dark/20 bg-light p-2.5 font-normal" value={project.category} onChange={(event) => setProject({ ...project, category: event.target.value })}><option value="renovation">Renovation</option><option value="commercial">Commercial</option><option value="residential">Residential</option></select></label>{field("Client", project.client, (value) => setProject({ ...project, client: value }))}{field("Year", project.year, (value) => setProject({ ...project, year: value }))}{field("Location", project.location, (value) => setProject({ ...project, location: value }))}{field("Client image", project.image, (value) => setProject({ ...project, image: value }), "url", false)}{field("Best picture", project.image2, (value) => setProject({ ...project, image2: value }), "url", false)}</div><p className="text-xs text-dark/60">Client image is saved as <strong>image</strong>. Best picture is saved as <strong>image2</strong>. Gallery links are saved as a <strong>gallery</strong> array.</p>{field("Description", project.description, (value) => setProject({ ...project, description: value }))}<div className="space-y-2"><p className="text-sm font-semibold">Gallery image URLs</p>{project.gallery.map((image, index) => <div key={`gallery-${index}`} className="flex gap-2"><input className="min-w-0 flex-1 rounded border border-dark/20 p-2.5 font-normal" type="url" placeholder="https://example.com/image.jpg" value={image} onChange={(event) => updateGalleryImage(index, event.target.value)} /><button type="button" className="rounded border border-red-200 px-3 text-sm font-semibold text-red-700" onClick={() => removeGalleryImage(index)}>Remove</button></div>)}<button type="button" className="rounded border border-dark/20 px-4 py-2 text-sm font-semibold" onClick={addGalleryImage}>Add gallery image</button></div><label className="flex items-center gap-2 text-sm font-semibold"><input type="checkbox" checked={project.featured} onChange={(event) => setProject({ ...project, featured: event.target.checked })} /> Featured project</label></>}
            {tab === "team" && <><div className="grid gap-4 sm:grid-cols-2">{field("Name", member.name, (value) => setMember({ ...member, name: value }))}{field("Role", member.role, (value) => setMember({ ...member, role: value }))}{field("Department", member.department, (value) => setMember({ ...member, department: value }))}{field("Display order", member.order, (value) => setMember({ ...member, order: value }), "number")}{field("Photo URL", member.photo, (value) => setMember({ ...member, photo: value }))}{field("LinkedIn URL", member.linkedin, (value) => setMember({ ...member, linkedin: value }), "url")}{field("Twitter URL", member.twitter, (value) => setMember({ ...member, twitter: value }), "url")}{field("Email", member.email, (value) => setMember({ ...member, email: value }), "email")}</div>{field("Bio", member.bio, (value) => setMember({ ...member, bio: value }))}</>}
            {tab === "social" && <div className="grid gap-4">{field("Name", link.name, (value) => setLink({ ...link, name: value }))}{field("URL", link.url, (value) => setLink({ ...link, url: value }), "url")}</div>}
            {tab === "stats" && <div className="grid gap-4 sm:grid-cols-2">{Object.keys(defaultStats).map((key) => field(key, stats[key], (value) => setStats({ ...stats, [key]: value }), "number"))}</div>}
            <div className="flex gap-3"><button className="rounded bg-primary px-5 py-2.5 font-semibold text-light" type="submit">{editingId ? "Update" : "Save"}</button>{editingId && <button type="button" className="rounded border border-dark/20 px-5 py-2.5" onClick={() => { setEditingId(null); setProject(emptyProject); setMember(emptyMember); setLink(emptyLink); }}>Cancel</button>}</div>
          </form>
          <div className="space-y-3">{tab === "projects" && projects.map((item) => <Item key={item.id} title={item.title} detail={`${item.client || "No client"} · ${item.year || "No year"}`} onEdit={() => startEdit("project", item)} onDelete={() => remove("project", item.id)} />)}{tab === "team" && members.map((item) => <Item key={item.id} title={item.name} detail={`${item.role || ""} · ${item.department || ""}`} onEdit={() => startEdit("team", item)} onDelete={() => remove("team", item.id)} />)}{tab === "social" && links.map((item) => <Item key={item.id} title={item.name} detail={item.url} onEdit={() => startEdit("social", item)} onDelete={() => remove("social", item.id)} />)}{tab === "stats" && <div className="rounded-card bg-light p-6 shadow-card"><p className="text-dark/70">These values power the public statistics section.</p></div>}</div>
        </section>
      </div>
    </main>
  );
}

function Item({ title, detail, onEdit, onDelete }) {
  return <article className="flex items-center justify-between gap-4 rounded-card bg-light p-4 shadow-card"><div className="min-w-0"><h3 className="font-bold">{title}</h3><p className="truncate text-sm text-dark/60">{detail}</p></div><div className="flex shrink-0 gap-2"><button className="rounded border border-dark/20 px-3 py-1.5 text-sm font-semibold" onClick={onEdit}>Edit</button><button className="rounded border border-red-200 px-3 py-1.5 text-sm font-semibold text-red-700" onClick={onDelete}>Delete</button></div></article>;
}

export default ManageContent;