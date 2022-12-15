
import React from 'react'

import './appHeader.css'

import logoSportSee from '../../../assets/images/logo-sportsee.svg'

export default function Header () {
  return (
    <header>
      <div className='header-content'>
        <div className='header-logo'>
          <img src={logoSportSee}/>
        </div>
        <nav>
          <div className='header-element'>
                    Accueil
          </div>
          <div className='header-element'>
                    Profil
          </div>
          <div className='header-element'>
                    Réglage
          </div>
          <div className='header-element'>
                    Communauté
          </div>
        </nav>
      </div>
    </header>
  )
}
