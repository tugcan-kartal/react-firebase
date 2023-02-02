import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDOFnHAWFgaSwzYaBH8W4Ndc9Q1vNVt22o",
  authDomain: "fir-course-cd562.firebaseapp.com",
  projectId: "fir-course-cd562",
  storageBucket: "fir-course-cd562.appspot.com",
  messagingSenderId: "1088717390132",
  appId: "1:1088717390132:web:769d00d8a27531982b6561",
  measurementId: "G-HQPT1X9H49"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const googleProvider=new GoogleAuthProvider();

export const db=getFirestore(app);
export const storage=getStorage(app);