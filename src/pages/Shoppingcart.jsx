import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Shoppingcart = () => {
  const { state, dispatch } = useContext(CartContext);
  const { cart } = state;

  const handleRemoveFromCart = (cartId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: cartId });
  };

  return (
    <div className="container">
      <div className="row">
        <h4 className="my-4">Your Shopping Cart</h4>
        <div className="col-lg-8">
          <div className="card rounded-3">
            <div className="card-body">
              <div className="">
                <div className="cart-items">
                  {cart.map((item) => (
                    <div key={item.id} className="d-flex flex-row align-items-center gap-5">
                      <div className="">
                        <img src={`https://watch-e-commerce-be.onrender.com/${item.images[0].replace(/\\/g, "/")}`} height="250px" alt={item.title} />
                      </div>
                      <div className="item-details">
                        <h4>{item.modelName}</h4>
                        <p>{item.description}</p>
                        <p className="text-dark fw-semibold">₹{item.price}</p>
                        <div className="d-flex flex-row align-items-center">
                      <div className="rounded-3 counterbox overflow-hidden">
                        <button className="counterbtn border-0 minusbtn" style={{ fontSize: "22px" }} >
                          <i className="bi bi-dash normal"></i>
                        </button>
                        <span className='px-3 bg-white'>{item.quantity}</span>
                        <button className="counterbtn bg-white border-0" style={{ fontSize: "22px" }} >
                          <i className="bi bi-plus normal"></i>
                        </button>
                      </div>
                    </div>
                        <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Shoppingcart;
