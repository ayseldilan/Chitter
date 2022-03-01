// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNrQeFYj_qwMumEXzjCwI0H8XQMve6CbY",
  authDomain: "twitter-clone-d6f1b.firebaseapp.com",
  databaseURL: "https://twitter-clone-d6f1b-default-rtdb.firebaseio.com",
  projectId: "twitter-clone-d6f1b",
  storageBucket: "twitter-clone-d6f1b.appspot.com",
  messagingSenderId: "904725899785",
  appId: "1:904725899785:web:a7f7bddd60c706beac26d8",
  measurementId: "G-5FMG3JFF1B"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;