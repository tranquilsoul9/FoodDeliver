import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA7tquotLtL-Cwo67qfsLwPOGHh1t_urKg",
  authDomain: "food-order-7282f.firebaseapp.com",
  projectId: "food-order-7282f",
  storageBucket: "food-order-7282f.appspot.com",
  messagingSenderId: "632636854116",
  appId: "1:632636854116:android:581d9afccc5cd2f9edf471"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
