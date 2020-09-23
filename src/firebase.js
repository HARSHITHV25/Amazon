import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyChv68DEJP7xAcvNuAkHtcAzq1e6ev_XcE",
  authDomain: "vintage-clone-25.firebaseapp.com",
  databaseURL: "https://vintage-clone-25.firebaseio.com",
  projectId: "vintage-clone-25",
  storageBucket: "vintage-clone-25.appspot.com",
  messagingSenderId: "762398223378",
  appId: "1:762398223378:web:9d1bd98259c419b3303ccb",
  measurementId: "G-9C716CWKJM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
