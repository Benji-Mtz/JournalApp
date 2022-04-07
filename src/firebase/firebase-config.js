import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDuhYCOIjjwrjhwXQe3_6tG5-8AP4PrHD4",
    authDomain: "journal-app-react-443a8.firebaseapp.com",
    projectId: "journal-app-react-443a8",
    storageBucket: "journal-app-react-443a8.appspot.com",
    messagingSenderId: "263298055227",
    appId: "1:263298055227:web:f008d079d5337698a1f01e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider, 
    firebase
}