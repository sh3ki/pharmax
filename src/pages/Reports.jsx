import React from 'react'
import KpiCard from '../components/KpiCard'
import ChartLine from '../components/ChartLine'
import ChartBar from '../components/ChartBar'

const revenue = {labels:['Jan','Feb','Mar','Apr','May'],datasets:[{data:[12000,15000,18000,17000,21000],borderColor:'var(--accent)',backgroundColor:'rgba(155,89,182,0.12)',tension:0.3}]}
const top = {labels:['Paracetamol','Amox'],datasets:[{data:[420,360],backgroundColor:'rgba(155,89,182,0.9)'}]}

export default function Reports(){
  return (
    <div className="fade-in">
      <div className="topbar" style={{marginBottom:18}}>
        <div>
          <h2 style={{margin:0}}>Reports</h2>
          <div className="muted">Revenue, sales and expiry reports</div>
        </div>
        <div style={{display:'flex',gap:12,alignItems:'center'}}>
          <div className="controls">
            <button className="icon-btn">CSV</button>
            <button className="icon-btn">PDF</button>
          </div>
          <button className="btn ghost">Export</button>
        </div>
      </div>

      <div className="kpi-grid">
        <KpiCard title="Total Sales" value="₱1,240,000" sub="Year-to-date" />
        <KpiCard title="Avg. Sale" value="₱420" sub="Last 30 days" />
        <KpiCard title="Expired" value="12" sub="This month" />
        <KpiCard title="Top Seller" value="Paracetamol" sub="Units sold" />
      </div>

      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
        <ChartLine data={revenue} />
        <ChartBar data={top} />
      </div>
    </div>
  )
}
