// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB8t6ELPRWsQfDwafFnL7dax04qZua7hO4',
  authDomain: 'csie-council.firebaseapp.com',
  projectId: 'csie-council',
  storageBucket: 'csie-council.appspot.com',
  messagingSenderId: '640380827898',
  appId: '1:640380827898:web:620c099b3e4b59a689b143',
  measurementId: 'G-G71P9B1FSD',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
