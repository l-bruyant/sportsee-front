import React from 'react'

import {
  currentUser,
  userFirstName,
  userCalories,
  userProteins,
  userCarbs,
  userLipids,
} from '../../../utils/dataFormatter'

import './dashboardBody.css'

import caloriesIcon from '../../../assets/images/calories-icon.svg'
import carbsIcon from '../../../assets/images/carbs-icon.svg'
import lipidsIcon from '../../../assets/images/lipids-icon.svg'
import proteinIcon from '../../../assets/images/protein-icon.svg'

import ErrorPage from './errorpage'
import InfoCard from '../../content/cards/infoCard'
import DailyActivityBarWrapper from '../../content/charts/bar/dailyActivityBarWrapper' 
import DailySessionsLengthLineWrapper from '../../content/charts/line/dailySessionsLengthLineWrapper'
import PerfByCatRadarWrapper from '../../content/charts/radar/perfByCatRadarWrapper'
import UserScoreRadialWrapper from '../../content/charts/radial/userScoreRadialWrapper'

export default function dashboardBody () {
  if (currentUser == null) {
    return <ErrorPage />
  }

  return (
    <div className='dashboard-page-wrapper'>
      <div className='dashboard-page-header'>
        <h1>Bonjour <span className='red-text'>{userFirstName}</span></h1>
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
          <InfoCard imgSrc={caloriesIcon} number={userCalories} unit='kCal' category='Calories' key='calCard' />
          <InfoCard imgSrc={proteinIcon} number={userProteins} unit='g' category='Protéines' key='protsCard' />
          <InfoCard imgSrc={carbsIcon} number={userCarbs} unit='g' category='Glucides' key='carbsCard' />
          <InfoCard imgSrc={lipidsIcon} number={userLipids} unit='g' category='Lipides' key='fatsCard' />
        </div>
      </div>
    </div>
  )
}
