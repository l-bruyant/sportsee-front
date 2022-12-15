import React from 'react'

import './dashboardLeftBar.css'

import meditateIcon from '../../../assets/images/meditate-icon.svg'
import swimIcon from '../../../assets/images/swim-icon.svg'
import bikeIcon from '../../../assets/images/bike-icon.svg'
import weightIcon from '../../../assets/images/weight-icon.svg'

import ActivityFilter from './dashboardLeftBarButton'

export default function DashboardLeftBar () {
  return (
      <div className='dashboard-left-bar'>
            <nav>
                <ActivityFilter src={meditateIcon} />
                <ActivityFilter src={swimIcon} />
                <ActivityFilter src={bikeIcon} />
                <ActivityFilter src={weightIcon} />
            </nav>
            <div className='copyright-text'>
                Copyright, SportSee2020
            </div>
      </div>
  )
}
