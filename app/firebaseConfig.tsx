import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlhJ3yVRFqc5BX9MRtD2o6mCEAFZTkS8g",
  authDomain: "fir-crud-64f47.firebaseapp.com",
  projectId: "fir-crud-64f47",
  storageBucket: "fir-crud-64f47.appspot.com",
  messagingSenderId: "886763320792",
  appId: "1:886763320792:web:eb3e3bfe5a079c6de1aead"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)