import React from 'react'

import { userScoreData, userScore } from '../../../../utils/dataFormatter'

import './userScoreRadialWrapper.css'

import UserScoreRadial from './userScoreRadial.jsx'

export default function UserScoreRadialWrapper () {
  return (
    <div className='square-graph-container' id='score'>
      <div className='chart-title'>Score</div>
      <div className='score-bubble'>
        <div className='user-score-display'>
          {userScore}%
        </div>
        <div className='user-score-legend'>
                      de votre <br/> objectif
        </div>
      </div>
      <UserScoreRadial chartData={userScoreData} />
    </div>
  )
}

