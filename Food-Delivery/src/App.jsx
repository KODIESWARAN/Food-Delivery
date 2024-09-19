import React, { useState } from 'react'
import Navbar from './component/NavBar/Navbar'
import { Routes , Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './component/Footer/Footer'
import Loginpopup from './component/Loginpopup/Loginpopup'

const App = () => {

  const [showLogin , setShowLogin] = useState(false)
  return ( 
    <>
    {showLogin? <Loginpopup setShowLogin={setShowLogin}/> : <> </>}
     <div className='app'> 
   <Navbar setShowLogin={setShowLogin}/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/cart'  element = {<Cart/>} />
    <Route path='/order' element={<PlaceOrder/>}  />
   </Routes>
   <Footer/>
   
      
    </div>
    
    </>
    
  )
}

export default App
