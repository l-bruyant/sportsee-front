
import React from 'react'
import PropTypes from 'prop-types'

import './dashboardLeftBarButton.css'

/**
*
* @function ActivityFilter
*
* @param src is a string containing an icon URL to display in the button
*
* @returns a button with an icon inside
*
*/

export default function ActivityFilter ({ src }) {
  return (
    <div className='activity-filter-button'>
      <img src={src} alt="" className='activity-filter-icon'/>
    </div>
  )
}

ActivityFilter.propTypes = {
  src: PropTypes.string
}
