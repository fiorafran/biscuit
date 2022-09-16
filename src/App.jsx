import React, { useEffect, useState } from "react";
import styles from "./styles";
import firebase from '../firebase-config' 
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const App = () => {
  console.log({firebase})
  return (
    <styles.AppContainer>
       <RouterProvider router={router} />
    </styles.AppContainer>
  );
}

export default App;
