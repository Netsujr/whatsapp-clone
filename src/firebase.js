import firebase from "firebase/compat/app";
import 'firebase/compat/storage';
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUTTCHjTaMib1an0NZY4LeScfQwJYyzz4",
  authDomain: "whatsapp-clone-40cda.firebaseapp.com",
  projectId: "whatsapp-clone-40cda",
  storageBucket: "whatsapp-clone-40cda.appspot.com",
  messagingSenderId: "314678521881",
  appId: "1:314678521881:web:96da7a3ee8f9d29723ba88",
  measurementId: "G-PMBDL46M9L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }; // explicit xport
export default db; // implicit xport
