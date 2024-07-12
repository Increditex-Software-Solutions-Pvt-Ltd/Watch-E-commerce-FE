import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
 
  const {isAuthenticated,user} = useContext(AuthContext);
  const navigate = useNavigate();

  const[formData,setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    flatno: '',
    address: '',
    pincode: '',
    city: '',
    state: ''
  });

  useEffect(()=>{
     if(isAuthenticated && user){
        setFormData({
           firstname: user.firstName || '',
           lastname : user.lastName || '',
           email : user.emailId || '',
           mobile : user.phoneNumber || '',
           flatno : user.flatno || '',
           address : user.address || '',
           pincode : user.pincode || '',
           city : user.city || '',
           state : user.state || '',
        })
     }

     if(user.flatno && user.address && user.pincode && user.city && user.state){
        navigate('/select-delivery');
     }
  },[isAuthenticated,user,navigate]);

  const handleChange=(e)=>{
     const {name,value} = e.target;

     setFormData({
        ...formData,
        [name]:value
     });
  }

  const handleOnSubmit=async(e)=>{
      e.preventDefault();
      try {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const response = await axios.put(`https://watch-e-commerce-be-e9sn.onrender.com/users/${userId}`,formData,{
          headers:{Authorization:`Bearer ${token}`}
        });

        console.log("address updated successfully",response.data);
        navigate('/select-delivery');
      } catch (error) {
         console.error('Error updating address:', error);
      }
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8 col-12 border p-4 rounded">
          <h6 className="py-2">Checkout</h6>
          <p className="py-2">Please enter your delivery address, so we can deliver your order.</p>
          <h6 className="text-gray mt-4 mb-3">Contact details*</h6>
          <form onSubmit={handleOnSubmit}>
            <div className="row mt-2">
            
              <div className="col-md-6 mb-3">
                <div className="form-floating">
                  <input type="text" className="form-control" id="firstname" name="firstname" onChange={handleChange} value={formData.firstname} placeholder="First Name" />
                  <label htmlFor="firstname">First Name</label>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="form-floating">
                  <input type="text" className="form-control" id="lastname" name="lastname" onChange={handleChange} value={formData.lastname} placeholder="Last Name" />
                  <label htmlFor="lastname">Last Name</label>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="form-floating">
                  <input type="email" className="form-control" id="email" name="email" onChange={handleChange} value={formData.email} placeholder="Email" />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="form-floating">
                  <input type="text" className="form-control" id="mobile" name="mobile" onChange={handleChange} value={formData.mobile} placeholder="Mobile No" />
                  <label htmlFor="mobile">Mobile No</label>
                </div>
              </div>
            </div>
            <h6 className="text-gray mt-4 mb-3">Address details*</h6>
            <div className="row mt-2">
              <div className="col-12 mb-3">
                <div className="form-floating">
                  <input type="text" className="form-control" id="flatnumber" name="flatno" onChange={handleChange} value={formData.flatno} placeholder="Flat, House No" />
                  <label htmlFor="flatnumber">Flat, House No</label>
                </div>
              </div>
              <div className="col-12 mb-3">
                <div className="form-floating">
                  <input type="text" className="form-control" id="address" name="address" onChange={handleChange} value={formData.address} placeholder="Address" />
                  <label htmlFor="address">Address</label>
                </div>
              </div>
             
              <div className="col-md-6 mb-3">
                <div className="form-floating">
                  <input type="text" className="form-control" id="pincode" name="pincode" onChange={handleChange} value={formData.pincode} placeholder="Pincode" />
                  <label htmlFor="pincode">Pincode</label>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="form-floating">
                  <input type="text" className="form-control" id="city" onChange={handleChange} value={formData.city} name="city" placeholder="City" />
                  <label htmlFor="city">City</label>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="form-floating">
                  <input type="text" className="form-control" id="state" name="state" onChange={handleChange} value={formData.state} placeholder="State" />
                  <label htmlFor="state">State</label>
                </div>
              </div>
              <div className="col-12 mt-3">
                <button type="submit" className="btn btn-danger w-100 py-3" style={{opacity:"0.9"}}>Add Address</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Checkout