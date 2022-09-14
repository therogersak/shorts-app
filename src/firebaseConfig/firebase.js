import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwXT33jI8meMIfp_3BZB4ueXaVPnQeRiQ",
  authDomain: "short-app-185f4.firebaseapp.com",
  projectId: "short-app-185f4",
  storageBucket: "short-app-185f4.appspot.com",
  messagingSenderId: "249763321240",
  appId: "1:249763321240:web:fc3e4edac2bb45640f07ed",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
const storage = getStorage();

export { db, storage, app };
