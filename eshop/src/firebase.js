import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyASp2xPY4YpUkgUzNB8n3swIAmHE5b_oPU",
    authDomain: "eshop-a636b.firebaseapp.com",
    projectId: "eshop-a636b",
    storageBucket: "eshop-a636b.appspot.com",
    messagingSenderId: "45351631417",
    appId: "1:45351631417:web:0059889c5eea9827e2ebe8",
    measurementId: "G-GT7F3LVE3R"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

