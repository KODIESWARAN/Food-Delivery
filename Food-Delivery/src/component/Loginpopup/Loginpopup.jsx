import React, { useContext, useEffect, useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'
import { Storecontext } from '../../Context/StoreContext'
import axios from 'axios'

const Loginpopup = ({setShowLogin}) => {

  const {Url , setToken} = useContext(Storecontext)
const [currentstate ,setCurrentstate] = useState("Login")
const [data ,setData] = useState({
  name : "",
  email: "",
  password: ""
})

const onChangehandler = (event)=>{
  const name = event.target.name;
  const value = event.target.value;
  setData(data => ({...data,[name]:value }))
}

const onlogin = async(event) => {
  event.preventDefault();
  let newUrl = Url;
  if (currentstate === "Login") {
    newUrl += "/api/login"  
  } else {
    newUrl += "/api/register"
  }
  console.log(newUrl);
  
  const response = await axios.post(newUrl,data)
  if (response.data.success) {
    setToken(response.data.token);
    localStorage.setItem("token", response.data.token);
    setShowLogin(false)
    
  }else {
    alert(response.data.message )
  }
   
}

useEffect(()=> {
  console.log(data);
  
},[data])


  return (
    <div className='login-popup'>
        <form  onSubmit={onlogin} className="Login-popup-container">
            <div className="Login-popup-title">
                  <h2>{currentstate}</h2> 
                  <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />

            </div>
            <div className="Login-popup-inputs">
                {currentstate === 'Login' ? <></> :  <input type="text" name="name" onChange={onChangehandler} value={data.name} id=""  placeholder='Your name' required/>}
                <input type="email" name="email" onChange={onChangehandler} value={data.email}  id="" placeholder='Email Address' required />
                <input type="password" name="password" onChange={onChangehandler} value={data.password }  id="" placeholder='password' required />
            </div>
            <button type='submit' >{currentstate === 'Signup' ? 'Create account' : 'Login'}</button>
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
