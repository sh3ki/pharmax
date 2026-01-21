import React from 'react'
import KpiCard from '../components/KpiCard'
import ChartLine from '../components/ChartLine'
import ChartBar from '../components/ChartBar'

const salesData = {
  labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
  datasets: [{data:[120,200,150,220,300,280,360],borderColor:'var(--accent)',backgroundColor:'rgba(155,89,182,0.12)',tension:0.3}]
}

const topSelling = {
  labels:['Paracetamol','Amoxicillin','Cetirizine','Vitamin C','Ibuprofen'],
  datasets:[{data:[120,90,70,60,45],backgroundColor:'rgba(155,89,182,0.9)'}]
}

export default function Dashboard(){
  return (
    <div className="fade-in">
      <div className="topbar">
        <div>
          <h2 style={{margin:0}}>Dashboard</h2>
          <div className="muted">Overview of recent activity and KPIs</div>
        </div>
        <div style={{display:'flex',gap:12,alignItems:'center'}}>
          <input className="search" placeholder="Search prescriptions, medicines..." />
          <button className="btn">New</button>
        </div>
      </div>

      <div className="kpi-grid">
        <KpiCard title="Total Medicines" value="1,248" sub="Active SKUs" />
        <KpiCard title="Low Stock" value="24" sub="Reorder needed" />
        <KpiCard title="Pending Orders" value="6" sub="Awaiting delivery" />
        <KpiCard title="Daily Revenue" value="₱12,420" sub="Today" />
      </div>

      <div style={{display:'grid',gridTemplateColumns:'2fr 1fr',gap:16}}>
        <div>
          <ChartLine data={salesData} />
          <div style={{marginTop:16}} className="card">
            <h3>Recent Activity</h3>
            <table className="table">
              <thead>
                <tr><th>Prescription ID</th><th>Patient</th><th>Medicines</th><th>Status</th></tr>
              </thead>
              <tbody>
                <tr><td>#P-00123</td><td>Juan Dela Cruz</td><td>Paracetamol x2</td><td>Dispensed</td></tr>
                <tr><td>#P-00124</td><td>Maria Clara</td><td>Amoxicillin x1</td><td>Pending</td></tr>
                <tr><td>#P-00125</td><td>Pedro Santos</td><td>Cetirizine x1</td><td>Dispensed</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <ChartBar data={topSelling} />
          <div style={{marginTop:16}} className="card">
            <h3>Notifications</h3>
            <ul style={{margin:0,paddingLeft:16,color:'var(--muted)'}}>
              <li>Amoxicillin low stock (8 left)</li>
              <li>Ibuprofen expired items found</li>
              <li>New supplier added: PharmaCorp</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
