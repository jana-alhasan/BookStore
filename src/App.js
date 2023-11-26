import React from "react";
import { RouterProvider } from "react-router-dom";
import Routes from "./Router/Router";
import { useSelector } from "react-redux";
import { Provider } from "react-redux";
import store from "./utilities/store";

function App() {

  return (
    // <Provider store={store}>
    <RouterProvider router={Routes} />
    // </Provider>
  );
}

export default App;
