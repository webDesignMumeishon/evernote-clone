import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCjqOH5DyDUrXI2NHPksIHM8Sh8wqGgH4",
  authDomain: "evernote-clone-d7098.firebaseapp.com",
  projectId: "evernote-clone-d7098",
  storageBucket: "evernote-clone-d7098.appspot.com",
  messagingSenderId: "123261067720",
  appId: "1:123261067720:web:e4b9ca65119d65e5b7e0fd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase