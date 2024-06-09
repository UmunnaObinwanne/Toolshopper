// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnrLZiPH7vBCqGELWHtM2a9oYO_NPwYB8",

  authDomain: "vintagemart-b90f6.firebaseapp.com",

  projectId: "vintagemart-b90f6",

  storageBucket: "vintagemart-b90f6.appspot.com",

  messagingSenderId: "448553150321",

  appId: "1:448553150321:web:29af46edae93650eb578d0",
};

const app = initializeApp(firebaseConfig);

export default app;
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
