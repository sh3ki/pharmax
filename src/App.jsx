import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Prescriptions from './pages/Prescriptions'
import Inventory from './pages/Inventory'
import Transactions from './pages/Transactions'
import Reports from './pages/Reports'
import Suppliers from './pages/Suppliers'
import Settings from './pages/Settings'
import Sidebar from './components/Sidebar'

export default function App(){
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/prescriptions" element={<Prescriptions/>} />
          <Route path="/inventory" element={<Inventory/>} />
          <Route path="/transactions" element={<Transactions/>} />
          <Route path="/reports" element={<Reports/>} />
          <Route path="/suppliers" element={<Suppliers/>} />
          <Route path="/settings" element={<Settings/>} />
        </Routes>
      </div>
    </div>
  )
}
