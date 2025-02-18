// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJjq_Eb9M4XYdRi7kUTIt6V8F0FoCw2dA",
  authDomain: "knowieky.firebaseapp.com",
  projectId: "knowieky",
  storageBucket: "knowieky.firebasestorage.app",
  messagingSenderId: "194718099450",
  appId: "1:194718099450:web:390f2d7f97a1bc1a186643",
  measurementId: "G-Y2KP8SCVGR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const auth = getAuth(app);