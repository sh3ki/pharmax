import React, {useState} from 'react'
import Modal from '../components/Modal'

const DATA = [
  {name:'MediSupply Inc.',contact:'0917-000-0000',meds:'Paracetamol, Ibuprofen',status:'Active'},
  {name:'PharmaCorp',contact:'(02) 123-4567',meds:'Amoxicillin',status:'Active'}
]

export default function Suppliers(){
  const [open,setOpen] = useState(false)
  return (
    <div className="fade-in">
      <div className="topbar" style={{marginBottom:18}}>
        <div>
          <h2 style={{margin:0}}>Suppliers</h2>
          <div className="muted">Manage supplier contacts and supplied medicines</div>
        </div>
        <div style={{display:'flex',gap:12,alignItems:'center'}}>
          <input className="input" placeholder="Search suppliers..." />
          <button className="btn" onClick={()=>setOpen(true)}>Add Supplier</button>
        </div>
      </div>

      <div className="card">
        <table className="table">
          <thead><tr><th>Supplier</th><th>Contact</th><th>Medicines</th><th>Status</th></tr></thead>
          <tbody>{DATA.map(s=> (
            <tr key={s.name}>
              <td style={{fontWeight:700}}>{s.name}</td>
              <td className="muted">{s.contact}</td>
              <td>{s.meds}</td>
              <td>{s.status==='Active'? <span className="badge success">Active</span> : <span className="badge">{s.status}</span>}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>

      {open && <Modal title="Add Supplier" onClose={()=>setOpen(false)}>
        <div style={{display:'grid',gap:8}}>
          <input className="input" placeholder="Supplier name" />
          <input className="input" placeholder="Contact info" />
          <textarea className="input" placeholder="Medicines supplied" style={{minHeight:100}} />
          <div style={{display:'flex',justifyContent:'flex-end',gap:8}}>
            <button className="btn ghost" onClick={()=>setOpen(false)}>Cancel</button>
            <button className="btn">Save</button>
          </div>
        </div>
      </Modal>}
    </div>
  )
}
