// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnIhZa8e_tWQ5xZe3PBddfpUSFe3mx-zY",
  authDomain: "myapp-cf6af.firebaseapp.com",
  databaseURL: "https://myapp-cf6af-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "myapp-cf6af",
  storageBucket: "myapp-cf6af.appspot.com",
  messagingSenderId: "66863357552",
  appId: "1:66863357552:web:444a10862de08e44e4deb5",
  measurementId: "G-D702HGXFS4"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };