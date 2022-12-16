import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import '../../index.css'

import Root from '../layout/pages/root'
import Dashboard from '../layout/pages/dashboardLayout'
import ErrorPage from '../layout/pages/errorpage'

/**
*
* Define what to display on the page depending on the current url 
*
* @component
*
*/

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'dashboard/:userId',
        element: <Dashboard />,
        errorElement: <ErrorPage />
      },
      {
        path: '*',
        element: <ErrorPage />,
        errorElement: <ErrorPage />
      }
    ]
  }
])
