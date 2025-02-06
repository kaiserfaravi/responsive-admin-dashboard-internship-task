// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApxKO9ZZPEaGcqH1cz9g43fzkguRxM6DM",
  authDomain: "fir-test-1-6643a.firebaseapp.com",
  projectId: "fir-test-1-6643a",
  storageBucket: "fir-test-1-6643a.firebasestorage.app",
  messagingSenderId: "1089792058572",
  appId: "1:1089792058572:web:4a27bbc49a4eaaab814e69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;