import React from 'react'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';
import './Chart.css'
export default function Chart({ title, data, dataKey, grid = false }) {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          
          <XAxis 
            dataKey="name" 
            padding={{ left: 20, right: 20 }} // Ensure first/last points are visible
            interval={0} // Show all ticks
          />
          <Line 
            type="monotone" 
            dataKey={dataKey} 
            stroke="#8884d8" 
            dot={{ r: 4 }} // Make data points more visible
          />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="3 3" />}
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}