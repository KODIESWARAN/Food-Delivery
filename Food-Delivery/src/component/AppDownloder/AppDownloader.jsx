import React from 'react'
import  './AppDownloader.css'
import { assets } from '../../assets/assets'

const AppDownloader = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br /> Tomato app</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>

      
    </div>
  )
}

export default AppDownloader
