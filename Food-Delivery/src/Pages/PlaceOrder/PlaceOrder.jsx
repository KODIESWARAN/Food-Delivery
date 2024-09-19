import React, { useContext } from 'react'
import './PlaceOrder.css'
import { Storecontext } from '../../Context/StoreContext'

const PlaceOrder = () => {
  const {TotalcartItems} = useContext(Storecontext)
   return (
    <form className='place-order'>

      <div className="place-order-left">
        <p className='title'>Delivery informations </p>
        <div className="multi-fields">
          <input type="text" name="" id="" placeholder='first' />
          <input type="text" name="" id="" placeholder='last' />
        </div>
        <input type="email" name="" id="" placeholder='email' />
        <input type="text" name="" id="" placeholder='street' />
        <div className="multi-fields">
          <input type="text" name="" id="" placeholder='City' />
          <input type="text" name="" id="" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="number" name="" id="" placeholder='zip-code' />
          <input type="text" name="" id="" placeholder='Country' />
        </div>
        <input type="number" name="" id="" placeholder='phone' />
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
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
