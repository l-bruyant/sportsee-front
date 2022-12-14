import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
// eslint-disable-next-line no-unused-vars
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Text, Tooltip, Legend, ResponsiveContainer, Customized } from 'recharts'
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
            padding={{ right: -46, left: -46 }}
            wrapperStyle={{ color: '#000000' }}
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
            separator={false}
            wrapperStyle={{ backgroundColor: '#FFFFFF', color: '#FFFFFF' }}
            contentStyle={{ backgroundColor: '#FFFFFF', color: '#FFFFFF' }}
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
          <Legend
            width={400}
            align="left"
            wrapperStyle={{ top: 25, left: 25 }}
            iconType="none"
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
