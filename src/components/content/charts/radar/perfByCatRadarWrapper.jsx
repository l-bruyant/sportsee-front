import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getPerfByCategory } from '../../../../utils/api/api'

import './perfByCatRadarWrapper.css'

import PerfByCatRadar from './perfByCatRadar.jsx'

/**
*
* @component
*
* Makes a fetch call in useEffect to get performance by category data, based on userId collected in URL with useParams 
* -> Then stores the userActivityByCat in state when available
*
* isDataLoading state prevents errors by avoiding trying to display information before the fetch is complete
*
* @returns a box containing the chart title and the performance by category radar chart 
*
*/

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

