import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getDailySessionsLength } from '../../../../utils/api/api'

import './dailySessionsLengthLineWrapper.css'

import DailySessionsLenghtLine from './dailySessionsLenghtLine'

/**
*
* Makes a fetch call in useEffect to get daily sessions length data, based on userId collected in URL with useParams 
* -> Then stores the userSessionLength in state when available
*
* isDataLoading state prevents errors by avoiding trying to display information before the fetch is complete
*
* @function DailySessionsLengthLineWrapper
*
* @returns a box containing the chart title and the daily sessions length line chart 
*
*/

export default function DailySessionsLengthLineWrapper () {
  const id = useParams().userId
  const [userSessionLength, setUserSessionLength]= useState({})
  const [isLoading, setIsLoading]= useState(true)

  useEffect(() => {
    const call = async () => {
      try {
        const receivedUserSessionLengthData = await getDailySessionsLength (id)
        setUserSessionLength(receivedUserSessionLengthData)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
      }
    }; 
    call()
  }, [] )

  return (
    <div className='square-graph-container' id='sessions'>
      <div className='chart-title'>Durée moyenne des sessions</div>
      {isLoading 
        ? 
        'Loading...' 
        :
        <DailySessionsLenghtLine chartData={userSessionLength.lineChartData} />
      }
    </div>
  )
}

