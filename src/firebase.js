import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBfUe8BKHZ7lgBEnNMJ4ixO9pGhcRjmPEM",
  authDomain: "spaceymarket.firebaseapp.com",
  projectId: "spaceymarket",
  storageBucket: "spaceymarket.appspot.com",
  messagingSenderId: "513691426053",
  appId: "1:513691426053:web:f845467c5e19fcb007ab6c",
  measurementId: "G-5XRCL9RD09"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };