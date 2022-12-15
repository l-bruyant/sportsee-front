/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Rectangle } from 'recharts'
import PropTypes from 'prop-types'

import './dailySessionsLenghtLine.css'

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
          <div className="custom-tool-tip-linechart">
              <p className="custom-tool-tip-text-linechart">{`${payload[0].value}`}min</p>
          </div>
    )
  }
  return null
}

const CustomCursor = ({ points }) => {
  return <Rectangle fill="#000000" opacity={0.1} x={points[0].x} width={400} height={400} />
}

export default class DailySessionsLenghtLine extends PureComponent {
  static get propTypes () {
    return {
      graphData: PropTypes.any
    }
  }

  render () {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={this.props.graphData}
          margin={{
            top: 100,
            right: 0,
            left: 0,
            bottom: 12
          }}
          style={{ transform: 'scale(1.05)', transformOrigin: 'bottom' }}
        >
          <defs>
            <linearGradient id="colorUv" x1="1" y1="0" x2="0" y2="0">
              <stop offset="5%" stopColor="#FFFFFF" stopOpacity={1} />
              <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.4} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="day"
            height={40}
            allowDataOverflow={false}
            axisLine={false}
            tickLine={false}
            tickCount={0}
            padding={{ left: 6, right: 6 }}
            style={{ transform: 'scale(0.8)', transformOrigin: 'bottom' }}
          />
          <YAxis
            type="number"
            domain={['dataMin - 10', 'dataMax + 10']}
            axisLine={false}
            tickLine={false}
            hide={true}
          />
          <Tooltip content={<CustomTooltip/>} cursor={<CustomCursor />} />
          <Line
            type="natural"
            dataKey="length"
            dot={false}
            stroke="url(#colorUv)"
            strokeWidth={2}
            activeDot={{ stroke: 'rgba(255, 255, 255, 0.4)', strokeWidth: 12, r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    )
  }
}
