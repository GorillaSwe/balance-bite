import { collection, getDocs } from "firebase/firestore";
import db from "../firebaseConfig";

export const getFoods = async () => {
  const snapshot = await getDocs(collection(db, "Foods"));
  const foods = snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      name: data.name,
      calories: data.calories,
    };
  });
  return foods;
};
