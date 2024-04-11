// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmd5BOWtAh17Kbm_xe_OLaE9nmaGDu7nA",
  authDomain: "tuan-profile.firebaseapp.com",
  projectId: "tuan-profile",
  storageBucket: "tuan-profile.appspot.com",
  messagingSenderId: "453498949461",
  appId: "1:453498949461:web:1243474efd7efc9951a9dc",
  measurementId: "G-79JRYRRD54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);