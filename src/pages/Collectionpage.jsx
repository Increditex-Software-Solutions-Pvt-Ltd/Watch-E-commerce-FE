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

  console.log(collection);
  return (
    <div className="sec-pad text-center">
      <span className="text-dark stylefont fw-light fs-1">{name}</span>
      {collection.length ? '' :
        <Loader />}
      <div className="container-fluid">
        <div className='row g-4 mt-5'>
          <div className="col-lg-3 col-md-3 col-sm-12">
            {/* <div className="card rounded-3 filtercard position-sticky" style={{top:"50px"}}>
              <div className="card-header" style={{ backgroundColor: '#dfeaf6' }}>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <FontAwesomeIcon icon={faFilter} />
                    <span className="fs-5 ms-3">Filters</span>
                  </div>
                  <div>
                    <a href="" className="text-secondary medium">Clear all</a>
                  </div>
                </div>
              </div>
              <div className="card-body" style={{maxHeight:"600px",overflowY:"scroll"}}>
                <h6 className="text-start">Price</h6>

                <div className="position-relative">
                  <input type="range" className="form-range mb-4" min="0" max="5" id="customRange2" />
                  <span className="position-absolute start-0 bottom-0">MIN</span>
                  <span className="position-absolute end-0 bottom-0">MAX</span>
                </div>

                <div className="border-bottom border-2 mt-4"></div>

                <div>
                  <h6 className="text-start pt-3">Strap Material</h6>
                  <div className="form-check text-start mt-3">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">
                      Steel
                    </label>
                  </div>
                  <div className="form-check text-start mt-3">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">
                      Leather
                    </label>
                  </div>
                  <div className="form-check text-start mt-3">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">
                      Metal
                    </label>
                  </div>
                </div>
                <div className="border-bottom border-2 mt-4"></div>

                <div className="mt-3">
                  <h6 className="text-start pt-3">Strap Color</h6>
                  <div className="form-check text-start mt-3">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">
                      Black
                    </label>
                  </div>
                </div>
                <div className="border-bottom border-2 mt-4"></div>
                <div className="mt-3">
                  <h6 className="text-start pt-3">Dial Color</h6>
                  <div className="form-check text-start mt-3">
                    <input className="form-check-input" type="checkbox" value="White" id="flexCheckWhite" />
                    <label className="form-check-label" for="flexCheckWhite">
                      White
                    </label>
                  </div>
                  <div className="form-check text-start mt-3">
                    <input className="form-check-input" type="checkbox" value="Black" id="flexCheckBlack" />
                    <label className="form-check-label" for="flexCheckBlack">
                      Black
                    </label>
                  </div>
                  <div className="form-check text-start mt-3">
                    <input className="form-check-input" type="checkbox" value="Gold" id="flexCheckGold" />
                    <label className="form-check-label" for="flexCheckGold">
                      Gold
                    </label>
                  </div>
                  <div className="form-check text-start mt-3">
                    <input className="form-check-input" type="checkbox" value="Blue" id="flexCheckBlue" />
                    <label className="form-check-label" for="flexCheckBlue">
                      Blue
                    </label>
                  </div>
                  <div className="form-check text-start mt-3">
                    <input className="form-check-input" type="checkbox" value="Gray" id="flexCheckGray" />
                    <label className="form-check-label" for="flexCheckGray">
                      Gray
                    </label>
                  </div>
                  <div className="form-check text-start mt-3">
                    <input className="form-check-input" type="checkbox" value="Rose Gold" id="flexCheckRoseGold" />
                    <label className="form-check-label" for="flexCheckRoseGold">
                      Rose Gold
                    </label>
                  </div>
                  <div className="form-check text-start mt-3">
                    <input className="form-check-input" type="checkbox" value="Green" id="flexCheckGreen" />
                    <label className="form-check-label" for="flexCheckGreen">
                      Green
                    </label>
                  </div>
                  <div className="form-check text-start mt-3">
                    <input className="form-check-input" type="checkbox" value="Yellow Gold" id="flexCheckYellowGold" />
                    <label className="form-check-label" for="flexCheckYellowGold">
                      Yellow Gold
                    </label>
                  </div>
                </div>

              </div>
            </div> */}
          </div>
          <div className="col-lg-9">
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