import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)

export default function ChartBar({data}){
  const opts = {responsive:true,plugins:{legend:{display:false}}}
  return <div className="card"><Bar data={data} options={opts} /></div>
}
