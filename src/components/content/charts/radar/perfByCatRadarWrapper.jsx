import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getPerfByCategory } from '../../../../utils/api/api'

import './perfByCatRadarWrapper.css'

import PerfByCatRadar from './perfByCatRadar.jsx'

export default function PerfByCatRadarWrapper () {
  const id = useParams().userId
  const [userActivityByCat, setUserActivityByCat]= useState({})

  useEffect(() => {
    const call = async () => {
      const receivedUserActivityByCatData = await getPerfByCategory (id)
      setUserActivityByCat(receivedUserActivityByCatData)
    }; 
    call()
  }, [] )

  return (
    <div className='square-graph-container' id='radar'>
      <PerfByCatRadar chartData={userActivityByCat.radarChartData} />
    </div>
  )
}

