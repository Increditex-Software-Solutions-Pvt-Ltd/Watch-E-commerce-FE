import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Accessories from './pages/Accessories'
import Collectionpage from './pages/Collectionpage'
import Emptycart from './pages/Emptycart'
import ProductDetails from './pages/ProductDetails'
import AccessoryDetail from './pages/AccessoryDetail'
import AccessoriesCollectionPage from './pages/AccessoriesCollectionPage'
import Shoppingcart from './pages/Shoppingcart'



const AllRoute = () => {
 
  return (
    <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/collection/:name' element={<Collectionpage/>}/>
         <Route path='/productDetails/:id' element={<ProductDetails/>}/>
         <Route path='/accessoryDetail/:id' element={<AccessoryDetail/>}/>
         <Route path='/accessories' element={<Accessories/>}/>
         <Route path='/cart' element={<Shoppingcart/>}/>
         <Route path='/emptycart' element={<Emptycart/>}/>
         <Route path='/accessories/:name' element={<AccessoriesCollectionPage/>}/>

    </Routes>
  )
}

export default AllRoute