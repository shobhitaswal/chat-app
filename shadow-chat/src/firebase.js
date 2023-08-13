import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1Xk5p8vPEdsP20KfKrFkN69Zrhj6jqTE",
  authDomain: "shadowchat-42e89.firebaseapp.com",
  projectId: "shadowchat-42e89",
  storageBucket: "shadowchat-42e89.appspot.com",
  messagingSenderId: "167452560398",
  appId: "1:167452560398:web:5b89aa4db19b1d1171805f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
