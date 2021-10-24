import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import FirestoreManager from "./FirestoreManager";
import StorageManager from "./StorageManager";

const firebaseConfig = {
  apiKey: "AIzaSyBLokPNOfe-foR97OT9ylHMdyvQuzNG5xc",
  authDomain: "fae-bedwell-portfolio.firebaseapp.com",
  projectId: "fae-bedwell-portfolio",
  storageBucket: "fae-bedwell-portfolio.appspot.com",
  messagingSenderId: "161433296034",
  appId: "1:161433296034:web:91ad274f0d7974eebd8bfb",
  measurementId: "G-BGMSW2V3LE"
};

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore();
const storageRef = getStorage(firebaseApp);

export const firestoreManager = new FirestoreManager(firestore);
export const storageManager = new StorageManager(storageRef);