import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {

    const [menu , setMenu] = useState("Home");
    
  return (
    <div className='Navbar'>
        <img src={assets.logo} alt="" className="logo" />
        
            <ul className='Navbar-Menu'>
                <li onClick={() => setMenu("Home")}  className= {menu === "Home" ? "active" : "" } >Home</li>
                <li onClick={() => setMenu("Menu")} className={menu === "Menu"? "active": ""}>Menu</li>
                <li onClick={() => setMenu("Mobile-App")} className={menu === "Mobile-App"? "active": ""}>Mobile-App</li>
                <li  onClick={() => setMenu("Contact-Us")}className={menu === "Contact-Us"? "active": ""} >Contact-Us</li>
            </ul>
            <div className="Navbar-Right">
                <img src={assets.search_icon} alt=""  />
                <div className="Navbar-search">
                    <img src={assets.basket_icon} alt="" />
                    <div className="dot"></div>
                </div>
                <button>Signin</button>
            </div>
      
    </div>
  )
}

export default Navbar


