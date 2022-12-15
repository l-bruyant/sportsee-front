import React from 'react'

import { currentUser, currentActivitiesList, currentAverageActivities, currentPerformance } from '../../utils/dataconverter'

import './dashboard-page.css'

import caloriesIcon from '../../assets/images/calories-icon.svg'
import carbsIcon from '../../assets/images/carbs-icon.svg'
import lipidsIcon from '../../assets/images/lipids-icon.svg'
import proteinIcon from '../../assets/images/protein-icon.svg'

import ErrorPage from '../content/errorpage'
import Infocard from '../content/infocard'
import DoubleBarChart from '../content/barchart'
import SimpleLineChart from '../content/linechart'
import ActivityRadar from '../content/radarchart'
import RadialScore from '../content/radialbarchart'

export default function DashboardPage () {
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
                    <DoubleBarChart tableData={currentActivitiesList.activityGraphTable}/>
                </div>
                <div className='dashboard-page-content-main-bottom'>
                    <div className='square-graph-container' id='sessions'>
                        <div className='chart-title'>Durée moyenne des sessions</div>
                        <SimpleLineChart tableData={currentAverageActivities.sessionsLengthGraphTable} />
                    </div>
                    <div className='square-graph-container' id='radar'>
                        <ActivityRadar tableData={currentPerformance.performancesGraphTable} />
                    </div>
                    <div className='square-graph-container' id='score'>
                        <div className='chart-title'>Score</div>
                        <div className='score-bubble'>
                            <div className='user-score-display'>
                                {currentUser.scoreGraphTable.score}%
                            </div>
                            <div className='user-score-legend'>
                                de votre <br/> objectif
                            </div>
                        </div>
                        <RadialScore tableData={currentUser.scoreGraphTable} />
                    </div>
                </div>
            </div>
            <div className='dashboard-page-content-side'>
                <Infocard imgSrc={caloriesIcon} number={currentUser.calories} unit='kCal' category='Calories' key='calCard' />
                <Infocard imgSrc={proteinIcon} number={currentUser.proteins} unit='g' category='Protéines' key='protsCard' />
                <Infocard imgSrc={carbsIcon} number={currentUser.carbs} unit='g' category='Glucides' key='carbsCard' />
                <Infocard imgSrc={lipidsIcon} number={currentUser.lipids} unit='g' category='Lipides' key='fatsCard' />
            </div>
        </div>
      </div>
  )
}
