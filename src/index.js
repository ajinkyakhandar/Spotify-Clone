import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider} from "react-redux";
import store from "./store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Playlist from "./playlist/Playlist";
import AppLayout from "./AppLayout";
import Userprofile from "./UserProfile/Userprofile";
import Pagenotfound from "./Pagenotfound";
import Home from "./Home/Home";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
          path: "/playlist/:playlistID",
          element: <Playlist />,
      },
      {
        path: "/user/:userID",
        element: <Userprofile />,
    },
    {
      path: "/home",
      element: <Home />,
  }
    ]
  },
  {
    path: "*",
    element: <Pagenotfound/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />{" "}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
