import React, { useContext, useEffect, useState } from 'react'
import '../uicss/Loginsidebar.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const Login = () => {

    const navigate = useNavigate();
    const {login,isAuthenticated} = useContext(AuthContext);

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState({
        email: "",
        password: ""
    })

    useEffect(()=>{
         if(isAuthenticated){
             navigate('/');
         }
    },[isAuthenticated,navigate])
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
    }

    const handleOnSubmit = async(e) => {
        e.preventDefault();

        let isValid = true;
        const newErrors = { ...error };

        if (!formData.email) {
            newErrors.email = "please provide email"
            isValid = false;
        }
        if (!formData.password) {
            newErrors.password = "please provide password"
            isValid = false;
        }

        if (!isValid) {
            setError(newErrors);
        }
        else {
            try {
                const response = await axios.post('https://watch-e-commerce-be-e9sn.onrender.com/users/login',formData);
                
                const {token,userId} = response.data;
                login(token,userId);
                console.log('LOGIN RESPONSE',token,userId);
                navigate('/');
            } catch (error) {
                console.log('Error logging in',error.response.data)
            }
        }
    }

  

    return (
        <div className="container">
            <h3 className="text-dark opacity-75 pb-2 text-center my-5">MY OMEGA</h3>
            <div className="row justify-content-center g-4">
                <div className="col-lg-5 ">
                    <span className='my-2 text-secondary'>I HAVE AN ACCOUNT</span>

                    <form action="" onSubmit={handleOnSubmit}>
                        <div className="mt-4">
                            <div class="form-floating mb-4">
                                <input type="email" className={`${error.email ? 'border-danger' : ''} form-control rounded-0 border-2 shadow-none`} placeholder="name@example.com" name="email" value={formData.email} onChange={handleOnChange} />
                                <label for="floatingInput">Email *</label>
                                {error.email && <div className="text-danger mt-2">{error.email}</div>}
                            </div>
                            <div className="form-floating">
                                <input type="password" className={`${error.password ? 'border-danger' : ''} form-control rounded-0 border-2 shadow-none`} placeholder="Password" name="password" value={formData.password} onChange={handleOnChange} />
                                <label for="floatingPassword">Password *</label>
                                {error.password && <div className="text-danger mt-2">{error.password}</div>}

                            </div>
                        </div>
                        <a href="" className="text-secondary normal nav-link link mt-3" style={{ fontWeight: "490",fontSize:"16px" }}>Forgot your password ?</a>
                        <div className="mt-4">
                            <button className="loginbtn">LOGIN
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-lg-5">
                    <div className="">

                        <span className='my-2 text-secondary'>I DON'T HAVE AN ACCOUNT?</span>
                        <p className="mt-4 text-secondary" style={{ fontSize: "15px" }}>
                            Create a My OMEGA account to benefit from our exclusive services and keep up to date with our latest publications.
                        </p>
                        <div className="mt-4">
                            <button className="signupbtn" onClick={()=>navigate('/signup')}>SIGN UP
                            </button>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Login