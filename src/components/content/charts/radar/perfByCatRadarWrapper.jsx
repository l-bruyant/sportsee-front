import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getPerfByCategory } from '../../../../utils/api/api'

import './perfByCatRadarWrapper.css'

import PerfByCatRadar from './perfByCatRadar.jsx'

export default function PerfByCatRadarWrapper () {
  const id = useParams().userId
  const [userActivityByCat, setUserActivityByCat]= useState({})
  const [isLoading, setIsLoading]= useState(true)

  useEffect(() => {
    const call = async () => {
      try {
        const receivedUserActivityByCatData = await getPerfByCategory (id)
        setUserActivityByCat(receivedUserActivityByCatData)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
      }
    }; 
    call()
  }, [] )

  return (
    <div className='square-graph-container' id='radar'>
      {isLoading 
        ? 
        'Loading...' 
        :
        <PerfByCatRadar chartData={userActivityByCat.radarChartData} />
      }
    </div>
  )

}

