// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCguxM4g5Db-hqMupyIFNr7I38TQb2zQ7I",
  authDomain: "job-find-karo.firebaseapp.com",
  projectId: "job-find-karo",
  storageBucket: "job-find-karo.appspot.com",
  messagingSenderId: "582112472402",
  appId: "1:582112472402:web:978763b3befdd58c505e8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}