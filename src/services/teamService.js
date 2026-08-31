import { collection, doc, getDocs, writeBatch } from "firebase/firestore";
import { getFirebaseDb } from "../firebase";

const TEAM_COLLECTION = "team";

export async function getTeamMembers() {
  const snapshot = await getDocs(collection(getFirebaseDb(), TEAM_COLLECTION));
  return snapshot.docs.map((teamDocument) => ({
    id: teamDocument.id,
    ...teamDocument.data(),
  }));
}

export async function seedTeamMembers(teamMembers) {
  const db = getFirebaseDb();
  const batch = writeBatch(db);
  const teamCollection = collection(db, TEAM_COLLECTION);

  teamMembers.forEach((member) => {
    if (!member.id) {
      throw new Error("Every team member must have an id before it can be imported.");
    }

    batch.set(doc(teamCollection, member.id), member, { merge: true });
  });

  await batch.commit();
  return teamMembers.length;
}
