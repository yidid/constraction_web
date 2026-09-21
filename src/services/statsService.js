import { collection, doc, getDoc, getDocs, setDoc, writeBatch } from "firebase/firestore";
import { getFirebaseDb } from "../firebase";

const STATS_COLLECTION = "companyStats";

export async function getCompanyStats() {
  const statsDocument = await getDoc(doc(getFirebaseDb(), STATS_COLLECTION, "company"));

  if (!statsDocument.exists()) {
    return {
      foundedYear: 2005,
      projects: 250,
      clients: 180,
      team: 45,
    };
  }

  return statsDocument.data();
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

export async function updateCompanyStats(stats) {
  const companyStats = {
    foundedYear: Number(stats.foundedYear),
    projects: Number(stats.projects),
    clients: Number(stats.clients),
    team: Number(stats.team),
  };

  await setDoc(doc(getFirebaseDb(), STATS_COLLECTION, "company"), companyStats, { merge: true });
  return companyStats;
}
