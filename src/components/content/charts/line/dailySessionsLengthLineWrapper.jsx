import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getDailySessionsLength } from '../../../../utils/api/api'

import './dailySessionsLengthLineWrapper.css'

import DailySessionsLenghtLine from './dailySessionsLenghtLine'

export default function DailySessionsLengthLineWrapper () {
  const id = useParams().userId
  const [userSessionLength, setUserSessionLength]= useState({})
  const [isLoading, setIsLoading]= useState(true)

  useEffect(() => {
    const call = async () => {
      const receivedUserSessionLengthData = await getDailySessionsLength (id)
      setUserSessionLength(receivedUserSessionLengthData)
      setIsLoading(false)
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

