import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Accessories from './pages/Accessories'
import Collectionpage from './pages/Collectionpage'
import Emptycart from './pages/Emptycart'
import ProductDetails from './pages/ProductDetails'



const AllRoute = () => {
  return (
    <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/collection/:name' element={<Collectionpage/>}/>
         <Route path='/productDetails/:id' element={<ProductDetails/>}/>
         <Route path='/accessories' element={<Accessories/>}/>
         <Route path='/cart' element={<Emptycart/>}/>

    </Routes>
  )
}

export default AllRoute