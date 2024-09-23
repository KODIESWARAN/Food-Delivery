import React from 'react'
import './Navbaar.css'
import {assets} from '../../assets/assets'
 
const Navbaar = () => {
  return (
    <div className='navbar' >
        <img className='logo' src={assets.logo} alt="" />
        <img className='profile' src={assets.profile_image} alt="" />
      
    </div>
  )
}

export default Navbaar