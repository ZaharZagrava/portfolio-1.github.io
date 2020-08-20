import React from 'react';
import ReactDOM from 'react-dom';

import './util/reset.css';
import './util/global.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

import * as firebase from 'firebase/app';

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
