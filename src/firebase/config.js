import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj67jvbns5fRsFepsugjEHRThgi7yCOrM",
  authDomain: "whikser-a5580.firebaseapp.com",
  projectId: "whikser-a5580",
  storageBucket: "whikser-a5580.appspot.com",
  messagingSenderId: "755105843888",
  appId: "1:755105843888:web:a41ec068f30eabd2a18975",
  measurementId: "G-M921298DP2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();

// Configure Google Provider
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export { app, analytics, db, auth, storage, googleProvider };
