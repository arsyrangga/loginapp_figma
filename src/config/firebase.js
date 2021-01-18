import firebase from 'firebase/app'
import auth from 'firebase/firebase-auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDxtC4zZPO2KNf6fkbj1euYffrEz1j9uwQ",
    authDomain: "batch7firebases.firebaseapp.com",
    projectId: "batch7firebases",
    storageBucket: "batch7firebases.appspot.com",
    messagingSenderId: "260027262031",
    appId: "1:260027262031:web:45bf0e5270cde4fdb1b63a",
    measurementId: "G-524L67L6BY"
  };

firebase.initializeApp(firebaseConfig)


  export default firebase