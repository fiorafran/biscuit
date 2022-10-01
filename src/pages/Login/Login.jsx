import LoginGoogleButton from "../../components/LoginGoogleButton";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles";
import { getLocal } from "../../utils/storage/localStorage";
import { redirect } from "react-router-dom";

const Login = () => {
  const [showLogin, setShowLogin] = useState(false);
  const state = useRef({
    isLoading: false,
  });

  const { isLoading } = state.current;
  useEffect(() => {
    state.current.isLoading = true;
    const userDataString = getLocal("cache-user");
    if (userDataString) {
      setShowLogin(false);
      console.log("HAY USER");
      redirect("/Home");
      state.current.isLoading = false;
      return;
    }
    console.log("no user");
    return setShowLogin(true);
    return () => {
      state.current.isLoading = false;
    };
  }, []);
  console.log({ isLoading, showLogin });

  return (
    <styles.LoginWrapper>
      {showLogin && <LoginGoogleButton />}
    </styles.LoginWrapper>
  );
};

export default Login;
