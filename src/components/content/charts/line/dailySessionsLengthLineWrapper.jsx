import React from 'react'

import { dailySessionLengthData } from '../../../../utils/dataFormatter'

import './dailySessionsLengthLineWrapper.css'

import DailySessionsLenghtLine from './dailySessionsLenghtLine'

export default function DailySessionsLengthLineWrapper () {
  return (
    <div className='square-graph-container' id='sessions'>
      <div className='chart-title'>Durée moyenne des sessions</div>
      <DailySessionsLenghtLine chartData={dailySessionLengthData} />
    </div>
  )
}

