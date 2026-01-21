import React from 'react'

const DATA = [
  {id:'#T-1001',date:'2026-01-20',customer:'Juan D.',meds:'Paracetamol',amount:'₱240',payment:'Cash'},
  {id:'#T-1002',date:'2026-01-20',customer:'Maria C.',meds:'Amoxicillin',amount:'₱420',payment:'Card'},
]

export default function Transactions(){
  return (
    <div className="fade-in">
      <div className="topbar" style={{marginBottom:18}}>
        <div>
          <h2 style={{margin:0}}>Transactions</h2>
          <div className="muted">Sales history and payment records</div>
        </div>
        <div style={{display:'flex',gap:12,alignItems:'center'}}>
          <div className="controls">
            <button className="icon-btn">⬇</button>
            <button className="icon-btn">⤓</button>
          </div>
          <button className="btn">New Sale</button>
        </div>
      </div>

      <div className="card">
        <table className="table">
          <thead><tr><th>ID</th><th>Date</th><th>Customer</th><th>Medicines</th><th>Amount</th><th>Payment</th></tr></thead>
          <tbody>
            {DATA.map(r=> (
              <tr key={r.id}><td>{r.id}</td><td className="muted">{r.date}</td><td style={{fontWeight:700}}>{r.customer}</td><td>{r.meds}</td><td>{r.amount}</td><td>{r.payment}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
