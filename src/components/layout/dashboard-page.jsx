import React from 'react'
import './dashboard-page.css'
import { mockedUser } from '../../utils/dataconverter'
import caloriesIcon from '../../assets/images/calories-icon.svg'
import carbsIcon from '../../assets/images/carbs-icon.svg'
import lipidsIcon from '../../assets/images/lipids-icon.svg'
import proteinIcon from '../../assets/images/protein-icon.svg'
// import { mockedUser, mockedUserActivity, mockedUserAverageSessions, mockedUserPerformance } from '../../utils/dataconverter'
// import ErrorPage from '../content/errorpage'
// import { useParams } from 'react-router-dom'

export default function DashboardPage () {
  // const params = useParams()
  const currentUser = mockedUser
  //   if (currentUser == null) {
  //     return <ErrorPage />
  //   }

  return (
      <div className='dashboard-page-wrapper'>
        <div className='dashboard-page-header'>
            <h1>Bonjour <span className='red'>{currentUser.data.userInfos.firstName}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        <div className='dashboard-page-content'>
            <div className='dashboard-page-content-main'>
                <div className='wide-graph-container'>
                    Activité quotidienne
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
                <div className='tracker-card'>
                    <img src={caloriesIcon} className='tracker-card-icon'/>
                    <div className='tracker-card-info'>
                        <div className='tracker-card-info-title'>
                            {currentUser.data.keyData.calorieCount}kCal
                        </div>
                        <div className='tracker-card-info-subtitle'>
                            Calories
                        </div>
                    </div>
                </div>
                <div className='tracker-card'>
                    <img src={proteinIcon} className='tracker-card-icon'/>
                    <div className='tracker-card-info'>
                        <div className='tracker-card-info-title'>
                            {currentUser.data.keyData.proteinCount}g
                        </div>
                        <div className='tracker-card-info-subtitle'>
                            Proteines
                        </div>
                    </div>
                </div>
                <div className='tracker-card'>
                    <img src={carbsIcon} className='tracker-card-icon'/>
                    <div className='tracker-card-info'>
                        <div className='tracker-card-info-title'>
                            {currentUser.data.keyData.carbohydrateCount}g
                        </div>
                        <div className='tracker-card-info-subtitle'>
                            Glucides
                        </div>
                    </div>
                </div>
                <div className='tracker-card'>
                    <img src={lipidsIcon} className='tracker-card-icon'/>
                    <div className='tracker-card-info'>
                        <div className='tracker-card-info-title'>
                            {currentUser.data.keyData.lipidCount}g
                        </div>
                        <div className='tracker-card-info-subtitle'>
                            Lipides
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
  )
}
