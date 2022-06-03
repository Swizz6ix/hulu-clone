import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPrHDDasTR-fhdAbIo_stL79cs91ub5qk",
  authDomain: "hulu-69340.firebaseapp.com",
  projectId: "hulu-69340",
  storageBucket: "hulu-69340.appspot.com",
  messagingSenderId: "670800996618",
  appId: "1:670800996618:web:20238781e55cbcc3d772f3",
  measurementId: "G-77VK5LLYYH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

const provider = new GoogleAuthProvider();

export { auth, provider, storage }
export default db;