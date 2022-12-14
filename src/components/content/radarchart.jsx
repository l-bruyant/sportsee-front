import React, { PureComponent } from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'
import PropTypes from 'prop-types'
import './linechart.css'

export default class ActivityRadar extends PureComponent {
  static get propTypes () {
    return {
      tableData: PropTypes.any
    }
  }

  render () {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
            cx="50%"
            cy="50%"
            data={this.props.tableData}
            innerRadius={1}
            outerRadius={90}
        >
          <PolarGrid/>
          <PolarAngleAxis
            dataKey="activity"/>
          <PolarRadiusAxis
            domain={['dataMin - 10', 'dataMax + 10']}
            tick={false}
            axisLine={false}
            scale="auto"
          />
          <Radar name="Mike" dataKey="score" fill="#F60000" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    )
  }
}
