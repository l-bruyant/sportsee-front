import { Outlet } from 'react-router-dom'

import './root.css'

import React from 'react'
import Header from '../nav/appHeader'

export default function Root () {
  return (
    <div id='app-wrapper'>
      <Header />
      <Outlet />
      <div className='responsive-blocker'>Under development 🚧 <br/> <br/> This site is not available for screen less than 1024px wide yet. <br/> <br/> Please use a wider screen to access the site.</div>
    </div>
  )
}
