import React, { useContext,  } from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'
import { Storecontext } from '../../Context/StoreContext'

const Fooditem = ({id,name,description,price,image}) => {

const{cartitems,addTocart,removeTocart,Url}=useContext(Storecontext);



  return (
    <div className='food-item'>
        <div className="food-item-image-container">
            <img className='food-item-image' src={Url+"/images/"+image} alt="" />
                {!cartitems[id] 
                 ? <img className='add' onClick={()=> addTocart(id)} src={assets.add_icon_white} alt="" />
                 : <div className="image-counter">
                  <img  onClick={()=> addTocart(id)} src={assets.add_icon_green} alt="" />
                  <p>{cartitems[id]}</p>
                  <img  onClick={()=> removeTocart(id)} src={assets.remove_icon_red} alt="" />
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
