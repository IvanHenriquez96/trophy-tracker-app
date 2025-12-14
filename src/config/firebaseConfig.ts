// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: Constants.expoConfig?.extra?.apiKey || "",
  authDomain: Constants.expoConfig?.extra?.authDomain || "",
  projectId: Constants.expoConfig?.extra?.projectId || "",
  storageBucket: Constants.expoConfig?.extra?.storageBucket || "",
  messagingSenderId: Constants.expoConfig?.extra?.messagingSenderId || "",
  appId: Constants.expoConfig?.extra?.appId || "",
  measurementId: Constants.expoConfig?.extra?.measurementId || "",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
