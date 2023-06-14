import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyB1XyhGLQOmPvd3fV_DpJ2hlnlxECMlrRY",
  authDomain: "proj-71-8879c.firebaseapp.com",
  projectId: "proj-71-8879c",
  storageBucket: "proj-71-8879c.appspot.com",
  messagingSenderId: "796044151221",
  appId: "1:796044151221:web:ad88d2e4ded40ce9d8b1fc"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
