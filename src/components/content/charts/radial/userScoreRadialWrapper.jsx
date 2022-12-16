import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getUserData } from '../../../../utils/api/api'

import './userScoreRadialWrapper.css'

import UserScoreRadial from './userScoreRadial.jsx'

export default function UserScoreRadialWrapper () {
  const id = useParams().userId
  const [userData, setUserData]= useState({})

  useEffect(() => {
    const call = async () => {
      const receivedUserData = await getUserData (id)
      setUserData(receivedUserData)
    }; 
    call()
  }, [] )

  return (
    <div className='square-graph-container' id='score'>
      <div className='chart-title'>Score</div>
      <div className='score-bubble'>
        <div className='user-score-display'>
          {userData.scoreDisplay}%
        </div>
        <div className='user-score-legend'>
                      de votre <br/> objectif
        </div>
      </div>
      <UserScoreRadial chartData={userData.radialBarChartData} />
    </div>
  )
}

