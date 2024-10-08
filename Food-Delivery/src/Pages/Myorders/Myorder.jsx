import React, { useContext, useEffect, useState } from 'react'
import './Myorder.css'
import {Storecontext} from '../../Context/StoreContext'
import axios from 'axios'
import { assets } from '../../assets/assets'

const Myorder = () => {

    const {Url,token} = useContext(Storecontext)
    const [data,setData] = useState([])

    const fetchorders = async () => {
        const response  = await axios.post(Url+"/api/userorder",{},{headers :{token}});
        setData(response.data.data);
        console.log(response.data.data);
        
    }

    useEffect(() =>{
        if(token){
            fetchorders();
        }
    },[token])

  return (
    <div className='my-orders'  >
      <h2>My Orders</h2>
      <div className='container' >
        {data.map((orders,index)=>{
            return(
                <div key={index} className='my-orders-order' >
                    <img src={assets.parcel_icon} alt="" />
                    <p>
                        {orders.items.map((item,index)=> {
                         if (index === orders.items.length-1) {
                            return item.name + "x" + item.quantity
                            
                         }else {
                            return item.name + "x" + item.quantity + ","
                         }
                        })}
                    </p>
                    <p>${orders.amount}</p>
                    <p>Items :{orders.items.length}</p>
                    <p><span>&#x25cf;</span><b>{orders.status}</b></p>
                    <button>Track Order </button>
                </div>
            )
        })}

      </div>
    </div>
  )
}

export default Myorder
