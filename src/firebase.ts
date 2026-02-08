import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCknqJ_poamBG8RZ5JY86LK8LiQDeFuu_Y",
  authDomain: "mixed-matched.firebaseapp.com",
  projectId: "mixed-matched",
  storageBucket: "mixed-matched.firebasestorage.app",
  messagingSenderId: "791427961554",
  appId: "1:791427961554:web:eb245afe127afc1dc3130b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
