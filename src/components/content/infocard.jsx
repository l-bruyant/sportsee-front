
import React from 'react'
import './infocard.css'
import PropTypes from 'prop-types'

Infocard.propTypes = {
  imgSrc: PropTypes.string,
  number: PropTypes.number,
  unit: PropTypes.string,
  category: PropTypes.string
}

export default function Infocard ({ imgSrc, number, unit, category }) {
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
