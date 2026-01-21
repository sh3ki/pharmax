import React from 'react'

export default function Modal({title,children,onClose}){
  return (
    <div style={{position:'fixed',inset:0,background:'linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.72))',display:'flex',alignItems:'center',justifyContent:'center',zIndex:60}}>
      <div style={{width:680,maxWidth:'96%',background:'linear-gradient(180deg,var(--card),#0f1117)',padding:22,borderRadius:14,border:'1px solid var(--muted-2)',boxShadow:'0 10px 40px rgba(0,0,0,0.7)'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <h3 style={{margin:0}}>{title}</h3>
          <button className="btn ghost" onClick={onClose}>Close</button>
        </div>
        <div style={{marginTop:14}}>{children}</div>
      </div>
    </div>
  )
}
