import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAqthb_SFHjHNGMrn2Gt7fwBhtUqjQNE_s",
  authDomain: "auth-834ad.firebaseapp.com",
  projectId: "auth-834ad",
  storageBucket: "auth-834ad.appspot.com",
  messagingSenderId: "750246551793",
  appId: "1:750246551793:web:3392ae18a6a9f968d34950",
  measurementId: "G-V9HYFP5VS9",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
