import React, { useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'

const Loginpopup = ({setShowLogin}) => {
const [currentstate ,setCurrentstate] = useState("Login")

  return (
    <div className='login-popup'>
        <form className="Login-popup-container">
            <div className="Login-popup-title">
                  <h2>{currentstate}</h2> 
                  <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />

            </div>
            <div className="Login-popup-inputs">
                {currentstate === 'Login' ? <></> :  <input type="text" name="" id=""  placeholder='Your name' required/>}
                <input type="email" name="" id="" placeholder='Email Address' required />
                <input type="password" name="" id="" placeholder='password' required />
            </div>
            <button>{currentstate === 'Signup' ? 'Create account' : 'Login'}</button>
            <div className="Login-popup-condition">
                <input type="checkbox" name="" id=""  required/>
                <p>By continuing , i agree to the terms of use and privacy policy</p>
            </div>
            {currentstate === 'Login' ? <p> Create an account ? <span onClick={() => setCurrentstate("Signup")} >Click here</span></p>
            :<p> Already have an account ? <span onClick={() => setCurrentstate("Login")} >Login here</span></p>}
        </form>
      
    </div> 
  )
}

export default Loginpopup
