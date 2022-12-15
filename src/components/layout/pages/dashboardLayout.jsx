
import React from 'react'
import './dashboardLayout.css'
import DashboardLeftBar from '../nav/dashboardLeftBar'
import DashboardPage from './dashboardBody'

export default function Dashboard () {
  return (
    <div className='dashboard'>
        <DashboardLeftBar />
        <DashboardPage />
    </div>
  )
}
