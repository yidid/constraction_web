import { collection, doc, getDocs, writeBatch } from "firebase/firestore";
import { getFirebaseDb } from "../firebase";

const TESTIMONIALS_COLLECTION = "testimonials";

export async function getTestimonials() {
  const snapshot = await getDocs(collection(getFirebaseDb(), TESTIMONIALS_COLLECTION));
  return snapshot.docs.map((testimonialDocument) => ({
    id: testimonialDocument.id,
    ...testimonialDocument.data(),
  }));
}

export async function seedTestimonials(testimonials) {
  const db = getFirebaseDb();
  const batch = writeBatch(db);
  const testimonialsCollection = collection(db, TESTIMONIALS_COLLECTION);

  testimonials.forEach((testimonial) => {
    if (!testimonial.id) {
      throw new Error("Every testimonial must have an id before it can be imported.");
    }

    batch.set(doc(testimonialsCollection, testimonial.id), testimonial, { merge: true });
  });

  await batch.commit();
  return testimonials.length;
}
