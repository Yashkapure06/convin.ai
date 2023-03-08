import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css'
const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="container flex">
        <div className='mobile-nav'>
          <div className="flex">
            {/* <img src="favicon.ico" alt="icon" style={{ width: '20px' }} /> */}
            <h3 className="logo">CONVIN.</h3>
          </div>
          <div className="menu-display hidden" onClick={() => setOpen(!open)}>
            <span className={open ? '' : 'hide'}>X</span>
            <span className={open ? 'hide' : ''}>☰</span>
          </div>
        </div>
        <nav className={open ? 'change' : ''}>
          <ul className="flex">
            <Link to="/"><li>Home</li></Link>
            <a href="#features"><li>Features</li></a>
            <Link to="/contact"><li>Contact</li></Link>
            {/* <Link to="/Dashboard"><li>Dashboard</li></Link> */}
          </ul>
        </nav>
        {/* <Link to="/signup"><button>Get Started</button></Link> */}
      </div>
    </div>
  )
}

export default NavBar
