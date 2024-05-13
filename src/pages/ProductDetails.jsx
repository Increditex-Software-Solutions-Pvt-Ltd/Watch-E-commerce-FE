import React, { useEffect, useState } from 'react'
import '../pagecss/ProductDetails.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {

  const {id} = useParams();
  const [collection, setCollection] = useState([]);


  useEffect(() => {
    axios.get(`https://watch-e-commerce-be.onrender.com/products/${id}`).then((res) => {
      setCollection(res.data.watch);
    })
  }, [id])

  const watchName = collection.description;
  const watchImage = collection.images;

  return (
    <section className="bg-body" style={{height:"100vh"}}>
      <div className="container-fluid">
          {watchName}
          <img src="" alt="" />          
      </div>
    </section>

  )
}

export default ProductDetails