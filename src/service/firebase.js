// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getFirestore, setDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import firebase from 'firebase/app';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBMh2SQYoNsyguYR8Sghr5erGmIkJYstw",
  authDomain: "birdtrader-32d24.firebaseapp.com",
  projectId: "birdtrader-32d24",
  storageBucket: "birdtrader-32d24.appspot.com",
  messagingSenderId: "669921251379",
  appId: "1:669921251379:web:7343add29a494a6fd35346",
  measurementId: "G-Y1HZP1HHC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const db = getFirestore(app);


export const addProduct = async (collections,data) => {
    try {
        await addDoc(collection(db, collections), data);
    }catch(err) {
        console.log(err);
    }
}
