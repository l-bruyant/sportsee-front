import React from 'react'

import { dailyActivityData } from '../../../../utils/dataFormatter'

import './dailyActivityBarWrapper.css'

import DailyActivityBar from './dailyActivityBar'

export default function DailyActivityBarWrapper () {
  return (
    <div className='wide-graph-container'>
      <div className='chart-title'>Activité quotidienne</div>
      <DailyActivityBar chartData={dailyActivityData}/>
    </div>
  )
}

