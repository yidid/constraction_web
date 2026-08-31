import { collection, doc, getDocs, writeBatch } from "firebase/firestore";
import { getFirebaseDb } from "../firebase";

const CATEGORIES_COLLECTION = "portfolioCategories";

export async function getPortfolioCategories() {
  const snapshot = await getDocs(collection(getFirebaseDb(), CATEGORIES_COLLECTION));
  return snapshot.docs.map((categoryDocument) => ({
    id: categoryDocument.id,
    ...categoryDocument.data(),
  }));
}

export async function seedPortfolioCategories(categories) {
  const db = getFirebaseDb();
  const batch = writeBatch(db);
  const categoriesCollection = collection(db, CATEGORIES_COLLECTION);

  categories.forEach((category) => {
    if (!category.value) {
      throw new Error("Every category must have a value before it can be imported.");
    }

    batch.set(doc(categoriesCollection, category.value), category, { merge: true });
  });

  await batch.commit();
  return categories.length;
}
