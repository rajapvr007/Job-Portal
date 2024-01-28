// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import * as firebase from "firebase/app";
// import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPCcJYR111iZmqlHKt9UCbVz9pZpM1ho8",
  authDomain: "jobsearch-portal.firebaseapp.com",
  projectId: "jobsearch-portal",
  storageBucket: "jobsearch-portal.appspot.com",
  messagingSenderId: "520321170552",
  appId: "1:520321170552:web:57da9bbd70ef9e320a418d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};

// firebase.initializeApp(firebaseConfig);

// export const db = firebase.firestore();
