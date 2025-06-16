// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbAWjh6M8T4uXpIkFLEf0vPlhR6LYd-TA",
  authDomain: "plants-4c611.firebaseapp.com",
  projectId: "plants-4c611",
  storageBucket: "plants-4c611.firebasestorage.app",
  messagingSenderId: "943272999113",
  appId: "1:943272999113:web:a05e6e7a25170c659ef518"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;