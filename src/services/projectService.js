import { collection, doc, getDocs, writeBatch } from "firebase/firestore";
import { getFirebaseDb } from "../firebase";

const PROJECTS_COLLECTION = "projects";

export async function getProjects() {
  const snapshot = await getDocs(collection(getFirebaseDb(), PROJECTS_COLLECTION));
  return snapshot.docs.map((projectDocument) => ({
    id: projectDocument.id,
    ...projectDocument.data(),
  }));
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