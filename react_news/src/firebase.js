
import { initializeApp  } from "firebase/app";
// import { getFirestore, doc } from "firebase/firestore";
import "firebase/storage"

const firebaseConfig = {
 apiKey: 'AIzaSyATpBAfRTD-lGgE6R6xO_1IB0eL0Uk0TyM',
 authDomain:'auth-news-1d84d.firebaseapp.com',
 projectId:'auth-news-1d84d',
 storageBucket: 'auth-news-1d84d.appspot.com',
 messagingSenderId: '814623165487',
 appId: '1:814623165487:web:c59fdf1312e91b143c4ada',
};


// Initialize Firebase

const app  = initializeApp (firebaseConfig);
export const storage = app.storage
// export const firestore = getFirestore();