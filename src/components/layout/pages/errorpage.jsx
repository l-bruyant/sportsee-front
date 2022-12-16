import React from 'react'

import './errorpage.css'

/**
*
* @function ErrorPage
*
* @returns an error message 
*
*/

export default function ErrorPage () {

  return ( 
    <div id="error-page">
      <h1>Erreur</h1>
      <p>Une erreur est survenue</p>
      <p>Merci de contacter les administrateurs de la plateforme</p>
    </div>
  )
}
