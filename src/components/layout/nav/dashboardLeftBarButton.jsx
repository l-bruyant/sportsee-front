
import React from 'react'
import PropTypes from 'prop-types'

import './dashboardLeftBarButton.css'

ActivityFilter.propTypes = {
  src: PropTypes.string
}

export default function ActivityFilter ({ src }) {
  return (
    <div className='activity-filter-button'>
      <img src={src} alt="" className='activity-filter-icon'/>
    </div>
  )
}
