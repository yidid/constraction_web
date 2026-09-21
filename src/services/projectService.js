import { addDoc, collection, deleteDoc, doc, getDocs, serverTimestamp, updateDoc, writeBatch } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { getFirebaseDb, getFirebaseStorage } from "../firebase";

const PROJECTS_COLLECTION = "projects";

const projectsCollection = () => collection(getFirebaseDb(), PROJECTS_COLLECTION);

export async function getProjects() {
  const db = getFirebaseDb();
  const snapshot = await getDocs(collection(db, PROJECTS_COLLECTION));

  return snapshot.docs
    .map((projectDocument) => normalizeProject(projectDocument.id, projectDocument.data()))
    .sort(compareProjects);
}

export async function seedProjects(projects) {
  const db = getFirebaseDb();
  const batch = writeBatch(db);
  const projectsCollection = collection(db, PROJECTS_COLLECTION);

  projects.forEach((project) => {
    if (!project.id) {
      throw new Error("Every project must have an id before it can be imported.");
    }

    batch.set(doc(projectsCollection, project.id), project, { merge: true });
  });

  await batch.commit();
  return projects.length;
}

export async function createProject(project) {
  const projectDocument = await addDoc(projectsCollection(), {
    ...project,
    createdAt: serverTimestamp(),
  });
  return { id: projectDocument.id, ...project };
}

export async function updateProject(id, project) {
  await updateDoc(doc(getFirebaseDb(), PROJECTS_COLLECTION, id), project);
  return { id, ...project };
}

export async function deleteProject(id) {
  await deleteDoc(doc(getFirebaseDb(), PROJECTS_COLLECTION, id));
}

export async function uploadProjectImage(file, userId) {
  if (!file) return "";

  const imageReference = ref(getFirebaseStorage(), `projects/${userId}/${Date.now()}-${file.name}`);
  await uploadBytes(imageReference, file);
  return getDownloadURL(imageReference);
}

function normalizeProject(id, project) {
  const image = project.image || "";
  const image2 = project.image2 || project.image || "";
  const gallery = Array.isArray(project.gallery) ? project.gallery : [];

  return {
    id,
    ...project,
    image,
    image2,
    gallery: [...new Set(gallery.filter(Boolean))],
  };
}

function compareProjects(first, second) {
  const firstTime = timestampValue(first.createdAt);
  const secondTime = timestampValue(second.createdAt);

  if (firstTime !== secondTime) return secondTime - firstTime;

  return first.id.localeCompare(second.id, undefined, { sensitivity: "base" });
}

function timestampValue(timestamp) {
  if (!timestamp) return 0;
  if (typeof timestamp.toMillis === "function") return timestamp.toMillis();
  if (timestamp instanceof Date) return timestamp.getTime();
  return Number(timestamp) || 0;
}
