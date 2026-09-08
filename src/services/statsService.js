import { collection, doc, getDocs, writeBatch } from "firebase/firestore";
import { getFirebaseDb } from "../firebase";

const STATS_COLLECTION = "companyStats";

export async function getCompanyStats() {
  const snapshot = await getDocs(collection(getFirebaseDb(), STATS_COLLECTION));

  if (snapshot.empty) {
    throw new Error("No company stats were found in the Firebase companyStats collection.");
  }

  return snapshot.docs[0].data();
}

export async function seedCompanyStats(stats) {
  const db = getFirebaseDb();
  const batch = writeBatch(db);
  const statsCollection = collection(db, STATS_COLLECTION);

  const companyStats = {
    foundedYear: stats.foundedYear ?? 2005,
    projects: stats.projects ?? 250,
    clients: stats.clients ?? 180,
    team: stats.team ?? 45,
  };

  batch.set(doc(statsCollection, "company"), companyStats, { merge: true });
  await batch.commit();

  return companyStats;
}
