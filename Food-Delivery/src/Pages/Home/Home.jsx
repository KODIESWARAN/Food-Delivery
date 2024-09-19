import React, { useState } from 'react'
import './Home.css'
import Header from '../../component/Header/Header'
import Exploremenu from '../../component/Exploremenu/Exploremenu'
import FoodDisplay from '../../component/FoodDisplay/FoodDisplay'
import AppDownloader from '../../component/AppDownloder/AppDownloader'

const Home = () => {
 const [category, setCategory] = useState("All")

  return (
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}  />
      <AppDownloader/>
      
    </div>
  )
}

export default Home
