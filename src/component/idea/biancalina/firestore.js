import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAnrmCvvi1NOV0L6I7n9rmCQcvbrVOljE0",
  authDomain: "react-firestore-crud-6538a.firebaseapp.com",
  databaseURL: "https://react-firestore-crud-6538a.firebaseio.com",
  projectId: "react-firestore-crud-6538a",
  storageBucket: "react-firestore-crud-6538a.appspot.com",
  messagingSenderId: "557432097883",
  appId: "1:557432097883:web:879cf8834426f9baca437e"
};

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()