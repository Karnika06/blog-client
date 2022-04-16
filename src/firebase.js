// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHWx5r6y2MyFWqHR9HvqLy8YRMbamGUxE",
  authDomain: "blog-mern-project-4444c.firebaseapp.com",
  projectId: "blog-mern-project-4444c",
  storageBucket: "blog-mern-project-4444c.appspot.com",
  messagingSenderId: "963806633637",
  appId: "1:963806633637:web:481f9352497123ad6e374c",
  measurementId: "G-5HHHGD9V9J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);