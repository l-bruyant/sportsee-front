// import { Outlet } from 'react-router-dom'
import React from 'react'
import { mockedUser, mockedUserActivity, mockedUserAverageSessions, mockedUserPerformance } from '../../utils/dataconverter'
import Header from '../layout/header'

export default function Root () {
  console.log(mockedUser)
  console.log(mockedUserActivity)
  console.log(mockedUserAverageSessions)
  console.log(mockedUserPerformance)

  return (
    <div id='app-wrapper'>
        <Header />
        {/* <Dashboard /> */}
    </div>
  )
}
