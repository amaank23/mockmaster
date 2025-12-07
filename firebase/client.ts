import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbTj2ZPlBE40RfLWiPtlRW6lMZLBny3MA",
  authDomain: "mock-master-998fa.firebaseapp.com",
  projectId: "mock-master-998fa",
  storageBucket: "mock-master-998fa.firebasestorage.app",
  messagingSenderId: "73451664286",
  appId: "1:73451664286:web:ad416ac95765beae789c8f",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);

export const db = getFirestore(app);
