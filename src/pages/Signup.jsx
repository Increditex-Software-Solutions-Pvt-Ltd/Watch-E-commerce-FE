import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "", 
  
  });

  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    setError({
      ...error,
      [name]: ''
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    let isValid = true;
    const newErrors = { ...error };

    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
      isValid = false;
    }
    if (!formData.lastName) {
      newErrors.lastName = "Last name is required";
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    if (!isValid) {
      setError(newErrors);
    } else {
      try {
        const response = await axios.post('https://watch-e-commerce-be-e9sn.onrender.com/users/register', formData);
        console.log("Signup successful:", response.data);
        navigate('/login');
      } catch (error) {
        if (error.response) {
        
          console.error("Signup error:", error.response.data);
          alert(`Signup failed: ${error.response.data.message}`);
        } else if (error.request) {
         
          console.error("Signup error: No response from server", error.request);
          alert("Signup failed: No response from server");
        } else {
          
          console.error("Signup error:", error.message);
          alert(`Signup failed: ${error.message}`);
        }
      }
    }
  };

  return (
    <div className="container">
      <h3 className="text-dark opacity-75 pb-2 text-center my-5">MY OMEGA</h3>
      <div className="row justify-content-center g-4">
        <div className="col-lg-6">
          <span className='my-2 text-secondary'>CREATE YOUR ACCOUNT NOW</span>

          <form onSubmit={handleOnSubmit}>
            <div className="mt-4">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-floating mb-4">
                    <input type="text" className={`${error.firstName ? 'border-danger' : ''} form-control rounded-0 border-2 shadow-none`} placeholder="First name" name="firstName" value={formData.firstName} onChange={handleOnChange} />
                    <label htmlFor="floatingInput">First name *</label>
                    {error.firstName && <div className="text-danger mt-2">{error.firstName}</div>}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-floating mb-4">
                    <input type="text" className={`${error.lastName ? 'border-danger' : ''} form-control rounded-0 border-2 shadow-none`} placeholder="Last name" name="lastName" value={formData.lastName} onChange={handleOnChange} />
                    <label htmlFor="floatingInput">Last name *</label>
                    {error.lastName && <div className="text-danger mt-2">{error.lastName}</div>}
                  </div>
                </div>
              </div>

              <div className="form-floating mb-4">
                <input type="email" className={`${error.email ? 'border-danger' : ''} form-control rounded-0 border-2 shadow-none`} placeholder="Email" name="email" value={formData.email} onChange={handleOnChange} />
                <label htmlFor="floatingInput">Email *</label>
                {error.email && <div className="text-danger mt-2">{error.email}</div>}
              </div>
              <div className="form-floating mb-4">
                <input type="password" className={`${error.password ? 'border-danger' : ''} form-control rounded-0 border-2 shadow-none`} placeholder="Password" name="password" value={formData.password} onChange={handleOnChange} />
                <label htmlFor="floatingPassword">Password *</label>
                {error.password && <div className="text-danger mt-2">{error.password}</div>}
              </div>

              <div className="form-floating mb-4">
                <input type="text" className="form-control rounded-0 border-2 shadow-none" placeholder="Phone Number" name="phoneNumber" value={formData.phoneNumber} onChange={handleOnChange} />
                <label htmlFor="floatingInput">Phone Number (optional)</label>
              </div>
            
            </div>

            <a href="" className="text-secondary normal nav-link link mt-3" style={{ fontWeight: "490", fontSize: "16px" }}>Forgot your password?</a>
            <div className="mt-4">
              <button className="loginbtn" type="submit">SIGNUP</button>
            </div>
          </form>
        </div>
        <div className="col-lg-5">
          <div className="">
            <span className='my-2 text-secondary'>ALREADY HAVE AN ACCOUNT?</span>
            <p className="mt-4 text-secondary" style={{ fontSize: "15px" }}>
              LOGIN TO MYOMEGA NOW & START SHOPPING WITH AMAZING DISCOUNTS
            </p>
            <div className="mt-4">
              <button className="signupbtn" onClick={() => navigate('/login')}>LOGIN</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
