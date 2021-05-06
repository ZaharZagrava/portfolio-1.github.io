import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import firebase from 'firebase';

// --- Setting up Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCjiXKprpTWgfmKcfC21XfQSDRcoKc5z9A",
  authDomain: "zaharzagrava-3c567.firebaseapp.com",
  databaseURL: "https://zaharzagrava-3c567.firebaseio.com",
  projectId: "zaharzagrava-3c567",
  storageBucket: "zaharzagrava-3c567.appspot.com",
  messagingSenderId: "490282484784",
  appId: "1:490282484784:web:45b2611ceb1b472eae19f5",
  measurementId: "G-4X4ES3EZZP"
};

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
