import React, { useContext, useEffect, useState } from 'react';
import '../pagecss/ProductDetails.css';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from '../components/Loader';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { state, dispatch } = useContext(CartContext);
  const [collection, setCollection] = useState({});
  const [images, setImages] = useState([]);
  const [counter, setCounter] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const navigate = useNavigate();

  const navigateToCart=()=>{
      navigate('/cart');
  }

  useEffect(() => {
    setCollection({});
    setImages([]);
    axios.get(`https://watch-e-commerce-be.onrender.com/products/${id}`)
      .then((res) => {
        setCollection(res.data.watch);
        setImages(res.data.watch.images);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  const handleIncrement = () => setCounter(prevCounter => prevCounter + 1);
  const handleDecrement = () => setCounter(prevCounter => Math.max(1, prevCounter - 1));

  const handleAddToBag = () => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...collection, quantity: counter, cartId: `${collection.id}-${Date.now()}` } });
    setIsAddedToCart(true);
  };

  return (
    <section className="bg-body" style={{ height: "100vh" }}>
      {images.length ? (
        <div className="container">
          <div className="py-3">
            <span className="text-dark" style={{ fontSize: "17px", fontWeight: "400" }}>{collection.description}</span>
          </div>
          <div className="row bg-white p-2 mb-4">
            <div className="col-lg-7 col-sm-12 col-12 d-flex justify-content-center">
              <OwlCarousel className='owl-theme' loop margin={10} items={1} nav={false} autoplay>
                {images.length ? (
                  images.map((image, index) => (
                    <div key={index} className="item">
                      <img src={`https://watch-e-commerce-be.onrender.com/${image.replace(/\\/g, "/")}`} className="img-fluid" alt={collection.title} style={{ width: "100%", aspectRatio: "3/2", objectFit: "contain" }} />
                    </div>
                  ))
                ) : <h2>Loading...</h2>}
              </OwlCarousel>
            </div>
            <div className="col-lg-5 col-sm-12 col-12">
              <div className="">
                <span className="text-secondary big" style={{ fontWeight: "500" }}>{collection.modelName}</span>
                <h4 className="text-head my-4 lt-1">{collection.description}</h4>

                <ul className="d-flex flex-row align-items-center list-unstyled gap-1 mt-3 star-color border-2 border-bottom pb-3">
                  <li className="nav-item">
                    <FontAwesomeIcon icon={faStar} />
                  </li>
                  <li className="nav-item">
                    <FontAwesomeIcon icon={faStar} />
                  </li>
                  <li className="nav-item">
                    <FontAwesomeIcon icon={faStar} />
                  </li>
                  <li className="nav-item">
                    <FontAwesomeIcon icon={faStar} />
                  </li>
                  <li className="nav-item">
                    <FontAwesomeIcon icon={faStar} />
                  </li>
                  <li>
                    <span className="ms-2" style={{ fontWeight: "500" }}>5</span>
                  </li>
                  <div className="vrline"></div>
                  <li>
                    <span className='text-head medium ms-3 fw-semibold'>1 Review</span>
                  </li>
                </ul>

                <div className="card border-0 rounded-4 my-3">
                  <div className="card-header bg-white border-bottom-0">
                    <div className="d-flex flex-row align-items-center gap-3">
                      <span className="text-dark opacity-50" style={{ fontWeight: "500", marginTop: "8px" }}>
                        MRP
                      </span>
                      <span className="text-head fs-4" style={{ fontWeight: "550" }}>
                        ₹{collection.price}
                      </span>
                    </div>
                  </div>
                  <div className="card-body bg-semilight shadow-sm">
                    <div className="d-flex flex-row align-items-center">
                      <div className="rounded-3 counterbox overflow-hidden">
                        <button disabled={counter <= 1} className="counterbtn border-0 minusbtn" style={{ fontSize: "22px" }} onClick={handleDecrement}>
                          <i className="bi bi-dash normal"></i>
                        </button>
                        <span className='px-3 bg-white'>{counter}</span>
                        <button className="counterbtn bg-white border-0" style={{ fontSize: "22px" }} onClick={handleIncrement}>
                          <i className="bi bi-plus normal"></i>
                        </button>
                      </div>
                    </div>

                    <div className="mt-4">
                      {isAddedToCart ? (
                        <button  className="gotobag" onClick={navigateToCart}>Go to Bag</button>
                      ) : (
                        <button className="addtobag" onClick={handleAddToBag}>Add to Bag</button>
                      )}
                      {!isAddedToCart && <button className="buynow">Buy Now</button>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : <Loader />}
    </section>
  );
};

export default ProductDetails;
