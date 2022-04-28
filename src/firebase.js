// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOCxvhr-R2wmbGWMyqGRKuqx8l2Fjsk-g",
  authDomain: "maganache.firebaseapp.com",
  projectId: "maganache",
  storageBucket: "maganache.appspot.com",
  messagingSenderId: "134676031633",
  appId: "1:134676031633:web:4c42b1ad879de043c53730",
  measurementId: "G-2RLSYR95KW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default {
  app
}
