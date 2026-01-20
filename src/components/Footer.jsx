import React from 'react'

export default function Footer(){
  return (
    <footer style={{marginTop:48,color:'var(--muted)'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12}}>
        <div>
          <div style={{fontWeight:700,fontSize:16}}>Pharmax</div>
          <div style={{fontSize:13}}>Alaga sa Bawat Gamot — © {new Date().getFullYear()}</div>
        </div>
        <div style={{display:'flex',gap:10}}>
          <a href="#" style={{color:'var(--muted)'}}>Privacy</a>
          <a href="#" style={{color:'var(--muted)'}}>Contact</a>
          <a href="#" style={{color:'var(--muted)'}}>Docs</a>
        </div>
      </div>
    </footer>
  )
}
