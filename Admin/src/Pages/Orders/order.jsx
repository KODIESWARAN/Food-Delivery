import React, { useEffect, useState } from 'react'
import './order.css'
import axios from 'axios'
import {toast} from 'react-toastify'
import {assets} from '../../assets/assets'

const Orders = ({Url}) => {
 

   const [count , setCount] = useState([]);

   const fetchAllOrders = async () => {
    const response = await axios.get(Url+"/api/order/list");
    if (response.data.success) {
      setCount(response.data.data);
      console.log(response.data.data)
      
    } else {
      toast.error("Error")
   }
    
   }

   const statusHandler = async (event,orderId) => {
    const response = await axios.post(Url+"/api/order/status",{
      orderId,
      status:event.target.value
    })
    if (response.data.success) {
      await fetchAllOrders();
    }
    
   }
   
   useEffect(()=>{
    fetchAllOrders();

   },[])

   
  return (
    <div className='order add' >
      <h3>Order page</h3>
      <div className="order-list">
        {count.map((order,index)=>(
          <div  key={index}  className="order-item">
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className="order-item-food">
                {order.items.map((item,index) => {
                  if (index===order.items.length-1) {
                    return item.name +" x " + item.quantity   
                  } 
                  else {
                    return item.name + " x " + item.quantity + " ,"
                  }

                })}
              </p>
              <p className='order-item-name' >
                {order.address.firstname + " " + order.address.lastname}
              </p>
              <div className="order-item-address">
                <p>{order.address.street+","}</p>
                <p>{order.address.city +","+ order.address.state +","+order.address.country}</p>
              </div>
              <p className='order-item-phone' >{order.address.phone}</p>
            </div> 
            <p>Items :{order.items.length}</p> 
            <p>${order.amount}</p>
            <select name="" id="" onChange={(event)=> statusHandler(event,order._id)} value={order.status}  >
              <option value="Food Processing">Food Processing</option>
              <option value="Out of Delivery">Out of Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Orders
