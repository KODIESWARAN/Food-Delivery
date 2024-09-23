import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbaar from './Components/Navbar/Navbaar'
import Sidebar from './Components/Sidebaar/Sidebar'
import List from './Pages/List/List'
import Add from './Pages/Add/Add'
import Order from './Pages/Orders/order'

const App = () => {
  return (
  <>
   <Navbaar/>
   <hr />
    <div className='app-content' >
      <Sidebar/>
      <Routes>
        <Route path='/add'  element={<Add/>} />
        <Route path='/list' element={<List/>}  />
        <Route path='/order' element={<Order/>} />
      </Routes>
    </div>



  </>
   
  )
}

export default App
