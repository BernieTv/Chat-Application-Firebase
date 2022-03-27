import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyB49bEqdaJ8Dj1Cf1CLjY7migcD_6szaq0",
    authDomain: "unichat-af5b7.firebaseapp.com",
    projectId: "unichat-af5b7",
    storageBucket: "unichat-af5b7.appspot.com",
    messagingSenderId: "397216649428",
    appId: "1:397216649428:web:fb22d05cb0f70b1d266b41",
  })
  .auth();
