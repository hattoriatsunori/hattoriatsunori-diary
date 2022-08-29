// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCGdI0VmQL6qp2Y3vkBJsbdZeLTJ1aOWM",
  authDomain: "hattoriatsunori-diary.firebaseapp.com",
  projectId: "hattoriatsunori-diary",
  storageBucket: "hattoriatsunori-diary.appspot.com",
  messagingSenderId: "574178262692",
  appId: "1:574178262692:web:17d0afd9e1613c81db3031",
  measurementId: "G-059GKS53HP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
///ブラウザのみで動作させる
if(typeof window !== 'undefined'){
  const analytics = getAnalytics(app);
}

export const db = getFirestore();