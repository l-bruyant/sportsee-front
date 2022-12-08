import React from 'react'
import './dashboard-page.css'

export default function DashboardPage () {
  return (
      <div className='dashboard-page-wrapper'>
        <div className='dashboard-page-header'>
            <h1>Bonjour <span className='red'>USERNAME</span></h1>
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
                    Calories
                </div>
                <div className='tracker-card'>
                    Proteines
                </div>
                <div className='tracker-card'>
                    Glucides
                </div>
                <div className='tracker-card'>
                    Lipides
                </div>
            </div>
        </div>
      </div>
  )
}
