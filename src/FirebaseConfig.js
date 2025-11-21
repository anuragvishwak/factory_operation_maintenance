import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1RNg4jiXD-TVJq4UgJfJlJjyu8WxwE6w",
  authDomain: "construction-management-505a3.firebaseapp.com",
  projectId: "construction-management-505a3",
  storageBucket: "construction-management-505a3.firebasestorage.app",
  messagingSenderId: "617276805227",
  appId: "1:617276805227:web:31e5722d240e88510c612e",
  measurementId: "G-4Y82PGF5X9"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getFirestore(app);
const auth = getAuth(app);

export { app, database, auth };