
import React from 'react'
import './dashboard.css'
import DashboardLeftBar from './dashboard-leftbar'

export default function Dashboard () {
  return (
    <div className='dashboard'>
        <DashboardLeftBar />
        <div className='dashboard-content'>
            Meditation
        </div>
    </div>
  )
}
