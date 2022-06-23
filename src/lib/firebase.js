import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBRr_brgt4hauYKi41K3h8UP8LkoH0yV_s",
  authDomain: "fir-sample-ab1eb.firebaseapp.com",
  projectId: "fir-sample-ab1eb",
  storageBucket: "fir-sample-ab1eb.appspot.com",
  messagingSenderId: "504814712551",
  appId: "1:504814712551:web:45dae7270428b3da9cd442"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);