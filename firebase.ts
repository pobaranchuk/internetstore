import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfv2FynA2PqDN-12QVZBk0aHtsVYIqxiE",
  authDomain: "internetstore-73e9d.firebaseapp.com",
  projectId: "internetstore-73e9d",
  storageBucket: "internetstore-73e9d.firebasestorage.app",
  messagingSenderId: "69818744451",
  appId: "1:69818744451:web:7da451d48ad13cf8d325b6",
  measurementId: "G-T0PR4DK0B9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);