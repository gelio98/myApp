// Import the functions you need from the SDKs you need
import { getCurrentUser } from 'expo-google-sign-in';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


import uuid from 'uuid';

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

const db = firebase.firestore();
const auth = firebase.auth();
var user = firebase.auth().currentUser;

export const addIncidencia = (title, description, imgURL, userEmail, categoryID, incidenceType) => {
  console.log (title, description)
  return db.collection("incidencia").add({
    title,
    description,
    imgURL,
    userEmail,
    categoryID,
    incidenceType,
    latitude: "38.375868",
    longitude: "0.491327",
    encontrado: false,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    id: firebase.firestore.Timestamp.fromDate(new Date())
  
  })
}

export const uploadImage = (file) => {
  const ref = firebase.storage().ref(`images/${file.name}`)

  const task = ref.put(file)
  return task
}

const getPictureBlob = (imageUri) => {
  // https://github.com/expo/expo/issues/2402#issuecomment-443726662
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      console.log(e);
      reject(new TypeError('Network request failed'));
    };
    xhr.responseType = 'blob';
    xhr.open('GET', imageUri, true);
    xhr.send(null);
  });
};



export const uploadImageToBucket = async (imageUri) => {
  let blob;
  try {
    
    blob = await getPictureBlob(imageUri);
    console.log("despues de pictureblob")
    console.log(blob)
    const ref = await firebase.storage().ref("images/" + imageUri);
    
    console.log("despues de await")
  
    const snapshot = await ref.put(blob);

    console.log(await snapshot.ref.getDownloadURL())
    return await snapshot.ref.getDownloadURL();
  } catch (e) {
    alert(e.message);
  } finally {
    blob.close();
   
  }
};



export const getUserEmail = () => {

  console.log ("Voy a comprobar el usuario")

  if (user) {
    console.log('User email: ', user.email);
   }
  return user.email
}


export const fetchLatestIncidencias = () => {
  db.collection("incidencia").onSnapshot((querySnapshot) => {
   
   
    querySnapshot.docs.forEach((doc) => {
        console.log(doc.data())
    })
      })
    }



    export const deleteByID = async (id) => {
     
        const snapshot = await db.collection("incidencia").limit(1).where('id', '==', id).get();
        const doc = snapshot.docs[0];
        doc.ref.delete();
    };


export { db, auth, user};