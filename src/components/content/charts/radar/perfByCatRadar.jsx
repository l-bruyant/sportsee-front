import React, { PureComponent } from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, PolarRadiusAxis } from 'recharts'
import PropTypes from 'prop-types'

import './perfByCatRadar.css'

/**
*
* @function PerfByCatRadar
*
* @param chartData an object with pre-formatted data to generate the performance by category chart
*
* @returns a radar chart presenting the user performance by category
*
*/

export default class PerfByCatRadar extends PureComponent {
  render () {
    return (
      <ResponsiveContainer>
        <RadarChart
          data={this.props.chartData}
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
          <Radar
            dataKey="score"
            fill="#F60000"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    )
  }
}

PerfByCatRadar.propTypes = {
  chartData: PropTypes.array
}
