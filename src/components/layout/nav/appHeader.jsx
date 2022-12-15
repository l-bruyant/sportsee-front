
import React from 'react'

import './appHeader.css'

import logoSportSee from '../../../assets/images/logo-sportsee.svg'

export default function Header () {
  return (
    <header>
      <div className='headerContent'>
        <div className='headerLogo'>
          <img src={logoSportSee}/>
        </div>
        <nav>
          <div className='headerElement'>
                    Accueil
          </div>
          <div className='headerElement'>
                    Profil
          </div>
          <div className='headerElement'>
                    Réglage
          </div>
          <div className='headerElement'>
                    Communauté
          </div>
        </nav>
      </div>
    </header>
  )
}
