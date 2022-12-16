import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import './dailyActivityBarWrapper.css'

import DailyActivityBar from './dailyActivityBar'

import { getDailyActivity } from '../../../../utils/api/api'

/**
*
* Makes a fetch call in useEffect to get user daily activity data, based on userId collected in URL with useParams 
* Then stores the userDailyActivity in state when available
*
* isDataLoading state prevents errors by avoiding trying to display information before the fetch is complete
*
* @function DailyActivityBarWrapper
*
* @returns a box containing the chart title and the user daily activity bar chart 
*
*/

export default function DailyActivityBarWrapper () {
  const id = useParams().userId
  const [userDailyActivity, setUserDailyActivity]= useState({})
  const [isLoading, setIsLoading]= useState(true)

  useEffect(() => {
    const call = async () => {
      try {
        const receivedUserActivityData = await getDailyActivity (id)
        setUserDailyActivity(receivedUserActivityData)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
      }
    }; 
    call()
  }, [] ) 

  return (
    <div className='wide-graph-container'>
      <div className='chart-title'>Activité quotidienne</div>
      {isLoading 
        ? 
        'Loading...' 
        :
        <DailyActivityBar chartData={userDailyActivity.barChartData}/>
      }
    </div>
  )
}

