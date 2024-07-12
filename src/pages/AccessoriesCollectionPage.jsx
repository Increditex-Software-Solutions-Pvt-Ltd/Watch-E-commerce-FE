import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Loader from '../components/Loader';

const AccessoriesCollectionPage = () => {

  const { name } = useParams();
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    setCollection([])
    axios.get(`https://watch-e-commerce-be-e9sn.onrender.com/accessories/category/${name}`).then((res) => {
      setCollection(res.data.Products)
    })
  }, [name])


  return (
    <div className="sec-pad text-center">
      <span className="text-dark stylefont fw-light fs-1">{name}</span>
      {collection.length ? '' :
       <Loader/>}
      <div className="container-fluid">
        <div className='row mt-5'>
          <div className="col-lg-3 col-md-3 col-sm-12">

          </div>
          <div className="col-lg-9">
            <div className="row g-4">
              {collection.length ? collection.map((product) => {
                return (
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="card watchcard border-0 rounded-0 h-100">
                      <div className="card-header p-0 border-bottom-0" >
                        <img src={`https://watch-e-commerce-be-e9sn.onrender.com/${product.images[0].replace(/\\/g, "/")}`} className="img-fluid object-fit-cover" alt="" style={{ width: "100%", aspectRatio: "3/2", objectFit: "contain" }}  />
                      </div>
                      <div className="card-body text-start">
                        <p className="medium mb-1">
                          <NavLink className="nav-link" style={{ color: '#505d6e', fontWeight: '460' }} to={`/accessoryDetail/${product.productId}`}>{product.modelName}</NavLink>
                        </p>
                        <span className="text-dark fw-semibold">₹{product.price}</span>
                      </div>
                    </div>
                  </div>
                )
              }) : ''}
            </div>
          </div>


        </div>
      </div>


    </div>
  )
}

export default AccessoriesCollectionPage