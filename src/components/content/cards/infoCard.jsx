
import React from 'react'
import PropTypes from 'prop-types'

import './infoCard.css'

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
