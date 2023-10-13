// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGETuz2u_mFLzcg4i-zgZm6fJGerbCnBk",
  authDomain: "proyectoinicial-5b060.firebaseapp.com",
  projectId: "proyectoinicial-5b060",
  storageBucket: "proyectoinicial-5b060.appspot.com",
  messagingSenderId: "50829333111",
  appId: "1:50829333111:web:c993c72d4c4f05d3e2ec72",
  measurementId: "G-65QJX941PS"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const dbFirebase = getFirestore(app)

const analytics = getAnalytics(app);

// npm install -g firebase-tools