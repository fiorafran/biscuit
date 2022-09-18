import React, { useEffect, useState } from "react";
import styles from "./styles";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";

const router = createBrowserRouter([
  {
   path: '/',
   element: <Login />,
    
  },
  {
    path: "/Home",
    element: <Home />,
  }
]);

const App = () => {
  return (
    <styles.AppContainer>
       <RouterProvider router={router} />
    </styles.AppContainer>
  );
}

export default App;
