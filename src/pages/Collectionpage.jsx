import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

const Collectionpage = () => {

  const { name } = useParams();
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    setCollection([])
    axios.get(`https://watch-e-commerce-be.onrender.com/products/collection/${name}`).then((res) => {
      setCollection(res.data.Products)
    })
  }, [name])


  return (
    <div className="sec-pad text-center">
      <span className="text-dark stylefont fw-light fs-1">{name}</span>
      {collection.length ? '' :
        <div className="text-center mt-4">
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>}
      <div className="container-fluid">
        <div className='row mt-5'>
          <div className="col-lg-3 col-md-3 col-sm-12">

          </div>
          <div className="col-lg-9">
            <div className="row g-3">
              {collection.length ? collection.map((product) => {
                return (
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="card watchcard border-0 rounded-0 h-100">
                      <div className="card-header p-0 border-bottom-0" style={{ height: "350px" }}>
                        <img src={`https://watch-e-commerce-be.onrender.com/${product.images[0].replace(/\\/g, "/")}`} className="img-fluid object-fit-cover" alt="" style={{ height: "100%" }} />
                      </div>
                      <div className="card-body text-start">
                        <p className="medium mb-1">
                          <NavLink className="nav-link" style={{ color: '#505d6e', fontWeight: '460' }} to={`/productDetails/${product.productId}`}>{product.description}</NavLink>
                        </p>
                        <span className="text-dark fw-semibold">₹{product.price}</span>
                      </div>
                    </div>
                  </div>
                )
              }) : <h3>Loading...</h3>}
            </div>
          </div>


        </div>
      </div>


    </div>
  )
}

export default Collectionpage