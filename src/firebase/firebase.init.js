// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2C_SAeAUavZADKxQEdAJlUPvGFDCzYMU",
  authDomain: "coffee-store-2baab.firebaseapp.com",
  projectId: "coffee-store-2baab",
  storageBucket: "coffee-store-2baab.firebasestorage.app",
  messagingSenderId: "511012076610",
  appId: "1:511012076610:web:b93d381f908edaa5a281db",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
