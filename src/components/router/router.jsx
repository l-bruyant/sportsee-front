import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Root from './root'
import '../../index.css'
import Dashboard from '../layout/dashboard'
import ErrorPage from '../content/errorpage'

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
