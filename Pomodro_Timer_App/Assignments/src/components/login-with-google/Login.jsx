import React from 'react';
import './login.css';
import {FcGoogle} from 'react-icons/fc';
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {auth} from './Firebase';
import HomePage from '../HomePage';

const Login = () => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider ();
    signInWithPopup (auth, provider)
      .then (result => {
        const name = result.user.displayName;
        const email = result.user.email;

        localStorage.setItem ('name', name);
        localStorage.setItem ('email', email);
        window.location.reload ('/');
      })
      .catch (error => {
        console.log (error);
      });
  };
  return (
    <div>
      <HomePage />
      <button className="signInWithGoogle" onClick={signInWithGoogle}>
        <span className="google-icon"><FcGoogle /></span>
        Sign In With Google
      </button>
    </div>
  );
};

export default Login;
