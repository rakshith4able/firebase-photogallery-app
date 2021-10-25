// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBysyK12fCQrXVyGQ-vm0go9NKFGLwD4NA",
  authDomain: "fire-gallery-48321.firebaseapp.com",
  projectId: "fire-gallery-48321",
  storageBucket: "fire-gallery-48321.appspot.com",
  messagingSenderId: "610141016239",
  appId: "1:610141016239:web:870ea728b1de3d59da445a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = getStorage(app);

const projectFirestore = getFirestore(app);

export { projectStorage, projectFirestore };