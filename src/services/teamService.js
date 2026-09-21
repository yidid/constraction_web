import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc, writeBatch } from "firebase/firestore";
import { getFirebaseDb } from "../firebase";

const TEAM_COLLECTION = "team";

const teamCollection = () => collection(getFirebaseDb(), TEAM_COLLECTION);

export async function getTeamMembers() {
  const snapshot = await getDocs(collection(getFirebaseDb(), TEAM_COLLECTION));
  return snapshot.docs
    .map((teamDocument) => ({
      id: teamDocument.id,
      ...teamDocument.data(),
    }))
    .sort(compareTeamMembers);
}

export async function seedTeamMembers(teamMembers) {
  const db = getFirebaseDb();
  const batch = writeBatch(db);
  const teamCollection = collection(db, TEAM_COLLECTION);

  teamMembers.forEach((member, index) => {
    if (!member.id) {
      throw new Error("Every team member must have an id before it can be imported.");
    }

    batch.set(doc(teamCollection, member.id), {
      ...member,
      order: getMemberOrder(member) ?? index + 1,
    }, { merge: true });
  });

  await batch.commit();
  return teamMembers.length;
}

export async function createTeamMember(member) {
  const memberDocument = await addDoc(teamCollection(), member);
  return { id: memberDocument.id, ...member };
}

export async function updateTeamMember(id, member) {
  await updateDoc(doc(getFirebaseDb(), TEAM_COLLECTION, id), member);
  return { id, ...member };
}

export async function deleteTeamMember(id) {
  await deleteDoc(doc(getFirebaseDb(), TEAM_COLLECTION, id));
}

function compareTeamMembers(first, second) {
  const firstOrder = getMemberOrder(first);
  const secondOrder = getMemberOrder(second);
  const firstHasOrder = Number.isFinite(firstOrder);
  const secondHasOrder = Number.isFinite(secondOrder);

  if (firstHasOrder && secondHasOrder && firstOrder !== secondOrder) {
    return firstOrder - secondOrder;
  }

  if (firstHasOrder !== secondHasOrder) return firstHasOrder ? -1 : 1;
  return first.id.localeCompare(second.id);
}

function getMemberOrder(member) {
  const value = member.order ?? member.displayOrder ?? member.sortOrder;
  if (value === "" || value === null || value === undefined) return null;

  const numericValue = Number(value);
  return Number.isFinite(numericValue) ? numericValue : null;
}
