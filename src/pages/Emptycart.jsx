import React from 'react'
import shoppingbag from '../assets/shoppingbag.png';
import '../pagecss/Cart.css';
import { useNavigate } from 'react-router-dom';

const Emptycart = () => {
  const navigate = useNavigate();

  const continueshopping=()=>{
     navigate('/');
  }
  return (
    <div className="container">
        <div className="row justify-content-center align-items-center" style={{height:"600px"}}>
              <div className="col-lg-4">
                  <div className="card border-0">
                      <div className="card-body d-flex justify-content-center flex-column align-items-center">
                           <img src={shoppingbag} className="img-fluid" width="150" alt="" />
                           <h5 className="text-dark mt-2">Your Bag is Empty</h5>
                           <p className="text-secondary normal mt-3 mb-0">Start adding products to your bag</p>
                           <div className="mt-4">
                                <button onClick={continueshopping} className="continueshop">Continue Shopping</button>
                           </div>
                           
                      </div>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default Emptycart