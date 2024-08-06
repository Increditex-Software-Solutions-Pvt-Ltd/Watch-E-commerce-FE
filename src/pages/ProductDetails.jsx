import React, { useContext, useEffect, useState } from 'react';
import '../pagecss/ProductDetails.css';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from '../components/Loader';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import { ADD_TO_CART } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { state, dispatch } = useContext(CartContext);
  const { user } = useContext(AuthContext);

  const [collection, setCollection] = useState({});
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const fetchProductDetails = async () => {
    try {
      const res = await axios.get(`https://watch-e-commerce-be-e9sn.onrender.com/products/${id}`);
      setCollection(res.data.watch);
      setImages(res.data.watch.images);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  const isItemInCart = (productId) => {
    return state.cart.some(item => item.productId === productId);
  };

  const handleAddToBag = () => {
    const newCartItem = {
      ...collection,
      cartId: `${collection.productId}`
    };

    dispatch({
      type: ADD_TO_CART,
      payload: newCartItem,
    });
  };

  return (
    <section className="bg-body" style={{ height: "100vh" }}>
      {isLoading ? <Loader /> : (
        <div className="container">
          <div className="py-3">
            <span className="text-dark" style={{ fontSize: "17px", fontWeight: "400" }}>{collection.description}</span>
          </div>
          <div className="row bg-white p-2 mb-4">
            <div className="col-lg-7 col-sm-12 col-12 d-flex justify-content-center">
              <OwlCarousel className='owl-theme' loop margin={10} items={1} nav={false} autoplay>
                {images.map((image, index) => (
                  <div key={index} className="item">
                    <img src={`https://watch-e-commerce-be-e9sn.onrender.com/${image.replace(/\\/g, "/")}`} className="img-fluid" alt={collection.title} style={{ width: "100%", aspectRatio: "3/2", objectFit: "contain" }} />
                  </div>
                ))}
              </OwlCarousel>
            </div>
            <div className="col-lg-5 col-sm-12 col-12">
              <div className="">
                <span className="text-secondary big" style={{ fontWeight: "500" }}>{collection.modelName}</span>
                <h4 className="my-4 lt-1" style={{ fontSize: '14px' }}>{collection.description}</h4>

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
                    <div className="mt-1">
                      <button className={!isItemInCart(collection.productId) ? 'addtobag' : 'gotobag'} onClick={() => {
                        if (!isItemInCart(collection.productId)) {
                          handleAddToBag();
                        } else {
                          navigate('/cart');
                        }
                      }}>
                        {isItemInCart(collection.productId) ? 'Go to Bag' : 'Add to Bag'}
                      </button>

                      {!isItemInCart(collection.productId) && <button className="buynow">Buy Now</button>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductDetails;
