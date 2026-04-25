import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;


/**

/
const firebaseConfig = {
  apiKey: "AIzaSyA36YRj_LtG5efkmCWeUoi-LOH08SAm-zk",
  authDomain: "online-game-library.firebaseapp.com",
  projectId: "online-game-library",
  storageBucket: "online-game-library.firebasestorage.app",
  messagingSenderId: "390034632263",
  appId: "1:390034632263:web:2b3df450d4ff59797c8b62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 */