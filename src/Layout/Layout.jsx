import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/common/Header/Header";

const Layout = () => {

  // const searchTerm = useSelector((state) => state.searchTerm);
  // console.log(searchTerm, "mnnn");
  // dispatch({ type: "setSearchTerm", payload: searchTerm });
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
