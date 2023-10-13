// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-1GX3CPCQAl1_D1b4Y6tm-2MGay3cAwM",
  authDomain: "linkedin-clone-e34d1.firebaseapp.com",
  projectId: "linkedin-clone-e34d1",
  storageBucket: "linkedin-clone-e34d1.appspot.com",
  messagingSenderId: "748629676529",
  appId: "1:748629676529:web:212741cb4eac1cc6f63450"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
