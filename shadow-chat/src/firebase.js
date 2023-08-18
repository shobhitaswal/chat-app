import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBh9tXsVv2Lj4DDcansVuEr83l-9_8vmQ",
  authDomain: "shadowchat-6acb0.firebaseapp.com",
  projectId: "shadowchat-6acb0",
  storageBucket: "shadowchat-6acb0.appspot.com",
  messagingSenderId: "197018733251",
  appId: "1:197018733251:web:b75820bb4393d037bd7076",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
