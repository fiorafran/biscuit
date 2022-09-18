import React from "react";
import styled from "./styles";
import { GoogleAuthLogin } from "./utils";
import firebase from "../../../firebase-config";
import { setLocal } from "../../utils/storage/localStorage";

const LoginGoogleButton = () => {
  const handleClick = () => {
    firebase
      .signInWithPopup(firebase.auth, firebase.GoogleProvider)
      .then((result) => {
        const credential =
          firebase.GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const { accessToken, displayName, email, phoneNumber, photoURL } =
          result.user;
        const userData = {
          accessToken,
          displayName,
          email,
          phoneNumber,
          photoURL,
        };
        setLocal(userData);
      })
      .catch((e) => {
        console.log(e);
        firebase.GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <styled.LoginWithGoogle onClick={handleClick}>
      Iniciar con Google
    </styled.LoginWithGoogle>
  );
};

export default LoginGoogleButton;
