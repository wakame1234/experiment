import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyC-XH_blhH54AwdktczpVACuRJgwEf-SHM",
  authDomain: "react-cell-festival.firebaseapp.com",
  databaseURL: "https://react-cell-festival-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-cell-festival",
  storageBucket: "react-cell-festival.appspot.com",
  messagingSenderId: "325489132782",
  appId: "1:325489132782:web:cb5df336fd278fc3d11fff",
  measurementId: "G-78HWJJJXTM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
