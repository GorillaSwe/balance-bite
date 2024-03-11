import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJ-cXUT8dfkrixSIaJR5KELvNN0PDrNQs",
  authDomain: "balance-bite-9242c.firebaseapp.com",
  projectId: "balance-bite-9242c",
  storageBucket: "balance-bite-9242c.appspot.com",
  messagingSenderId: "200797903339",
  appId: "1:200797903339:web:98ab7f12092580266aa1ae",
  measurementId: "G-VTMH7C28NQ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
