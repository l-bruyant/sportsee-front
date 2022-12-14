import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// eslint-disable-next-line no-unused-vars
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import './barchart.css'

export default class DoubleBarChart extends PureComponent {
  static get propTypes () {
    return {
      tableData: PropTypes.any
    }
  }

  render () {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={this.props.tableData}
          margin={{
            top: 112,
            right: 30,
            left: 45,
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
          />
          <YAxis
            orientation="right"
            stroke="#9B9EAC"
            dataKey="kil"
            tickCount={3} type="number"
            domain={['dataMin - 1', 'dataMax + 1']}
            minTickGap="1"
            allowDecimals={false}
            allowDataOverflow={true}
            axisLine={false}
            tickLine={false}
            tickMargin="45"
          />
          <Tooltip
            separator={false}
            wrapperStyle={{ backgroundColor: '#E60000', color: '#FFFFFF' }}
            contentStyle={{ backgroundColor: '#E60000', color: '#FFFFFF' }}
            labelStyle={{ backgroundColor: '#E60000', color: '#FFFFFF' }}
            viewBox={{ x: 0, y: 0, width: 40, height: 65 }}
            allowEscapeViewBox={{ x: true, y: true }}
            offset= {60}
            position={{ y: 50 }}
          />
          <Legend
            width={400}
            align="right"
            wrapperStyle={{ top: 25, right: 25 }}
            iconType="circle"
          />
          <Bar
            name='Poids (kg)'
            dataKey="kil"
            fill="#282D30"
            className='greyBar'
            barSize={7}
            unit="kg"
          />
          <Bar name='Calories brûlées (kCal)' dataKey="cal" fill="#E60000" barSize={7}/>
        </BarChart>
      </ResponsiveContainer>
    )
  }
}
