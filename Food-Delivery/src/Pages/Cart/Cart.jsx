import React, { useContext } from 'react'
import  './Cart.css';
import { Storecontext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

 const {cartitems,food_list, removeTocart, TotalcartItems , Url} =  useContext(Storecontext)

 const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
      </div>
      <br />
      <hr />
      {food_list.map((item,index) =>{
        if(cartitems[item._id] > 0 ){
          return(
             <div>
              <div key={ item._id} className="cart-item-title cart-item-items">
              <img src={Url+"/images/"+  item.image} alt="" />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{cartitems[item._id]}</p>
              <p>${item.price *cartitems[item._id]}</p>
              <p className='cross' onClick={()=> removeTocart(item._id)}>x</p>

            </div>
            <hr />

             </div>
         
          )
        }
      })}
      <div className="cart-button">
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
              <p>${TotalcartItems() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="car-details">
              <p>Total</p>
              <b>${TotalcartItems() === 0 ? 0 : TotalcartItems()+2 }</b>
            </div>
          </div>
          <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className='cart-promocode'>
          <div>
            <p>If you have a promo code , Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" name="" id="" placeholder='promo code' />
              <button >submit</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  ) 
}

export default Cart
