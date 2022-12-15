/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react'
import { RadialBarChart, RadialBar, Dot, ResponsiveContainer, PolarAngleAxis } from 'recharts'
import PropTypes from 'prop-types'

import './userScoreRadial.css'

export default class UserScoreRadial extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-radial-bar-chart-qf8fz'
  static get propTypes () {
    return {
      graphData: PropTypes.any
    }
  }

  render () {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="64%" outerRadius="80%" barSize={10} data={[this.props.graphData]} startAngle={90} endAngle={450}>
          <PolarAngleAxis type='number' domain={[0, 100]} tick={false}/>
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
