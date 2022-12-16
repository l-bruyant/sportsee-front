import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import './dailyActivityBarWrapper.css'

import DailyActivityBar from './dailyActivityBar'

import { getDailyActivity } from '../../../../utils/api/api'

export default function DailyActivityBarWrapper () {
  const id = useParams().userId
  const [userDailyActivity, setUserDailyActivity]= useState({})

  useEffect(() => {
    const call = async () => {
      const receivedUserActivityData = await getDailyActivity (id)
      setUserDailyActivity(receivedUserActivityData)
    }; 
    call()
  }, [] ) 

  return (
    <div className='wide-graph-container'>
      <div className='chart-title'>Activité quotidienne</div>
      <DailyActivityBar chartData={userDailyActivity.barChartData}/>
    </div>
  )
}

