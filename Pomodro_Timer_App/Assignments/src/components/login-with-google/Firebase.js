import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBeCL2T-AU6mkKzwTM3zKxpZyZj5dLsjFU",
  authDomain: "login-a6d5a.firebaseapp.com",
  projectId: "login-a6d5a",
  storageBucket: "login-a6d5a.appspot.com",
  messagingSenderId: "925859160701",
  appId: "1:925859160701:web:2ba2f199dced5419bb0714"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


