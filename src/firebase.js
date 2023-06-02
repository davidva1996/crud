// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaCha0k4jXY9WeSw3pcpEaqegrFKKNZo8",
  authDomain: "crud-7aa02.firebaseapp.com",
  projectId: "crud-7aa02",
  storageBucket: "crud-7aa02.appspot.com",
  messagingSenderId: "917952393107",
  appId: "1:917952393107:web:fc63fde9420dec22dc8266"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)