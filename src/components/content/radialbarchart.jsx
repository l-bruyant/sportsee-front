/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis } from 'recharts'
import PropTypes from 'prop-types'
import './radialbarchart.css'

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-radial-bar-chart-qf8fz'
  static get propTypes () {
    return {
      tableData: PropTypes.any
    }
  }

  render () {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="70%" outerRadius="80%" barSize={10} data={[this.props.tableData]} startAngle={90} endAngle={450}>
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
