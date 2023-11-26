import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../components/common/Header/Header";
import SearchPage from "../Pages/SearchPage/SearchPage";

const Layout = () => {
  // const searchState = useSelector((state) => state.showSearch);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
