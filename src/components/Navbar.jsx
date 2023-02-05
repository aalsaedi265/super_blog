import React from 'react'
import logo from "../img/aniz.webp"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      Navbar
      <div className='container-nav'>
        <div className='logo'>
          <img alt="momangas" src={logo}  />
        </div>
        <div className='links'>
            <Link className='link' to ="/?cat=art">
              <h6>ART</h6>
            </Link>
            <Link className='link' to ="/?cat=science">
              <h6>SCIENCE</h6>
            </Link>
            <Link className='link' to ="/?cat=technology">
              <h6>TECHNOLOGY</h6>
            </Link>
           
            <Link className='link' to ="/?cat=design">
              <h6>DESIGN</h6>
            </Link>
            <Link className='link' to ="/?cat=food">
              <h6>FOOD</h6>
            </Link>
            <span>UserName</span>
            <span>Logout</span>
            <span className='write'>
              <Link className='link' to="/write">Write</Link>
            </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar