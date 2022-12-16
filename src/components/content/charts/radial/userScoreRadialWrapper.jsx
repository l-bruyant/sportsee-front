import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getUserData } from '../../../../utils/api/api'

import './userScoreRadialWrapper.css'



import UserScoreRadial from './userScoreRadial.jsx'

export default function UserScoreRadialWrapper () {
  const id = useParams().userId
  const [userData, setUserData]= useState({})
  const [isLoading, setIsLoading]= useState(true)

  useEffect(() => {
    const call = async () => {
      try {
        const receivedUserData = await getUserData (id)
        setUserData(receivedUserData)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }; 
    call()
  }, [] )

  return (
    <div className='square-graph-container' id='score'>
      <div className='chart-title'>Score</div>
      {isLoading 
        ? 
        'Loading...' 
        :
        <div className='score-bubble'>
          <div className='user-score-display'>
            {userData.scoreDisplay}%
          </div>
          <div className='user-score-legend'>
                      de votre <br/> objectif
          </div>
        </div>      
      }
      <UserScoreRadial chartData={userData.radialBarChartData} />
    </div>
  )
}

