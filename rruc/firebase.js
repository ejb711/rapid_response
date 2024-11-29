// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD-eLWaiD-SO2YjDspl4zpE5zojNPvUhMw",
  authDomain: "rapid-response-377d9.firebaseapp.com",
  projectId: "rapid-response-377d9",
  storageBucket: "rapid-response-377d9.firebasestorage.app",
  messagingSenderId: "492999282501",
  appId: "1:492999282501:web:df9a7f96d5270a0caaf82c",
  measurementId: "G-BKX6M5F76C"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
