import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyCEco1-X3bfuv8TSrzXmqp6wcTUbLMPnos",
  authDomain: "login-17a86.firebaseapp.com",
  databaseURL: "https://login-17a86.firebaseio.com",
  projectId: "login-17a86",
  storageBucket: "login-17a86.appspot.com",
  messagingSenderId: "451023259488",
  appId: "1:451023259488:web:84cbe04a48c6d4a1640005"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
