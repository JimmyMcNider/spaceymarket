import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDsaPr1uhmjGi0u5r5D-79qdb2WfdWXASA",
  authDomain: "raraity-d761c.firebaseapp.com",
  projectId: "raraity-d761c",
  storageBucket: "raraity-d761c.appspot.com",
  messagingSenderId: "537351511819",
  appId: "1:537351511819:web:057ca70c38a3e872888c0e",
  measurementId: "G-5WY66QTN0L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };