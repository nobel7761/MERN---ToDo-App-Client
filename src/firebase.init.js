// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_1cf8FK433iG2mBpOGhazJD9rXT25KaU",
    authDomain: "todo-app-d6086.firebaseapp.com",
    projectId: "todo-app-d6086",
    storageBucket: "todo-app-d6086.appspot.com",
    messagingSenderId: "1000229820801",
    appId: "1:1000229820801:web:3d69e05b6ab17753267080"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;