import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC0s7BCB7Ign9F5f4wAM0Q6JgLfVX6NdPg",
  authDomain: "slack-18f79.firebaseapp.com",
  projectId: "slack-18f79",
  storageBucket: "slack-18f79.appspot.com",
  messagingSenderId: "694878909349",
  appId: "1:694878909349:web:c8f90ba71f1832ed68ee4c",
  measurementId: "G-F92TYEQ058",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
