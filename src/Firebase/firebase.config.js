// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_v0KWaxgMOylsCLU1G8H_twjEGbwpaqc",
  authDomain: "toy-cars-client-d758c.firebaseapp.com",
  projectId: "toy-cars-client-d758c",
  storageBucket: "toy-cars-client-d758c.appspot.com",
  messagingSenderId: "831935187088",
  appId: "1:831935187088:web:bd851fe1c2fbd0ebe8b015"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;