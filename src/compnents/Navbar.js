import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <>
        <nav className='navbar'>
          <div className='navbar-container'>
              <Link to="/" className="navbar-logo">
                  RAYGUN <i class="fas fa-fighter-jet"></i>
              </Link>

          </div>
        </nav>
        </>
    )
}

export default Navbar
