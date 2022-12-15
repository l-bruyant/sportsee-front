import React from 'react'

import { currentUser, currentDailyActivity, currentDailySessionsLength, currentPerfByCategory } from '../../../utils/dataInputFormatter'

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
            <h1>Bonjour <span className='red'>{currentUser.firstName}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        <div className='dashboard-page-content'>
            <div className='dashboard-page-content-main'>
                <div className='wide-graph-container'>
                    <div className='chart-title'>Activité quotidienne</div>
                    <DailyActivityBar graphData={currentDailyActivity.barChartData}/>
                </div>
                <div className='dashboard-page-content-main-bottom'>
                    <div className='square-graph-container' id='sessions'>
                        <div className='chart-title'>Durée moyenne des sessions</div>
                        <DailySessionsLenghtLine graphData={currentDailySessionsLength.lineChartData} />
                    </div>
                    <div className='square-graph-container' id='radar'>
                        <PerfByCatRadar graphData={currentPerfByCategory.radarChartData} />
                    </div>
                    <div className='square-graph-container' id='score'>
                        <div className='chart-title'>Score</div>
                        <div className='score-bubble'>
                            <div className='user-score-display'>
                                {currentUser.radialBarChartData.score}%
                            </div>
                            <div className='user-score-legend'>
                                de votre <br/> objectif
                            </div>
                        </div>
                        <UserScoreRadial graphData={currentUser.radialBarChartData} />
                    </div>
                </div>
            </div>
            <div className='dashboard-page-content-side'>
                <InfoCard imgSrc={caloriesIcon} number={currentUser.calories} unit='kCal' category='Calories' key='calCard' />
                <InfoCard imgSrc={proteinIcon} number={currentUser.proteins} unit='g' category='Protéines' key='protsCard' />
                <InfoCard imgSrc={carbsIcon} number={currentUser.carbs} unit='g' category='Glucides' key='carbsCard' />
                <InfoCard imgSrc={lipidsIcon} number={currentUser.lipids} unit='g' category='Lipides' key='fatsCard' />
            </div>
        </div>
      </div>
  )
}
