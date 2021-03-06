import React from 'react'
import Navbar from '../components/Navbar/Navbar'

const Home = () => (
  <>
    <Navbar />
    <div className="main">
      <h1 data-testid="h1Test">Home</h1>
      <img
        data-testid="custom-element"
        src="https://api.freelogodesign.org/files/34eb4009482b4c919fdfaf4f64249cd9/thumb/logo_200x200.png?v=0"
        alt="logo"
      />
    </div>
  </>
)
export default Home
