import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGw6RH2753vgPB_giAryMVzEs5ouG-4Fk",
  authDomain: "fb-clone-a138b.firebaseapp.com",
  projectId: "fb-clone-a138b",
  storageBucket: "fb-clone-a138b.appspot.com",
  messagingSenderId: "176870002802",
  appId: "1:176870002802:web:e17e2c4025cffa90b972eb",
  measurementId: "G-S0G7448KHY"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

const storage = firebase.storage();

export { db, storage}