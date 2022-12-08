import React from 'react'
import ActivityFilter from '../content/activityfilter'
import './dashboard-leftbar.css'
import meditateIcon from '../../assets/images/meditate-icon.svg'
import swimIcon from '../../assets/images/swim-icon.svg'
import bikeIcon from '../../assets/images/bike-icon.svg'
import weightIcon from '../../assets/images/weight-icon.svg'

export default function DashboardLeftBar () {
  return (
      <div className='dashboard-left-bar'>
            <ActivityFilter src={meditateIcon} />
            <ActivityFilter src={swimIcon} />
            <ActivityFilter src={bikeIcon} />
            <ActivityFilter src={weightIcon} />
            <div className='copyright-text'>
                Copyright, SportSee2020
            </div>
      </div>
  )
}
