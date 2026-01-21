import React, {useState} from 'react'
import Modal from '../components/Modal'

const MOCK = [
  {id:'#P-00123',patient:'Juan Dela Cruz',doctor:'Dr. Reyes',meds:'Paracetamol x2',status:'Dispensed'},
  {id:'#P-00124',patient:'Maria Clara',doctor:'Dr. Santos',meds:'Amoxicillin x1',status:'Pending'},
  {id:'#P-00125',patient:'Pedro Santos',doctor:'Dr. Lim',meds:'Cetirizine x1',status:'Pending'}
]

export default function Prescriptions(){
  const [open,setOpen] = useState(false)
  return (
    <div className="fade-in">
      <div className="topbar" style={{marginBottom:18}}>
        <div>
          <h2 style={{margin:0}}>Prescriptions</h2>
          <div className="muted">Manage prescriptions and dispensing</div>
        </div>
        <div style={{display:'flex',gap:12,alignItems:'center'}}>
          <input className="input" placeholder="Search by patient, id..." />
          <button className="btn" onClick={()=>setOpen(true)}>Add Prescription</button>
        </div>
      </div>

      <div className="card">
        <table className="table">
          <thead><tr><th>ID</th><th>Patient</th><th>Doctor</th><th>Medicines</th><th>Status</th></tr></thead>
          <tbody>
            {MOCK.map(r=> (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td style={{fontWeight:700}}>{r.patient}</td>
                <td className="muted">{r.doctor}</td>
                <td>{r.meds}</td>
                <td>{r.status==='Dispensed' ? <span className="badge success">Dispensed</span> : <span className="badge warn">{r.status}</span>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {open && <Modal title="Add Prescription" onClose={()=>setOpen(false)}>
        <div style={{display:'grid',gap:10}}>
          <input className="input" placeholder="Patient name" />
          <input className="input" placeholder="Doctor" />
          <textarea className="input" placeholder="Medicines (comma-separated)" style={{minHeight:100}} />
          <div style={{display:'flex',justifyContent:'flex-end',gap:8}}>
            <button className="btn ghost" onClick={()=>setOpen(false)}>Cancel</button>
            <button className="btn">Save</button>
          </div>
        </div>
      </Modal>}
    </div>
  )
}
