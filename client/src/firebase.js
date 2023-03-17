import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDIxXAU0HXFyGRU63uRfGlX1SbvIvHPZc0",
  authDomain: "hacktivists-stratagem2k23.firebaseapp.com",
  projectId: "hacktivists-stratagem2k23",
  storageBucket: "hacktivists-stratagem2k23.appspot.com",
  messagingSenderId: "1086118318239",
  appId: "1:1086118318239:web:7d6309f02ae04e23ad92aa",
  measurementId: "G-FR1L91032V",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
