// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import firebase from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBU6GAQsDhXeb20TMwqg0ynwK1dnNkDzPs",
    authDomain: "trade-chim.firebaseapp.com",
    projectId: "trade-chim",
    storageBucket: "trade-chim.appspot.com",
    messagingSenderId: "731159794416",
    appId: "1:731159794416:web:948976866c362278c6e835"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const db = getFirestore(app);

export const addProduct = async (collections, data) => {
  try {
    await addDoc(collection(db, collections), data);
  } catch (err) {
    console.log(err);
  }
};

export const getAllProducts = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });
    return products;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const deleteProductById = async (collectionName, productId) => {
  try {
    const productRef = doc(db, collectionName, productId);
    await deleteDoc(productRef);
    console.log("Product deleted successfully");
  } catch (err) {
    console.log(err);
  }
};
