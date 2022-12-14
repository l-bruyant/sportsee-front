import React from 'react'

import { currentUser, currentActivitiesList } from '../../utils/dataconverter'

import './dashboard-page.css'

import caloriesIcon from '../../assets/images/calories-icon.svg'
import carbsIcon from '../../assets/images/carbs-icon.svg'
import lipidsIcon from '../../assets/images/lipids-icon.svg'
import proteinIcon from '../../assets/images/protein-icon.svg'

import ErrorPage from '../content/errorpage'
import Infocard from '../content/infocard'
import DoubleBarChart from '../content/barchart'

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
                    <DoubleBarChart tableData={currentActivitiesList.activityGraphTable}/>
                </div>
                <div className='dashboard-page-content-main-bottom'>
                    <div className='square-graph-container' id='sessions'>
                        Durée Moyenne des Sessions
                    </div>
                    <div className='square-graph-container' id='radar'>
                        Radar chart
                    </div>
                    <div className='square-graph-container' id='score'>
                        Score
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
