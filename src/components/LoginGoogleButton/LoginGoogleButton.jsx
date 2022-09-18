import React from 'react'
import styled from './styles'
import { GoogleAuthLogin } from './utils';
import firebase from '../../../firebase-config'

const LoginGoogleButton = () => {

  const handleClick = () => {
    firebase.signInWithPopup(firebase.auth, firebase.GoogleProvider).then((result) => {
      const credential = firebase.GoogleAuthProvider.credentialFromResult(result);
      console.log('credential :', credential);
      const token = credential.accessToken;
      console.log('token :', token);
      const user = result.user
      console.log('user :', user);
    })
    .catch(e => {
      console.log(e)
      firebase.GoogleAuthProvider.credentialFromError(error);
    })
  };

  return (
    <styled.LoginWithGoogle onClick={handleClick}>Iniciar con Google</styled.LoginWithGoogle>
  )
}

export default LoginGoogleButton