import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Accessories from './pages/Accessories'
import Collectionpage from './pages/Collectionpage'



const AllRoute = () => {
  return (
    <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/collection/:name' element={<Collectionpage/>}/>
         <Route path='/accessories' element={<Accessories/>}/>
    </Routes>
  )
}

export default AllRoute