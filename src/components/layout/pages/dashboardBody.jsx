import React from 'react'

import {
  currentUser,
  userFirstName,
  userScore,
  userCalories,
  userProteins,
  userCarbs,
  userLipids,
  dailyActivityData,
  dailySessionLengthData,
  perfByCatData,
  userScoreData
} from '../../../utils/dataFormatter'

import './dashboardBody.css'

import caloriesIcon from '../../../assets/images/calories-icon.svg'
import carbsIcon from '../../../assets/images/carbs-icon.svg'
import lipidsIcon from '../../../assets/images/lipids-icon.svg'
import proteinIcon from '../../../assets/images/protein-icon.svg'

import ErrorPage from './errorpage'
import InfoCard from '../../content/cards/infoCard'
import DailyActivityBar from '../../content/charts/bar/dailyActivityBar'
import DailySessionsLenghtLine from '../../content/charts/line/dailySessionsLenghtLine'
import PerfByCatRadar from '../../content/charts/radar/perfByCatRadar'
import UserScoreRadial from '../../content/charts/radial/userScoreRadial'

export default function dashboardBody () {
  if (currentUser == null) {
    return <ErrorPage />
  }

  return (
    <div className='dashboard-page-wrapper'>
      <div className='dashboard-page-header'>
        <h1>Bonjour <span className='red'>{userFirstName}</span></h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
      <div className='dashboard-page-content'>
        <div className='dashboard-page-content-main'>
          <div className='wide-graph-container'>
            <div className='chart-title'>Activité quotidienne</div>
            <DailyActivityBar chartData={dailyActivityData}/>
          </div>
          <div className='dashboard-page-content-main-bottom'>
            <div className='square-graph-container' id='sessions'>
              <div className='chart-title'>Durée moyenne des sessions</div>
              <DailySessionsLenghtLine chartData={dailySessionLengthData} />
            </div>
            <div className='square-graph-container' id='radar'>
              <PerfByCatRadar chartData={perfByCatData} />
            </div>
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
