import React from 'react'

export default function KpiCard({title,value,sub,icon}){
  return (
    <div className="card">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div>
          <h3>{title}</h3>
          <div className="value">{value}</div>
          {sub && <div style={{color:'var(--muted)',marginTop:8,fontSize:13}}>{sub}</div>}
        </div>
        {icon && <div style={{width:48,height:48,display:'flex',alignItems:'center',justifyContent:'center',borderRadius:12,background:'linear-gradient(90deg,var(--accent),var(--accent-2))'}}>{icon}</div>}
      </div>
    </div>
  )
}
