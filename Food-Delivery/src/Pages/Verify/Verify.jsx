import React, { useContext, useEffect } from 'react'
import './verify.css'
import {useNavigate, useSearchParams} from 'react-router-dom'
import { Storecontext } from '../../Context/StoreContext';
import axios from 'axios';



const Verify = () => {
    
    const [searchParams , setSearchparams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const {Url} = useContext(Storecontext);
    const navigate = useNavigate();

    const verifypayment = async () => {
        const response =await axios.post(Url+"/api/verify",{success,orderId})
        if(response.data.success){
             navigate("/myorders")
        } else {
            navigate("/")
        }
        
    }

    useEffect(()=>{
        verifypayment();
    },[ ])




  return (
    <div className='verify' >
        <div  className='spinner'  >
            
            
        </div> 
      
    </div>
  )
} 

export default Verify
