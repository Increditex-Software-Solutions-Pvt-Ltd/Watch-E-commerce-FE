import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const Accessories = () => {

  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get(`https://watch-e-commerce-be.onrender.com/accessories/getList`).then((res) => {
      setList(res.data);
    })
  }, [])

  const navigate = useNavigate();

  return (
    <div className="sec-pad text-center">
      <div className="container">
        <span className="text-dark fw-light fs-1">ACCESSORIES</span>
        <p className="text-dark normal my-4">Welcome to the world of OMEGA accessories, where every detail matters. Our collection of accessories encompasses a variety of products, including NATO straps, bracelets, cufflinks, sunglasses, belts and more. Each accessory is meticulously crafted with the finest materials and attention to detail, delivering a perfect blend of form and function. From sleek and stylish bracelets to durable and comfortable NATO straps for your favourite watch, our range of products offers something for everyone.</p>
      </div>

      <div className="container">
      <div className="row mt-5 g-5">
              {list.map((accessory)=>{
                return(
                  <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="card watchcard  rounded-0 h-100" onClick={()=>navigate(`/accessories/${accessory.collectionName}`)}>
                    <div className="card-header  border-bottom-0" style={{ height: "280px" }}>
                      <img src={`https://watch-e-commerce-be.onrender.com/${accessory.logo.replace(/\\/g, "/")}`} className="img-fluid" alt="" style={{ height: "100%" }} />
                    </div>
                    <div className="card-body text-center">
                         <h6 className="text-secondary mt-2">{accessory.name}</h6>
                         <span className="text-secondary">{accessory["Total Products"]} Products</span>
                    </div>
                  </div>
                </div>
                )
              })}
                
                 
            </div>
      </div>


    </div>
  )
}

export default Accessories