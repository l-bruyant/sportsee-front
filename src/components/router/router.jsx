import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Root from './root'
import '../../index.css'
// import Root from "../routes/root";
// import ErrorPage from "../routes/error-page";
// import Home from "../routes/home"

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />
    // errorElement: <ErrorPage />,
    // children: [
    //   { index: true, element: <Home /> },
    //   {
    //     path: "home/",
    //     element: <Home />,
    //     errorElement: <ErrorPage />,
    //   },
    //   {
    //     path: "*",
    //     element: <ErrorPage />,
    //     errorElement: <ErrorPage />,
    //   },
    // ],
  }
])
