import React, { PureComponent } from 'react'
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts'
import PropTypes from 'prop-types'

import './userScoreRadial.css'

/**
*
* @function UserScoreRadial
*
* @param chartData an object with pre-formatted data to generate the score chart
*
* @returns a radial bar chart presenting the user score
*
*/

export default class UserScoreRadial extends PureComponent {
  render () {
    return (
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="64%"
          outerRadius="80%"
          barSize={10}
          data={[this.props.chartData]}
          startAngle={90}
          endAngle={450}
        >
          <PolarAngleAxis
            type='number'
            domain={[0, 100]}
            tick={false}
          />
          <RadialBar
            minAngle={100}
            clockWise
            dataKey="score"
            cornerRadius={10}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    )
  }
}

UserScoreRadial.propTypes = {
  chartData: PropTypes.object
}
