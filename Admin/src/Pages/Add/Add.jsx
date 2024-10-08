import React, { useEffect, useState } from 'react'
import './Add.css'
import axios from 'axios'
import { assets } from '../../assets/assets'
import { toast } from 'react-toastify'

const Add = ({Url}) => {
  const [image ,setImage] = useState(false);
  const [data, setData] = useState({
    name : "",
    description : "",
    price :"",
    category : "salad"
  })

 const onchangehandler = (event)=> {
  const name  =  event.target.name;
  const value =  event.target.value;
  setData(data => ({...data ,[name]: value}))
 }

  const onSubmitHandler = async(event) => {
  event.preventDefault();
  const formData = new FormData();
  formData.append("name" ,data.name),
  formData.append("description", data.description),
  formData.append("price", Number(data.price)),
  formData.append("category" ,data.category),
  formData.append("image", image)
  const response = await axios.post(`${Url}/api/order/add`,formData)
  if (response.data.success) {
    setData({
      name : "",
      description : "",
      price :"",
      category : "salad"

    })
    setImage(false)
    toast.success(response.data.message)
  } else {
    toast.error(response.data.message)
  }


 }

  return (
    <div className='add' >
      <form className='flex-col' onSubmit={onSubmitHandler}  >
        <div className='add-image-icon  flex-col' >
          <p>Upload image</p>
          <label htmlFor="image">
            <img src={image?URL.createObjectURL(image): assets.upload_area} alt="" />
          </label>
          <input onChange={(e)=> setImage(e.target.files[0])}   type="file" name="" id="image"  hidden required/>

        </div>
        <div className="add-product-name  flex-col ">
           <p>Product Name</p>
           <input onChange={onchangehandler} value={data.name} type="text" name="name" id=""  placeholder='Type here'/>

        </div>
        <div className="add-discription-area flex-col">
          <p>Product Description</p>
          <textarea  onChange={onchangehandler}  value={data.description} name="description" id=""  rows='6' placeholder='Type your context' ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category  flex-col " >
          <p>Product category</p>
          <select  onChange={onchangehandler} name="category" >
            <option value="Salads">Salads</option>
            <option value="Rolls">Rolls</option>
            <option value="Deserts">Deserts</option>
            <option value="Sanwich">Sanwich</option>
            <option value="Cake">Cake</option>
            <option value="Pure veg">Pure veg</option>
            <option value="Pasta">Pasta</option>
            <option value="Noodles">Noodles</option>
          </select>
          </div>
          <div className="add-price  flex-col">
          <p>Product Price</p>
          <input onChange={onchangehandler} value={data.price}  type="Number" name="price" id="" placeholder='$20' />
        </div>
        </div>
          <button  type='submit' className='add-btn' >ADD</button>
      </form>
      
    </div>
  )
}

export default Add
