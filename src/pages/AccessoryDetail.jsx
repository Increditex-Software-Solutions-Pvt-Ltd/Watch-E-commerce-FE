import React, { useContext, useEffect, useState } from 'react';
import '../pagecss/ProductDetails.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from '../components/Loader';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../context/CartContext';


const AccessoryDetail = () => {
    const { id } = useParams();
  const [collection, setCollection] = useState({});
  const [images, setImages] = useState([])
  const {cart,addToCart} =  useContext(CartContext);
  const navigate = useNavigate();


  useEffect(() => {
    setCollection({})
    setImages([])
    axios.get(`https://watch-e-commerce-be-e9sn.onrender.com/accessories/${id}`)
      .then((res) => {
        setCollection(res.data.product);
        setImages(res.data.product.images)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  const isItemInCart = (productId) => {
    return Array.isArray(cart) && cart.some(item => item.productId === productId);
  };

  const handleAddToBag = async() => {
    console.log('Adding to bag:', collection);
    const newCartItem = { ...collection, quantity: 1, _id: `${collection.productId}` }
    addToCart(newCartItem);

    // try {
    //    await axios.post(`https://watch-e-commerce-be-e9sn.onrender.com/users/${user.userId}/cart`,newCartItem);
    
    // } catch (error) {
    //    console.error("error adding a cart",error);
    // }
  };
  return (
    <section className="bg-body pb-4">
      {images.length ? (<div className="container">
        <div className="py-3">
          <span className="text-dark" style={{ fontSize: "17px", fontWeight: "400" }}>{collection.modelName}</span>

        </div>
        <div className="row bg-white p-2">
          <div className="col-lg-7 col-sm-12 col-12 d-flex justify-content-center">
            <OwlCarousel className='owl-theme' loop margin={10} items={1} nav={false} autoplay>
              {images.length ? (
                images.map((image, index) => (
                  <div key={index} className="item">
                    <img src={`https://watch-e-commerce-be-e9sn.onrender.com/${image.replace(/\\/g, "/")}`} className="img-fluid" alt={collection.title} style={{ width: "100%", aspectRatio: "3/2", objectFit: "contain" }} />
                  </div>
                ))
              ) : <h2>Loading...</h2>}
            </OwlCarousel>
          </div>
          <div className="col-lg-5 col-sm-12 col-12">
            <div className="">
              <span className="text-secondary big" style={{ fontWeight: "500" }}>{collection.modelName}</span>
              <h4 className="my-4 lt-1" style={{fontSize:'15px'}}>{collection.description}</h4>

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

              <div className="card border-0 rounded-4">
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
                     <button className={`${!isItemInCart(collection.productId) ? 'addtobag':'gotobag'}`} onClick={()=>{
                       if(!isItemInCart(collection.productId)){
                          handleAddToBag();
                       }
                       else{
                         navigate('/cart');
                       }
                     }}>
                        {!isItemInCart(collection.productId)? 'Add to Bag':'Go to Bag'}
                     </button>
                     {!isItemInCart(collection.productId) && <button className="buynow">Buy Now</button>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>) : <Loader />}

    </section>
  );
};

export default AccessoryDetail;
