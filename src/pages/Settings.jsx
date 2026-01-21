import React from 'react'

export default function Settings(){
  return (
    <div className="fade-in">
      <h2>Settings</h2>
      <div className="card">
        <h3>Pharmacy Info</h3>
        <div style={{display:'grid',gap:12}}>
          <input className="input" placeholder="Pharmacy name" />
          <input className="input" placeholder="Address" />
          <input className="input" placeholder="Contact" />
          <div style={{display:'flex',justifyContent:'flex-end',gap:8}}><button className="btn">Save</button></div>
        </div>
      </div>
      <div className="card" style={{marginTop:12}}>
        <h3>Tax & Currency</h3>
        <div style={{display:'grid',gap:12}}>
          <input className="input" placeholder="Currency (e.g. PHP)" />
          <input className="input" placeholder="Tax rate (%)" />
          <div style={{display:'flex',justifyContent:'flex-end',gap:8}}><button className="btn">Save</button></div>
        </div>
      </div>
    </div>
  )
}
