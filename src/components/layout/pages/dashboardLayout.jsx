
import React from 'react'

import './dashboardLayout.css'

import DashboardLeftBar from '../nav/dashboardLeftBar'
import DashboardBody from './dashboardBody'

/**
*
* @function Dashboard
*
* @returns the structure of the page when the dashboard route is active
* Left bar on the left, rest of space filled by the dashboard body
*
*/

export default function Dashboard () {
  return (
    <div className='dashboard'>
      <DashboardLeftBar />
      <DashboardBody />
    </div>
  )
}
