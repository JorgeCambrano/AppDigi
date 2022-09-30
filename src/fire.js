import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAHegVZi5rgirI5Uv8f70p0Dbb5CeiG5d0",
  authDomain: "digit-d5a42.firebaseapp.com",
  projectId: "digit-d5a42",
  storageBucket: "digit-d5a42.appspot.com",
  messagingSenderId: "678167597756",
  appId: "1:678167597756:web:86c6f8af315533f804b6b9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();