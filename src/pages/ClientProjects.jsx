import React, { useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithRedirect, signOut } from "firebase/auth";
import { getFirebaseAuth } from "../firebase";
import { createProject } from "../services/projectService";

const emptyProject = {
  title: "",
  category: "commercial",
  client: "",
  location: "",
  year: "",
  description: "",
  image: "",
  gallery: [],
};

function ClientProjects() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [project, setProject] = useState(emptyProject);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    let active = true;
    let unsubscribe;

    try {
      unsubscribe = onAuthStateChanged(getFirebaseAuth(), (currentUser) => {
        if (active) {
          setUser(currentUser);
          setLoading(false);
        }
      });
    } catch (error) {
      setMessage(error.message || "Unable to connect to Firebase.");
      setLoading(false);
    }

    return () => {
      active = false;
      unsubscribe?.();
    };
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    setMessage("");

    try {
      await signInWithEmailAndPassword(getFirebaseAuth(), username.trim(), password);
    } catch (error) {
      const authMessages = {
        "auth/invalid-credential": "The email or password is incorrect.",
        "auth/user-not-found": "No Firebase user exists for this email.",
        "auth/wrong-password": "The password is incorrect.",
        "auth/operation-not-allowed": "Enable Email/Password sign-in in Firebase Authentication.",
        "auth/invalid-email": "Enter a valid email address.",
      };
      setMessage(authMessages[error.code] || error.message || "Unable to sign in.");
    }
  };

  const handleGoogleLogin = async () => {
    setMessage("");
    try {
      await signInWithRedirect(getFirebaseAuth(), new GoogleAuthProvider());
    } catch (error) {
      setMessage(error.message || "Unable to sign in with Google.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");
    setSubmitting(true);

    try {
      await createProject({
        ...project,
        client: project.client || user.email,
        featured: false,
        gallery: [...new Set([project.image, ...project.gallery].map((image) => image.trim()).filter(Boolean))],
        submittedBy: user.uid,
      });
      setProject(emptyProject);
      setMessage("Project added successfully.");
    } catch (error) {
      setMessage(error.code === "permission-denied"
        ? "Firebase rejected the write. Deploy Firestore rules and make sure you are signed in."
        : error.message || "Unable to add the project.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <main className="min-h-screen px-6 py-24 text-center">Loading client portal...</main>;

  if (!user) {
    return (
      <main className="min-h-screen bg-light-off px-6 py-24">
        <form onSubmit={handleLogin} className="mx-auto max-w-md rounded-card bg-light p-8 shadow-card">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">NAF Construction</p>
          <h1 className="mb-2 text-3xl font-bold text-dark">Client project portal</h1>
          <p className="mb-8 text-dark/70">Sign in to add a project to Firebase.</p>
          <label className="mb-4 block text-sm font-semibold">Email<input className="mt-2 w-full rounded border border-dark/20 bg-light p-3 text-dark" type="email" value={username} onChange={(event) => setUsername(event.target.value)} required /></label>
          <label className="mb-5 block text-sm font-semibold">Password<input className="mt-2 w-full rounded border border-dark/20 bg-light p-3 text-dark" type="password" value={password} onChange={(event) => setPassword(event.target.value)} required /></label>
          {message && <p className="mb-4 text-sm text-red-600" role="alert">{message}</p>}
          <button className="w-full rounded bg-primary px-5 py-3 font-semibold text-light hover:bg-primary-dark" type="submit">Sign in</button>
          <div className="my-5 flex items-center gap-3 text-xs uppercase tracking-widest text-dark/50"><span className="h-px flex-1 bg-dark/15" />or<span className="h-px flex-1 bg-dark/15" /></div>
          <button className="w-full rounded border border-dark/20 bg-light px-5 py-3 font-semibold text-dark hover:bg-dark/5" type="button" onClick={handleGoogleLogin}>Continue with Google</button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-light-off px-4 py-12 sm:px-8">
      <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-5 rounded-card bg-light p-6 shadow-card sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Client portal</p>
            <h1 className="text-3xl font-bold text-dark">Add a project</h1>
            <p className="text-dark/70">Signed in as {user.email}</p>
          </div>
          <button type="button" onClick={() => signOut(getFirebaseAuth())} className="rounded border border-dark/20 px-4 py-2 font-semibold">Sign out</button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm font-semibold">Project title<input className="mt-1 w-full rounded border border-dark/20 bg-light p-2.5 font-normal text-dark" value={project.title} onChange={(event) => setProject({ ...project, title: event.target.value })} required /></label>
          <label className="block text-sm font-semibold">Category<select className="mt-1 w-full rounded border border-dark/20 bg-light p-2.5 font-normal text-dark" value={project.category} onChange={(event) => setProject({ ...project, category: event.target.value })}><option value="commercial">Commercial</option><option value="residential">Residential</option><option value="renovation">Renovation</option></select></label>
          <label className="block text-sm font-semibold">Client name<input className="mt-1 w-full rounded border border-dark/20 bg-light p-2.5 font-normal text-dark" value={project.client} onChange={(event) => setProject({ ...project, client: event.target.value })} /></label>
          <label className="block text-sm font-semibold">Year<input className="mt-1 w-full rounded border border-dark/20 bg-light p-2.5 font-normal text-dark" value={project.year} onChange={(event) => setProject({ ...project, year: event.target.value })} required /></label>
          <label className="block text-sm font-semibold sm:col-span-2">Location<input className="mt-1 w-full rounded border border-dark/20 bg-light p-2.5 font-normal text-dark" value={project.location} onChange={(event) => setProject({ ...project, location: event.target.value })} required /></label>
        </div>
        <label className="block text-sm font-semibold">Image URL <span className="font-normal text-dark/60">(optional)</span><input className="mt-1 w-full rounded border border-dark/20 bg-light p-2.5 font-normal text-dark" type="url" value={project.image} onChange={(event) => setProject({ ...project, image: event.target.value })} /></label>
        <div className="space-y-2">
          <p className="text-sm font-semibold">Gallery image URLs</p>
          {project.gallery.map((image, index) => (
            <div key={`gallery-${index}`} className="flex gap-2">
              <input className="min-w-0 flex-1 rounded border border-dark/20 bg-light p-2.5 font-normal text-dark" type="url" placeholder="https://example.com/image.jpg" value={image} onChange={(event) => setProject({ ...project, gallery: project.gallery.map((item, itemIndex) => itemIndex === index ? event.target.value : item) })} />
              <button type="button" className="rounded border border-red-200 px-3 text-sm font-semibold text-red-700" onClick={() => setProject({ ...project, gallery: project.gallery.filter((_, itemIndex) => itemIndex !== index) })}>Remove</button>
            </div>
          ))}
          <button type="button" className="rounded border border-dark/20 px-4 py-2 text-sm font-semibold" onClick={() => setProject({ ...project, gallery: [...project.gallery, ""] })}>Add gallery image</button>
        </div>
        <label className="block text-sm font-semibold">Description<textarea className="mt-1 min-h-32 w-full rounded border border-dark/20 bg-light p-2.5 font-normal text-dark" value={project.description} onChange={(event) => setProject({ ...project, description: event.target.value })} required /></label>
        {message && <p className="rounded border border-primary/30 bg-light-off p-3 text-sm" role="status">{message}</p>}
        <button className="rounded bg-primary px-5 py-2.5 font-semibold text-light hover:bg-primary-dark" type="submit" disabled={submitting}>{submitting ? "Adding project..." : "Add project"}</button>
      </form>
    </main>
  );
}

export default ClientProjects;