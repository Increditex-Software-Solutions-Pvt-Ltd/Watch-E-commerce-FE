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
import Login from './pages/Login'
import Signup from './pages/Signup'
import ProtectedRoute from './ProtectedRoute'
import PublicRoute from './PublicRoute'
import Checkout from './pages/Checkout'


const AllRoute = () => {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/collection/:name' element={<Collectionpage />} />
      <Route path='/productDetails/:id' element={<ProductDetails />} />
      <Route path='/accessoryDetail/:id' element={<AccessoryDetail />} />
      <Route path='/accessories' element={<Accessories />} />
      <Route path='/cart' element={<Shoppingcart />} />
      <Route path='/emptycart' element={<Emptycart />} />
      <Route path='/accessories/:name' element={<AccessoriesCollectionPage />} />
      <Route path='/login' element={<PublicRoute><Login/></PublicRoute>} />
      <Route path='/signup' element={<PublicRoute><Signup /></PublicRoute>} />
      <Route path='/checkout' element={<ProtectedRoute><Checkout/></ProtectedRoute>}/>

    </Routes>
  )
}

export default AllRoute