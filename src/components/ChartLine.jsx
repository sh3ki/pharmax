import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend)

export default function ChartLine({data}){
  const opts = {responsive:true,plugins:{legend:{display:false}}}
  return <div className="card"><Line data={data} options={opts} /></div>
}
