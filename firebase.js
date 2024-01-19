// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDn9Wi04YHgOyiSf6z6R1G8KfV-JmQQysY",
  authDomain: "assignment-72c2b.firebaseapp.com",
  projectId: "assignment-72c2b",
  storageBucket: "assignment-72c2b.appspot.com",
  messagingSenderId: "671744071656",
  appId: "1:671744071656:web:ec8fb51cd78df66f69365d",
  measurementId: "G-X4E4WK3YD9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);