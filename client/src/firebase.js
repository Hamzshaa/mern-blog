// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-b8b08.firebaseapp.com",
  projectId: "mern-blog-b8b08",
  storageBucket: "mern-blog-b8b08.appspot.com",
  messagingSenderId: "1010022073969",
  appId: "1:1010022073969:web:acfc52ec592d5d58e2fdd0",
  measurementId: "G-VD9XL6GG0R",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
