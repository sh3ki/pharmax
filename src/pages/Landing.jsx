import React from 'react'
import { Link } from 'react-router-dom'

import Hero from '../assets/hero-illustration.svg'
import FeaturePrescription from '../assets/feature-prescription.svg'
import FeatureInventory from '../assets/feature-inventory.svg'
import FeatureAlert from '../assets/feature-alert.svg'
import FeatureAnalytics from '../assets/feature-analytics.svg'
import Footer from '../components/Footer'

const Feature = ({title,desc,icon}) => (
  <div className="feature" style={{display:'flex',flexDirection:'column',gap:8,boxShadow:'0 2px 12px rgba(155,89,182,0.08)'}}>
    <div style={{display:'flex',alignItems:'center',gap:12}}>
      <div style={{width:44,height:44,display:'grid',placeItems:'center',borderRadius:10,background:'linear-gradient(90deg, rgba(155,89,182,0.12), rgba(142,68,173,0.06))'}} dangerouslySetInnerHTML={{__html:icon}} />
      <div style={{fontWeight:700}}>{title}</div>
    </div>
    <div className="muted" style={{fontSize:13}}>{desc}</div>
  </div>
)

export default function Landing(){
  return (
    <div className="fade-in">
      <section className="hero fade-in">
        <div className="hero-left left">
          <h1>Pharmax</h1>
          <h2 style={{marginTop:6,marginBottom:6}}>Alaga sa Bawat Gamot, Ligtas ang Bawat Pasyente</h2>
          <p className="muted">Fast prescription management, inventory tracking, and sales insights built for modern pharmacies.</p>
          <div className="cta-group" style={{marginTop:18,display:'flex',gap:12}}>
            <button className="btn">Buy Now</button>
            <Link to="/dashboard"><button className="btn ghost">Login</button></Link>
          </div>

          <div style={{marginTop:22,display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:18}}>
            <Feature title="Prescription Management" desc="Create, track and dispense prescriptions quickly" icon={FeaturePrescription} />
            <Feature title="Inventory & Stock Tracking" desc="Visual stock levels and alerts" icon={FeatureInventory} />
            <Feature title="Low Stock & Expiry Alerts" desc="Never miss expired or low items" icon={FeatureAlert} />
            <Feature title="Sales Reports & Analytics" desc="Understand revenue trends at a glance" icon={FeatureAnalytics} />
          </div>

          <div style={{marginTop:22,display:'flex',gap:12}}>
            <div className="step">1. Add prescription</div>
            <div className="step">2. Dispense & update stock</div>
            <div className="step">3. View reports</div>
          </div>
        </div>
        <div className="hero-right right" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          <div style={{width:640,height:380}} dangerouslySetInnerHTML={{__html:Hero}} />
        </div>
      </section>

      <section style={{marginTop:34}}>
        <h3>UI Preview</h3>
        <div className="carousel">
          <div className="screenshot" />
          <div className="screenshot" />
          <div className="screenshot" />
        </div>
      </section>

      <Footer />
    </div>
  )
}
