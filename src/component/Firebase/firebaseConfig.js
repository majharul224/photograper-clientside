// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX1FN3LMUdzYV4qmg8dIwwmZ2alKb6Gb4",
  authDomain: "my-webapps-ab2ed.firebaseapp.com",
  projectId: "my-webapps-ab2ed",
  storageBucket: "my-webapps-ab2ed.appspot.com",
  messagingSenderId: "1018110627203",
  appId: "1:1018110627203:web:c8aae790e12dee1594fab6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;