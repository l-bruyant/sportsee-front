import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Root from '../layout/pages/root'
import '../../index.css'
import Dashboard from '../layout/pages/dashboardLayout'
import ErrorPage from '../layout/pages/errorpage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      // { index: true, element: <Dashboard /> },
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
