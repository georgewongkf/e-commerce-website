import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB8UKX01ej56zQqRtj4SyU_XPLXfn54XBo",
  authDomain: "ecommercegwkf.firebaseapp.com",
  databaseURL:
    "https://ecommercegwkf-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ecommercegwkf",
  storageBucket: "ecommercegwkf.appspot.com",
  messagingSenderId: "471052782894",
  appId: "1:471052782894:web:14bf0e90e0fc205d7abebf",
  measurementId: "G-2T374SVGBC",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage();
