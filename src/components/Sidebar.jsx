import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/logo.svg'

const links = [
  ['Dashboard','/dashboard'],
  ['Prescriptions','/prescriptions'],
  ['Inventory','/inventory'],
  ['Transactions','/transactions'],
  ['Reports','/reports'],
  ['Suppliers','/suppliers'],
  ['Settings','/settings']
]

export default function Sidebar(){
  const [collapsed,setCollapsed] = useState(false)
  return (
    <aside className={"sidebar" + (collapsed? ' collapsed':'')}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div className="brand">
          <div className="pill" dangerouslySetInnerHTML={{__html: Logo}} />
          {!collapsed && <div>
            <div>Pharmax</div>
            <small>Alaga sa Bawat Gamot</small>
          </div>}
        </div>
        <button className="btn ghost" onClick={()=>setCollapsed(v=>!v)} style={{height:36}}>{collapsed? '▶':'◀'}</button>
      </div>
      <nav className="nav">
        {links.map(l=> (
          <NavLink key={l[1]} to={l[1]} className={({isActive})=> isActive? 'active' : ''}>
            {!collapsed ? l[0] : l[0].slice(0,2)}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
