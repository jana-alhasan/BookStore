import React from "react";
import { createHashRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomePage from "../Pages/HomePage/HomePage";
import BookDetails from "../Pages/BookDetails/BookDetails";
import SearchPage from "../Pages/SearchPage/SearchPage";
import FavoritesPage from "../Pages/FavoritesPage/FavoritesPage";

const Routes = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "BookDetails/:bookId", element: <BookDetails /> },
      { path: "search", element: <SearchPage /> },
      { path: "favorites", element: <FavoritesPage /> },
    ],
  },
]);

export default Routes;
