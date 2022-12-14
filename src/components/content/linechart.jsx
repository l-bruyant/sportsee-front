import React, { PureComponent } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import PropTypes from 'prop-types'
import './linechart.css'

export default class SimpleLineChart extends PureComponent {
  static get propTypes () {
    return {
      tableData: PropTypes.any
    }
  }

  render () {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={this.props.tableData}
          margin={{
            top: 0,
            right: 10,
            left: 10,
            bottom: 0
          }}
        >
          <XAxis
            dataKey="day"
            height={40}
            allowDataOverflow={true}
            axisLine={false}
            tickLine={false}
            tickCount={9}
            padding={{ left: 20, right: 20 }}
          />
          <YAxis
            type="number"
            domain={['dataMin - 10', 'dataMax + 10']}
            axisLine={false}
            tickLine={false}
            hide={true}
          />
          <Tooltip />
          <Line
            type="natural"
            dataKey="length"
            dot={false}
            stroke="#FFFFFF"
            strokeWidth={2}
            activeDot={{ stroke: 'rgba(255, 255, 255, 0.4)', strokeWidth: 12, r: 6 }}
            width={10000}
          />
        </LineChart>
      </ResponsiveContainer>
    )
  }
}
