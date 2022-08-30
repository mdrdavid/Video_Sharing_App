
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {

  apiKey: "AIzaSyCjc4rc9YQhCrUDQSMYVvAoi0ruKqFEGqo",

  authDomain: "video-e5671.firebaseapp.com",

  projectId: "video-e5671",

  storageBucket: "video-e5671.appspot.com",

  messagingSenderId: "260199176430",

  appId: "1:260199176430:web:83d82e7738cbe24653fbff",

  measurementId: "G-JGZDXVME02"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth()

export const provider = new GoogleAuthProvider()

export default app

// const analytics = getAnalytics(app);