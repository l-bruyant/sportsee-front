import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './components/router/router.jsx'
import './index.css'
import { mockedUser, mockedUserActivity, mockedUserAverageSessions, mockedUserPerformance } from './utils/dataconverter.js'
import Activities from './utils/models/Activities.js'
import User from './utils/models/User.js'
import AverageSessions from './utils/models/Sessions.js'
import Performances from './utils/models/Performances.js'

const testUser = new User(mockedUser)
console.log(testUser)

const testActivitiesList = new Activities(mockedUserActivity)
console.log(testActivitiesList)

const testAverageActivities = new AverageSessions(mockedUserAverageSessions)
console.log(testAverageActivities)

const testPerformance = new Performances(mockedUserPerformance)
console.log(testPerformance)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
