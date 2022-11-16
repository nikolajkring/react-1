import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDjOCi3sUEbf_OboMXwLoXscOeAtBahSDw",
    authDomain: "booking-c7b73.firebaseapp.com",
    projectId: "booking-c7b73",
    storageBucket: "booking-c7b73.appspot.com",
    messagingSenderId: "109217968557",
    appId: "1:109217968557:web:ba8db96dcce9d2ff37b124",
    measurementId: "G-XZ24B508B4"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);