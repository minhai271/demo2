import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzMyvNorwIN2lwkJAKhEuClseAjd85_lM",
  authDomain: "movie-managermnent.firebaseapp.com",
  projectId: "movie-managermnent",
  storageBucket: "movie-managermnent.appspot.com",
  messagingSenderId: "442697318042",
  appId: "1:442697318042:web:f87209fb04d0e8739ca923",
  measurementId: "G-0PKHF7Z7W2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app)
export {storage};