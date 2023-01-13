// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGQIuRW2n5zY74oQABw-lE6qrdJv2mmUQ",
  authDomain: "movix-react-rtk.firebaseapp.com",
  projectId: "movix-react-rtk",
  storageBucket: "movix-react-rtk.appspot.com",
  messagingSenderId: "818861058156",
  appId: "1:818861058156:web:436b3ea11144ca583a1049",
  measurementId: "G-QM47GQRQ3W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);

export default app;