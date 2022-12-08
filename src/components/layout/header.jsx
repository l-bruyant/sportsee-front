
import React from 'react'
import './header.css'
import logoSportSee from '../../assets/images/logo-sportsee.svg'

export default function Header () {
  return (
    <header>
        <div className='headerContent'>
            <div className='headerElement'>
                <img src={logoSportSee}/>
            </div>
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
        </div>
    </header>
  )
}
