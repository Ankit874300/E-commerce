// import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import navProfile from '../../assets/nav-profile.svg'
const Navbar = () => {
  return (
    <div className="navbar">
  <div className='navbar'>
            <div className='nav-logo'>
                <img  src={logo} alt='' />
                <p className='hh' >Shopable</p>
                <p className='bb' >Admin panel</p>
            </div>
            </div>
<    img className='navprofile' src={navProfile} alt="" />
    </div>
  )
}

export default Navbar