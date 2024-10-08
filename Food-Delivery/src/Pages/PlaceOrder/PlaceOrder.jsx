import React, { useContext, useEffect, useState, useNavigate } from 'react'
import './PlaceOrder.css'
import { Storecontext } from '../../Context/StoreContext'
import axios from 'axios'

const PlaceOrder = () => {
  const {TotalcartItems,token,food_list,cartitems,Url} = useContext(Storecontext)

  const [data , setData] = useState({
    firstname : "",
    lastname : "",
    email : "",
    street:"",
    city :"",
    state :"",
    zipcode :"",
    country :"",
    phone:"",
  })

  const onchangeHandler = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data,[name]:value}))
  }
  
const placeorder = async (event) => {
  event.preventDefault();
  let OrderItems = [];
  food_list.map((item)=>{
    if(cartitems[item._id]>0){
      let iteminfo = item;
      iteminfo["quantity"] =cartitems[item._id];
      OrderItems.push(iteminfo);
    }
    
    
})
let orderData = {
  address:data,
  items :OrderItems,
  amount : TotalcartItems()+2,

}
let response = await axios.post(Url+"/api/place",orderData,{headers:{token}})
if (response.data.success) {
  const {session_url} = response.data;
  window.location.replace(session_url)
  
}else {
  alert("Error")
}

}

const navigate = useNavigate();

useEffect(()=>{
  if (!token) {
    navigate('/cart') 
  }
  else if (TotalcartItems()===0){
    navigate('/cart')
  }

},[token])

   return (
    <form   onSubmit={placeorder}  className='place-order'>

      <div className="place-order-left">
        <p className='title'>Delivery informations </p>
        <div className="multi-fields">
          <input  required type="text" name="firstname" onChange={onchangeHandler} value={data.firstname} id="" placeholder='first' />
          <input  required type="text" name="lastname" onChange={onchangeHandler} value={data.lastname}  id="" placeholder='last' />
        </div>
        <input required type="email" name="email" onChange={onchangeHandler} value={data.email}  id="" placeholder='email' />
        <input required  type="text" name="street" onChange={onchangeHandler}  value={data.street}  id="" placeholder='street' />
        <div className="multi-fields">
          <input required type="text" name="city" onChange={onchangeHandler} value={data.city} id="" placeholder='City' />
          <input required type="text" name="state" onChange={onchangeHandler} value={data.state}  id="" placeholder='State' />
        </div> 
        <div className="multi-fields">
          <input  required type="Number" name="zipcode" onChange={onchangeHandler} value={data.zipcode} id="" placeholder='zip-code' />
          <input  required type="text" name="country" onChange={onchangeHandler} value={data.country}  id="" placeholder='Country' />
        </div>
        <input  required type="string" name="phone" onChange={onchangeHandler} value={data.phone}  id="" placeholder='phone' />
      </div>
      <div className="place-order-right">
        <div className="cart-totals">
          <h2>Cart Totals</h2>
          <div>
            <div className="car-details">
              <p>Subtotal</p>
              <p>${TotalcartItems()}</p>
            </div>
            <hr />
            <div className="car-details">
              <p>Delivery Fee</p>
              <p>${TotalcartItems() === 0 ? 0 :  2}</p>
            </div>
            <hr />
            <div className="car-details">
              <p>Total</p>
              <b>${TotalcartItems() === 0 ? 0 : TotalcartItems() + 2}</b>
            </div>
          </div>
          <button type='Submit'>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
