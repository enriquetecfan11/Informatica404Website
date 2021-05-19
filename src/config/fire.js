import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAMFKK6rhLS9g53XqVxsZ9THdrWkUK6P1c",
  authDomain: "testreact-44d51.firebaseapp.com",
  projectId: "testreact-44d51",
  storageBucket: "testreact-44d51.appspot.com",
  messagingSenderId: "972445541836",
  appId: "1:972445541836:web:50e2e3122cb8eadfad2969",
  measurementId: "G-Z4KCEYKHXZ",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
