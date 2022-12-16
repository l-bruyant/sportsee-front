import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import './dashboardBody.css'

import caloriesIcon from '../../../assets/images/calories-icon.svg'
import carbsIcon from '../../../assets/images/carbs-icon.svg'
import lipidsIcon from '../../../assets/images/lipids-icon.svg'
import proteinIcon from '../../../assets/images/protein-icon.svg'

// import ErrorPage from './errorpage'
import InfoCard from '../../content/cards/infoCard'
import DailyActivityBarWrapper from '../../content/charts/bar/dailyActivityBarWrapper' 
import DailySessionsLengthLineWrapper from '../../content/charts/line/dailySessionsLengthLineWrapper'
import PerfByCatRadarWrapper from '../../content/charts/radar/perfByCatRadarWrapper'
import UserScoreRadialWrapper from '../../content/charts/radial/userScoreRadialWrapper'
import { getUserData } from '../../../utils/api/api'

export default function dashboardBody () {
  const id = useParams().userId
  const [userData, setUserData]= useState({})
  const [isDataLoading, setDataLoading] = useState(true)

  useEffect(() => {
    const call = async () => {
      const receivedUserData = await getUserData(id)
      setUserData(receivedUserData)
      setDataLoading(false)
    }; 
    call()
  }, [] ) 


  return (
    <div className='dashboard-page-wrapper'>
      <div className='dashboard-page-header'>
        <h1>Bonjour <span className='red-text'>{isDataLoading ? 'Loading...' : userData.firstName}</span></h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <div className='dashboard-page-content'>
        <div className='dashboard-page-content-main'>
          <DailyActivityBarWrapper />
          <div className='dashboard-page-content-main-bottom'>
            <DailySessionsLengthLineWrapper />
            <PerfByCatRadarWrapper />
            <UserScoreRadialWrapper />
          </div>
        </div>
        <div className='dashboard-page-content-side'>
          <InfoCard imgSrc={caloriesIcon} number={userData.calories} unit='kCal' category='Calories' key='calCard' />
          <InfoCard imgSrc={proteinIcon} number={userData.proteins} unit='g' category='Protéines' key='protsCard' />
          <InfoCard imgSrc={carbsIcon} number={userData.carbs} unit='g' category='Glucides' key='carbsCard' />
          <InfoCard imgSrc={lipidsIcon} number={userData.lipids} unit='g' category='Lipides' key='fatsCard' />
        </div>
      </div>
    </div>
  )
}
