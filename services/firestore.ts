import { collection, getDocs } from "firebase/firestore";
import db from "../firebaseConfig";

export const getFoods = async () => {
  const snapshot = await getDocs(collection(db, "Foods"));
  const foods = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return foods;
};
