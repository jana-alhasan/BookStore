import React from "react";
import Routes from "./Router/Router";
import { RouterProvider } from "react-router-dom";

function App() {

  return (
    <RouterProvider router={Routes}/>
  );
}

export default App;
