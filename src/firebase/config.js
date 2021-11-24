// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore, serverTimestamp } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLNYmY7TcRq2iBb4vs_Rl2A80GdUU1SlY",
    authDomain: "fire-gallery-85c6d.firebaseapp.com",
    projectId: "fire-gallery-85c6d",
    storageBucket: "fire-gallery-85c6d.appspot.com",
    messagingSenderId: "352647761171",
    appId: "1:352647761171:web:6b8410b661a0bdb43f5ee6",
    measurementId: "G-ZMB5R4HF6S"
  };
  



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = getStorage(app);

const projectFirestore = getFirestore(app);


const timeStamp = serverTimestamp;

export { projectStorage, projectFirestore, timeStamp };
