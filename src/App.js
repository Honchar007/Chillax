//  Import
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
//  Styles
import './styles/App.css'

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  )
}

export default App
