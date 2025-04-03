// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD37ASOnOgSlMPp5uSnwiJwJIgYnmhpTNA",
  authDomain: "react-curso-fe5bb.firebaseapp.com",
  projectId: "react-curso-fe5bb",
  storageBucket: "react-curso-fe5bb.firebasestorage.app",
  messagingSenderId: "1057579018957",
  appId: "1:1057579018957:web:ec4174567964020d849784"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

//Se agregó para usar los servicios de auth y de base de datos
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);