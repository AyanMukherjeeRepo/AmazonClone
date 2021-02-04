import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv5oESbC-nvBtcfMow3Kx_m15VukgKlzo",
  authDomain: "clone-e7c29.firebaseapp.com",
  projectId: "clone-e7c29",
  storageBucket: "clone-e7c29.appspot.com",
  messagingSenderId: "576716950365",
  appId: "1:576716950365:web:9735c838a6858d9676f6b4",
  measurementId: "G-6LS923B0H8",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
export { db, auth };
