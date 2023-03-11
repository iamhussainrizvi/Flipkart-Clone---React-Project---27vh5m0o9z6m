// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFkj8ZNFMBbWjN-ycP3breztlIoDcwa_Y",
  authDomain: "clone-flipkart.firebaseapp.com",
  projectId: "clone-flipkart",
  storageBucket: "clone-flipkart.appspot.com",
  messagingSenderId: "1047876576659",
  appId: "1:1047876576659:web:3365fbf76296e567e0b466"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
const auth = getAuth(app);

export {auth};

// export {db};