/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, PolarRadiusAxis } from 'recharts'
import PropTypes from 'prop-types'
import './radarchart.css'
export default class ActivityRadar extends PureComponent {
  static get propTypes () {
    return {
      tableData: PropTypes.any
    }
  }

  render () {
    return (
      <ResponsiveContainer>
        <RadarChart
            data={this.props.tableData}
            innerRadius={9}
            outerRadius={85}
        >
          <PolarGrid
            radialLines={false}
          />
          <PolarAngleAxis
            dataKey="activity"
            tick={{ fill: 'white', fontSize: '11' }}
            dy={5}
            dx={-3}
          />
          <PolarRadiusAxis
            domain={['0', 'dataMax + 20']}
            tick={false}
            tickCount={5}
            axisLine={false}
            scale="auto"
          />
          <Radar dataKey="score" fill="#F60000" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    )
  }
}
