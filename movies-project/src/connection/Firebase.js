import firebase from "firebase";
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyACFZsmcphrs8LKQz7QatOc15R5H4qECWQ",
    authDomain: "movies-project-a5ffd.firebaseapp.com",
    databaseURL: "https://movies-project-a5ffd-default-rtdb.firebaseio.com",
    projectId: "movies-project-a5ffd",
    storageBucket: "movies-project-a5ffd.appspot.com",
    messagingSenderId: "95302704797",
    appId: "1:95302704797:web:4caa684c0bf096aa583e74"
  };
  // Initialize Firebase
  let fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb;