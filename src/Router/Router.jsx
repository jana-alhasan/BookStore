import React from "react";
import { createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/Layout";
import BookInfo from "../components/Book/BookInfo";
import HomePage from "../Pages/HomePage/HomePage";
import BookDetails from "../Pages/BookDetails/BookDetails";
import SearchPage from "../Pages/SearchPage/SearchPage";




const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/BookDetails/:bookId", element: <BookDetails/> },
      { path: "/search", element: <SearchPage/> },   
    ],
  },
]);

export default Routes;
