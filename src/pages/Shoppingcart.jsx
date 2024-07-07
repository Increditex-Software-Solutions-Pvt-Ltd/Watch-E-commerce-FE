import React, { useContext, useEffect,useState } from 'react';
import { CartContext, DECREMENT_QUANTITY, INCREMENT_QUANTITY, REMOVE_FROM_CART } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import ConfirmRemove from '../components/ConfirmRemove';

const Shoppingcart = () => {
  const { state: cartState, dispatch } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const total = cartState.total;

  
  const itemCount= cartState.cart.reduce((total,item)=>total + item.quantity,0);

  const handleOpen = (product) => {
    setCurrentProduct(product)
    setOpen(true);
  }

  const handleClose = () => {
    setCurrentProduct(null);
    setOpen(false);
  }

  const handleRemoveFromCart = (cartId) => {
    dispatch({ type: REMOVE_FROM_CART, payload: cartId });
    handleClose();
  }

  const navigate = useNavigate();


  useEffect(() => {
    if (cartState.cart.length === 0) {
      navigate('/emptycart')
    }
  }, [cartState.cart.length, navigate]);



  const handleIncrementQuantity = (cartId) => {
    dispatch({ type: INCREMENT_QUANTITY, payload: cartId });
  }

  const handleDecrementQuantity = (cartId) => {
    dispatch({ type: DECREMENT_QUANTITY, payload: cartId });
  }
  return (
    <div className="container">
      <div className="row">
        <h4 className="my-4">Your Shopping Cart</h4>
        <div className="col-lg-8 col-sm-12">
          <div className="card rounded-3">
            <div className="card-body">
              <div className="">
                <div className="cart-items">
                  {cartState.cart.map((item) => (
                    <div key={item.id} className="d-flex flex-row align-items-center border-bottom gap-5  py-3 position-relative">
                      <div className="border d-flex justify-content-center rounded-4 overflow-hidden" style={{ minWidth: "150px" }}>
                        <img src={`https://watch-e-commerce-be.onrender.com/${item.images[0].replace(/\\/g, "/")}`} className="" height="150px" alt={item.title} />
                      </div>
                      <div className="item-details">
                        <h4 className="fs-6">{item.modelName}</h4>
                        <p style={{ fontSize: '13px' }}>{item.description}</p>
                        <p className="text-dark fw-semibold">₹{item.price}</p>

                        <div className="d-flex flex-row align-items-center">
                          <div className="rounded-3 counterbox overflow-hidden">
                            <button className="counterbtn border-0 minusbtn" style={{ fontSize: "17px" }} onClick={() => item.quantity > 1 ?  handleDecrementQuantity(item.cartId):handleOpen(item)}>
                              <i className="bi bi-dash normal"></i>
                            </button>
                            <span className='px-3 bg-white' style={{ fontSize: '16px' }}>{item.quantity}</span>
                            <button className="counterbtn bg-white border-0" style={{ fontSize: "17px" }} onClick={() => handleIncrementQuantity(item.cartId)}>
                              <i className="bi bi-plus normal"></i>
                            </button>
                            <button className="btn border-danger btn-sm position-absolute" style={{ top: "10px", right: "10px" }} onClick={() => handleOpen(item)}>
                              <i className="bi bi-trash text-danger"></i>
                            </button>
                          </div>
                        </div>

                      </div>

                    </div>

                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="col-lg-4 col-sm-12">
            <div className="card rounded-2 position-sticky" style={{top:"130px"}}>
                <div className="card-header bg-white p-3">
                    <h6 className="card-title">Order summary ({itemCount} item)</h6>
                </div>
                <div className="card-body">
                   <div className="d-flex justify-content-between" style={{fontSize:"14px"}}>
                      <span className='text-secondary' style={{fontWeight:"500"}}>Order value</span>
                      <span className='text-secondary' style={{fontWeight:"500"}}>₹ {total}</span>
                   </div>
                   <div className="d-flex justify-content-between mt-2" style={{fontSize:"14px"}}>
                      <span className='text-secondary' style={{fontWeight:"500"}}>Shipping</span>
                      <span className='text-secondary' style={{fontWeight:"500"}}>₹ Free</span>
                   </div>
                </div>
                <div className="card-footer bg-white p-3">
                    <div className="d-flex justify-content-between">
                          <h6 className="text-dark" style={{fontWeight:"600"}}>You Pay</h6>
                          <h6 className="text-dark">₹ {total}</h6>
                    </div>
                    <div className="mt-2">
                       <button className="gotobag fs-6 rounded-1" onClick={()=>navigate('/checkout')}>Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <ConfirmRemove open={open} handleClose={handleClose} handleConfirmRemove={()=>handleRemoveFromCart(currentProduct.cartId)}/>
    </div>
  );
};

export default Shoppingcart;
