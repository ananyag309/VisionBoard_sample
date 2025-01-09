// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAIzetdgfUxkpg2JeCa7_llE519ZFUg9b4",
    authDomain: "vision-board-59310.firebaseapp.com",
    projectId: "vision-board-59310",
    storageBucket: "vision-board-59310.firebasestorage.app",
    messagingSenderId: "528260999023",
    appId: "1:528260999023:web:38024da8c449cff199ea9a",
    measurementId: "G-8DMB937HB2"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);
