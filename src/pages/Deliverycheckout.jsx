import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';

const Deliverycheckout = () => {

    const { user } = useContext(AuthContext);
    const { state: cartState } = useContext(CartContext);

    const { firstName, lastName, flatno, address, city, state, pincode, phoneNumber } = user;
    return (
        <div className="container mt-5">
            <h5 className="text-dark">Select delivery information</h5>

            <div className="row">
                <h6 className="text-secondary my-3">Address</h6>
                <div className="col-lg-8">
                    <div className="card border-0 shadow-sm rounded-2" style={{ backgroundColor: "#f9fbfd" }}>
                        <div className="card-body">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                                <label className="form-check-label" for="flexRadioDefault1" style={{ fontSize: "15px" }}>
                                    <div className="d-flex flex-column">
                                        <strong style={{ opacity: "0.9" }}>{firstName} {lastName}</strong>
                                        <span className="text-secondary mt-2" style={{ fontSize: "13.5px", fontWeight: "450" }}>{flatno},{address},{city},{state}-{pincode}</span>
                                        <span className="text-secondary mt-2" style={{ fontSize: "13.5px", fontWeight: "450" }}>
                                            Mobile Number -{phoneNumber}
                                        </span>

                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    {cartState.cart.map((item, index) => (
                        <div key={index} className="card border-0 shadow-sm rounded-2 mb-3" style={{ backgroundColor: "#f9fbfd" }}>
                            <div className="card-body">
                                <strong>{item.modelName}</strong>
                                <strong>{item.description}</strong>
                                <p className="text-secondary">Expected Delivery: {item.expectedDeliveryDate}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Deliverycheckout