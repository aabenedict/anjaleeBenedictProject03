// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtLXhz3W8c4bVD10yv6m3TwMhKHpsOLs0",
    authDomain: "ecommerce-project-03.firebaseapp.com",
    projectId: "ecommerce-project-03",
    storageBucket: "ecommerce-project-03.appspot.com",
    messagingSenderId: "872690249441",
    appId: "1:872690249441:web:f089dd4c4f96de8a6bd1a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;