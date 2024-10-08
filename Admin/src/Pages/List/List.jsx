import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './List.css'
import { toast} from 'react-toastify'


const List = ({Url}) => {

  
  const [list , setList] = useState([]);

const fetchlist = async() => {
  const response = await axios.get(`${Url}/api/order/list`);
  console.log(response.data);
  
  if (response.data.success) {
    setList(response.data.data); 
  }else {
    toast.error("Error")
  }
}

useEffect(()=>{
  fetchlist();
},[])


const removefood = async(foodId) =>{
  const response = await axios.post(`${Url}/api/remove`,{id:foodId})
  await fetchlist();
  if (response.data.success) {
    setList(response.data.data); 
  }else {
    toast.error("Error")
  } 
}

  return (
    <div className='list add flex-col'>
      <p>All Food List</p>
      <div className='list-table'>
        <div className='list-table-format title'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
           
        </div>
        {list.map((item,index)=> {
          return (
            <div key={index} className='list-table-format'>
              <img src={`${Url}/images/`+item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p onClick={()=> removefood(item._id)} className='cursor' >x</p>

            </div>
          )
        })}
      </div>
      
    </div>
  )
}

export default List
