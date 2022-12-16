
import React from 'react'
import PropTypes from 'prop-types'

import './infoCard.css'

/**
*
* @function InfoCard
*
* @param imgSrc is a string containing the url to the icon to display
* @param number is a number that will be displayed in the card
* @param unit is a string that will be displayed new the the number. Example : kCal
* @param category is a string that will be display below the number and unit. Example : Calories
*
* @returns a card that displays an icon and specific user data
*
*/

export default function InfoCard ({ imgSrc, number, unit, category }) {
  return (
    <div className='infocard'>
      <img src={imgSrc} className='infocard-icon'/>
      <div className='infocard-info'>
        <div className='infocard-info-title'>
          {number}{unit}
        </div>
        <div className='infocard-info-subtitle'>
          {category}
        </div>
      </div>
    </div>
  )
}

InfoCard.propTypes = {
  imgSrc: PropTypes.string,
  number: PropTypes.number,
  unit: PropTypes.string,
  category: PropTypes.string
}
