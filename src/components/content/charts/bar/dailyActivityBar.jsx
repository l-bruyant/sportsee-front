import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

import './dailyActivityBar.css'

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="custom-tool-tip">
        <p className="tool-tip-text">{`${payload[0].value}`}kg</p>
        <p className="tool-tip-text">{`${payload[1].value}`}Kcal</p>
      </div>
    )
  }
  return null
}

export default class DailyActivityBar extends PureComponent {
  render () {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={this.props.chartData}
          barGap={8}
          margin={{
            top: 112,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid
            vertical={false}
            strokeDasharray="2"
            stroke="#DEDEDE"
          />
          <XAxis
            dataKey="day"
            stroke="#9B9EAC"
            tickLine={false}
            tickMargin="15"
            padding={{ right: -42, left: -42 }}
          />
          <YAxis
            orientation="right"
            yAxisId="right"
            stroke="#9B9EAC"
            dataKey="kil"
            tickCount={3}
            type="number"
            domain={['dataMin -1', 'dataMax + 1']}
            minTickGap={1}
            allowDecimals={false}
            allowDataOverflow={true}
            axisLine={false}
            tickLine={false}
            tickMargin="45"
          />
          <YAxis
            orientation="left"
            yAxisId="left"
            stroke="#000000"
            dataKey="cal"
            tickCount={0}
            type="number"
            domain={['dataMin -100', 'dataMax + 100']}
            minTickGap="1"
            allowDecimals={true}
            allowDataOverflow={false}
            axisLine={true}
            tickLine={true}
            tickMargin="0"
          />
          <Tooltip
            allowEscapeViewBox={{ x: false, y: false }}
            offset= {60}
            position={{ y: 50 }}
            cursor={{ fill: 'rgba(196, 196, 196, 0.5' }}
            content={<CustomTooltip/>}
          />
          <Legend
            width={400}
            align="right"
            wrapperStyle={{ top: 25, right: 25 }}
            iconType="circle"
            formatter={(value) => {
              return <span style={{ color: '#74798C', fontSize: 14, fontWeight: 500 }}>{value}</span>
            }}
          />
          <Bar
            name='Poids (kg)'
            yAxisId="right"
            dataKey="kil"
            fill="#282D30"
            className='greyBar'
            barSize={7}
            unit="kg"
            radius={[20, 20, 0, 0]}
          />
          <Bar
            name='Calories brûlées (kCal)'
            yAxisId="left"
            dataKey="cal"
            fill="#E60000"
            barSize={7}
            radius={[20, 20, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    )
  }
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array
}

DailyActivityBar.propTypes = {
  chartData: PropTypes.array
}
