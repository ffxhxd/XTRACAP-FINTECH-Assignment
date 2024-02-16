import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import FavouritesPage from "./Components/Favourites/FavouritesPage";
import ErrorPage from "./Components/ErrorPage";
import Explore from "./Components/Explore/Explore";
import BeerDetailPage from "./Components/BeerDetailPage";
import SearchPage from "./Components/SearchPage";

//defining routes for our beer application
const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/favourites",
        element: <FavouritesPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/details/:id",
        element: <BeerDetailPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />);
