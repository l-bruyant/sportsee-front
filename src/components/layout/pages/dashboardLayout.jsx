
import React from 'react'

import './dashboardLayout.css'

import DashboardLeftBar from '../nav/dashboardLeftBar'
import DashboardBody from './dashboardBody'

export default function Dashboard () {
  return (
    <div className='dashboard'>
      <DashboardLeftBar />
      <DashboardBody />
    </div>
  )
}
