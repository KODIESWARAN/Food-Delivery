import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-context-left">
                <img src={assets.logo} alt="" />
                <p>nnaljla</p>
                <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
            <h2>COMPANY</h2>
                 <ul>
                    <li>Home</li>
                    <li>AboutUs</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                 </ul>
                
            </div>
            <div className="footer-context-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>8754312628</li>
                    <li>kodiswran02@gmail.com</li>
                </ul>
              
            </div>

        </div>
        <hr />
        <p className='copyright'>Copyright 2024 Tomato.com - All Right Reserved </p>
      
    </div>
  )
}

export default Footer
