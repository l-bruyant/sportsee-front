import React from 'react'

import { perfByCatData } from '../../../../utils/dataFormatter'

import './perfByCatRadarWrapper.css'

import PerfByCatRadar from './perfByCatRadar.jsx'

export default function PerfByCatRadarWrapper () {
  return (
    <div className='square-graph-container' id='radar'>
      <PerfByCatRadar chartData={perfByCatData} />
    </div>
  )
}

