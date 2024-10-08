import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import {Link, useNavigate} from 'react-router-dom'
import { Storecontext } from '../../Context/StoreContext'

const Navbar = ({setShowLogin}) => {

    const [menu , setMenu] = useState("Home");

    const {TotalcartItems ,token ,setToken} =  useContext(Storecontext)
    const navigate = useNavigate();


    const Logout = () => {
      localStorage.removeItem("token");
      setToken("");
      navigate("/")
    }
    
  return (
    <div className='Navbar'>
      <Link  to='/'>  <img src={assets.logo} alt="" className="logo" /></Link>
        
            <ul className='Navbar-Menu'>
                <Link  to ='/' onClick={() => setMenu("Home")}  className= {menu === "Home" ? "active" : "" } >Home</Link>
                <a href='#Explore-menu' onClick={() => setMenu("Menu")} className={menu === "Menu"? "active": ""}>Menu</a>
                <a href='#app-download' onClick={() => setMenu("Mobile-App")} className={menu === "Mobile-App"? "active": ""}>Mobile-App</a>
                <a href='#footer'  onClick={() => setMenu("Contact-Us")}className={menu === "Contact-Us"? "active": ""} >Contact-Us</a>
            </ul>
            <div className="Navbar-Right">
                <img src={assets.search_icon} alt=""  />
                <div className="Navbar-search">
                   <Link to='/cart'> <img src={assets.basket_icon} alt="" /></Link>
                    <div className={ TotalcartItems() === 0 ? "" : " dot"}></div>
                </div>
                {!token ? <button onClick={() =>setShowLogin(true)} >Signin</button>:
                <div className='navbar-profile' >
                  <img src={assets.profile_icon} alt="" />
                  <ul className="nav-profile-dropdown">
                    <li onClick={() => navigate('/myorders')}  ><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                    <hr />
                    <li onClick={Logout} ><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                  </ul>

                </div>  }
                
            </div>
      
    </div>
  )
}

export default Navbar


