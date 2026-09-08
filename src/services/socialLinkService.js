import { collection, doc, getDocs, writeBatch } from "firebase/firestore";
import { getFirebaseDb } from "../firebase";

const SOCIAL_LINKS_COLLECTION = "socialLinks";

export async function getSocialLinks() {
  const snapshot = await getDocs(collection(getFirebaseDb(), SOCIAL_LINKS_COLLECTION));
  return snapshot.docs.map((socialLinkDocument) => ({
    id: socialLinkDocument.id,
    ...socialLinkDocument.data(),
  }));
}

export async function seedSocialLinks(socialLinks) {
  const db = getFirebaseDb();
  const batch = writeBatch(db);
  const socialLinksCollection = collection(db, SOCIAL_LINKS_COLLECTION);

  socialLinks.forEach(({ name, url }) => {
    if (!name || !url) {
      throw new Error("Every social link must have a name and URL before it can be imported.");
    }

    batch.set(
      doc(socialLinksCollection, name.toLowerCase()),
      { name, url },
      { merge: true }
    );
  });

  await batch.commit();
  return socialLinks.length;
}
