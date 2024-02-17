import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAoEWOKcLsTltfyzlU85VglSLVZoYCx-lE",
    authDomain: "instgramclone-66cb0.firebaseapp.com",
    projectId: "instgramclone-66cb0",
    storageBucket: "instgramclone-66cb0.appspot.com",
    messagingSenderId: "278627370400",
    appId: "1:278627370400:web:b4d68bfd267faabeaa10c5",
    measurementId: "G-HE411XRRLR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
