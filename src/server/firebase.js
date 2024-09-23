import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyC_v4UWFhJlXjrnQo26ZKqgx6n7cxDxNEY",
  authDomain: "bharat-conferencing.firebaseapp.com",
  databaseURL: "https://bharat-conferencing-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bharat-conferencing",
  storageBucket: "bharat-conferencing.appspot.com",
  messagingSenderId: "243033188049",
  appId: "1:243033188049:web:27ac639d6b6687dc0dc7f0",
  measurementId: "G-5F8MG73JT8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase;

var firepadRef = firebase.database().ref();

export const userName = prompt("What's your name?");
const urlparams = new URLSearchParams(window.location.search);
const roomId = urlparams.get("id");

if (roomId) {
  firepadRef = firepadRef.child(roomId);
} else {
  firepadRef = firepadRef.push();
  window.history.replaceState(null, "Meet", "?id=" + firepadRef.key);
}

export default firepadRef;
