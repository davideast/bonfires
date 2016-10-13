import { initializeApp } from 'firebase';
export function initApp() {
  const config = {
    apiKey: "AIzaSyBAjWCgQbbhhwoy4TffyTmHEMkhWG3dRzE",
    authDomain: "sql-for-firebase-devs.firebaseapp.com",
    databaseURL: "https://sql-for-firebase-devs.firebaseio.com",
    storageBucket: "sql-for-firebase-devs.appspot.com",
    messagingSenderId: "583164206075"
  };
  return initializeApp(config);
}