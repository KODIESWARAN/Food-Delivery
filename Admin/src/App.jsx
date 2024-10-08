import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbaar from './Components/Navbar/Navbaar'
import Sidebar from './Components/Sidebaar/Sidebar'
import List from './Pages/List/List'
import Add from './Pages/Add/Add'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Orders from './Pages/Orders/order'

const App = () => {
  const Url = "http://localhost:3000"
  return (
  <>
  <ToastContainer/>
   <Navbaar/>
   <hr />
    <div className='app-content' >
      <Sidebar/>
      <Routes>
        <Route path='/add'  element={<Add Url={Url}/>} />
        <Route path='/list' element={<List Url={Url}/>}  />
        <Route path='/order' element={<Orders Url={Url}/>} />
      </Routes>
    </div>



  </>
   
  )
}

export default App
