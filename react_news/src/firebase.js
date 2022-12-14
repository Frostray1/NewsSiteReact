
import { initializeApp  } from "firebase/app";
// import { getFirestore, doc } from "firebase/firestore";
import "firebase/storage"

const firebaseConfig = {
 apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
 authDomain:process.env.REACT_APP_AUTH_DOMAIN,
 projectId:process.env.REACT_APP_PROJECT_ID,
 storageBucket: process.env.REACT_APP_STORAGE_BACKET,
 messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
 appId: process.env.REACT_APP_APP_ID,
};


// Initialize Firebase

const app  = initializeApp (firebaseConfig);
export const storage = app.storage
// export const firestore = getFirestore();