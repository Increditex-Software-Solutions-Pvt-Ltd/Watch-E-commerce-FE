import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Loader from '../components/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const Collectionpage = () => {

  const { name } = useParams();
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    setCollection([])
    axios.get(`https://watch-e-commerce-be-e9sn.onrender.com/products/collection/${name}`).then((res) => {
      setCollection(res.data.Products)

    })
  }, [name])


  return (
    <div className="sec-pad text-center">
      <span className="text-dark stylefont fw-light fs-1">{name}</span>
      {collection.length ? '' :
        <Loader />}
      <div className="container-fluid">
        <div className='row g-4 mt-5 justify-content-center'>
        
          <div className="col-lg-10 ">
            <div className="row g-4 mb-4 overflow-hidden">
              {collection.length ? collection.map((product) => {
                return (
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={product.name}>
                    <div className="card watchcard border-0 rounded-0 h-100">
                      <div className="card-header p-0 border-bottom-0" style={{ height: "280px" }}>
                        <img src={`https://watch-e-commerce-be-e9sn.onrender.com/${product.images[0].replace(/\\/g, "/")}`} className="img-fluid object-fit-cover" alt="" style={{ height: "100%" }} />
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
              }) : ''}
            </div>
          </div>


        </div>
      </div>


    </div>
  )
}

export default Collectionpage