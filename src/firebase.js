import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyAAcXigCGY7ytiqh-8YDaSIkVGw6FpkLX4',
  authDomain: 'ts-victory.firebaseapp.com',
  databaseURL:
    'https://ts-victory-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'ts-victory',
  storageBucket: 'ts-victory.appspot.com',
  messagingSenderId: '1065286528909',
  appId: '1:1065286528909:web:d91e48059fa244d3c217c4',
  measurementId: 'G-37CB3ST9F7',
});

export const db = firebase.firestore();

export const auth = app.auth();

export default app;
