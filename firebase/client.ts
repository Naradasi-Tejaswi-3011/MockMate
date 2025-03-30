// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3xwzlx4WkLANi5bGZK6hUhzZwb4MNohc",
  authDomain: "mockmate-6b177.firebaseapp.com",
  projectId: "mockmate-6b177",
  storageBucket: "mockmate-6b177.firebasestorage.app",
  messagingSenderId: "662796393806",
  appId: "1:662796393806:web:cdfb43115c8d2b0e1d121f",
  measurementId: "G-XCMDXBL275"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);