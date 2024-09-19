import React, { useContext } from 'react'
import './FoodDisplay.css'
import { Storecontext } from '../../Context/StoreContext'
import Fooditem from '../Fooditem/Fooditem'

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(Storecontext)
  return (
    <div className='food-delivey' id='food-delivery' >
        <h2>Top dishes for you</h2>  

        <div className="food-list">
           {food_list.map ((item,index ) =>{
            if (category=== "All" || category === item.category) {
              return <Fooditem key={index} id={item._id}  name={item.name} description={item.description} price={item.price} image={item.image} />
              
            }
       
           })}

        </div>
      
    </div>
  )
}

export default FoodDisplay
