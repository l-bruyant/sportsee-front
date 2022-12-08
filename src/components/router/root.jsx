// import { Outlet } from 'react-router-dom'
import React from 'react'
import { mockedUser, mockedUserActivity, mockedUserAverageSessions, mockedUserPerformance } from '../../utils/dataconverter'
import Header from '../layout/header'
import { Outlet } from 'react-router-dom'
import './root.css'

export default function Root () {
  console.log(mockedUser)
  console.log(mockedUserActivity)
  console.log(mockedUserAverageSessions)
  console.log(mockedUserPerformance)

  return (
    <div id='app-wrapper'>
        <Header />
        <Outlet />
        <div className='responsive-blocker'>This site is not available for screen less than 1024px wide yet. Please use a wider screen to access the site.</div>
    </div>
  )
}
