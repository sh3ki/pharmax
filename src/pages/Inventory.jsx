import React, {useState} from 'react'
import Modal from '../components/Modal'

  const DATA = [
  {name:'Paracetamol',sku:'MED-001',category:'OTC',qty:120,expiry:'2026-12-31',max:200},
  {name:'Amoxicillin',sku:'MED-002',category:'Prescription',qty:8,expiry:'2025-06-01',max:100},
  {name:'Ibuprofen',sku:'MED-003',category:'OTC',qty:0,expiry:'2024-02-01',max:80},
]

export default function Inventory(){
  const [open,setOpen] = useState(false)
  return (
    <div className="fade-in">
      <h2>Inventory</h2>
      <div style={{display:'flex',justifyContent:'space-between',marginBottom:12}}>
        <input placeholder="Search medicines..." style={{padding:8,borderRadius:8}} />
        <button className="btn" onClick={()=>setOpen(true)}>Add Medicine</button>
      </div>
      <div className="card">
        <table className="table">
          <thead><tr><th>Medicine</th><th>SKU</th><th>Category</th><th>Stock</th><th>Expiry</th><th>Status</th></tr></thead>
          <tbody>
            {DATA.map(d=>{
              const status = d.qty===0? 'Expired/Out': d.qty<10? 'Low': 'In Stock'
              const pct = Math.max(0, Math.min(100, Math.round((d.qty/d.max)*100)))
              return (
                <tr key={d.sku}>
                  <td style={{fontWeight:700}}>{d.name}</td>
                  <td className="muted">{d.sku}</td>
                  <td>{d.category}</td>
                  <td style={{width:220}}>
                    <div style={{display:'flex',alignItems:'center',gap:12}}>
                      <div style={{flex:1}}>
                        <div className="progress"><i style={{width:`${pct}%`}}></i></div>
                      </div>
                      <div style={{width:48,textAlign:'right'}}>{d.qty}</div>
                    </div>
                  </td>
                  <td className="muted">{d.expiry}</td>
                  <td><span className="badge">{status}</span></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      {open && <Modal title="Add Medicine" onClose={()=>setOpen(false)}>
        <div style={{display:'grid',gap:8}}>
          <input placeholder="Medicine name" style={{padding:8}} />
          <input placeholder="SKU" style={{padding:8}} />
          <input placeholder="Category" style={{padding:8}} />
          <input placeholder="Quantity" style={{padding:8}} />
          <input placeholder="Expiry date" style={{padding:8}} />
          <div style={{display:'flex',justifyContent:'flex-end'}}><button className="btn">Save</button></div>
        </div>
      </Modal>}
    </div>
  )
}
