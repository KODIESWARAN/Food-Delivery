import React, { useState } from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'

const Fooditem = ({id,name,description,price,image}) => {
const [itemcount , setItem] = useState(0)


  return (
    <div className='food-item'>
        <div className="food-item-image-container">
            <img className='food-item-image' src={image} alt="" />
                {!itemcount 
                 ? <img className='add' onClick={()=> setItem(prev=>prev+1)} src={assets.add_icon_white} alt="" />
                 : <div className="image-counter">
                  <img  onClick={()=> setItem(prev=>prev+1)} src={assets.add_icon_green} alt="" />
                  <p>{itemcount}</p>
                  <img  onClick={()=> setItem(prev=>prev-1)} src={assets.remove_icon_red} alt="" />
                 </div>
                }

        </div>
        <div className="food-item-info">
          <div className="food-item-rating">
          <p>{name}</p>
          <img   src={assets.rating_starts} alt="" /> 
          </div>
          <p className='food-item-desc'>{description}</p>
          <p className='food-item-price'> ${price}</p>
        </div>
        
  
      
    </div>
  )
}

export default Fooditem
