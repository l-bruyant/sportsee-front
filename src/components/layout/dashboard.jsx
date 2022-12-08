
import React from 'react'
import './dashboard.css'
import DashboardLeftBar from './dashboard-leftbar'
import DashboardPage from './dashboard-page'

export default function Dashboard () {
  return (
    <div className='dashboard'>
        <DashboardLeftBar />
        <DashboardPage />
    </div>
  )
}
