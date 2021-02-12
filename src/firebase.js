// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from"firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAeoHVMkzR3o2KWSPHBvDJonq7jS17Ng3s",
    authDomain: "clone-shiv.firebaseapp.com",
    projectId: "clone-shiv",
    storageBucket: "clone-shiv.appspot.com",
    messagingSenderId: "511109812507",
    appId: "1:511109812507:web:0849e25903aaf0894203be",
    measurementId: "G-S3E1C0WG9R"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export {  db , auth };