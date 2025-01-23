// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJiLQF0d6j1fruOVRzZT-05rL-1jhsGwo",
  authDomain: "expensemate-c313c.firebaseapp.com",
  projectId: "expensemate-c313c",
  storageBucket: "expensemate-c313c.firebasestorage.app",
  messagingSenderId: "45760606441",
  appId: "1:45760606441:web:cab8c6fa385c193e3c4078",
  measurementId: "G-DV07GNJF38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);