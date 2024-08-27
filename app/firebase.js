// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ6QrlHi7BkwmFD9JNgB1xof7yvGxCaSM",
  authDomain: "hspantrytracker-c1014.firebaseapp.com",
  projectId: "hspantrytracker-c1014",
  storageBucket: "hspantrytracker-c1014.appspot.com",
  messagingSenderId: "760786417946",
  appId: "1:760786417946:web:3db341c2c40e72d6e514a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
