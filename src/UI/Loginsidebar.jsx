import React, { useState } from 'react'
import '../uicss/Loginsidebar.css';

const Loginsidebar = ({ targetId }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState({
    email: "",
    password: ""
  })

  const handleOnChange=(e)=>{
      const {name,value} = e.target;
      setFormData({
        ...formData,
        [name]:value
      });

      setError({
        ...error,
        [name]:''
      });
  }

  const handleOnSubmit=(e)=>{
     e.preventDefault();

     let isValid = true;
     const newErrors = {...error};

     if(!formData.email){
         newErrors.email = "This field is required"
         isValid = false;
     }
     if(!formData.password){
       newErrors.password = "This field is required"
       isValid = false;
     }

     if(!isValid){
        setError(newErrors);
     }
     else{
      console.log("form submitted");
     }
  }
  return (
    <>
      <div className="offcanvas offcanvas-end " id={targetId} style={{ position: 'fixed', top: '0', width: '510px', marginTop: '103.9px' }}>
        <div className="offcanvas-body">
          <div className="p-3">
            <h3 className="text-dark opacity-75 pb-5">MY OMEGA</h3>
            <span className='my-2 text-secondary'>I HAVE AN ACCOUNT</span>

            <form action=""onSubmit={handleOnSubmit}>
              <div className="mt-5">
                <div class="form-floating mb-4">
                  <input type="email" className={`${error.email ? 'border-danger':''} form-control rounded-0 border-2 shadow-none`} placeholder="name@example.com" name="email" value={formData.email} onChange={handleOnChange}/>
                  <label for="floatingInput">Email *</label>
                {error.email && <div className="text-danger mt-2">{error.email}</div>}
                </div>
                <div className="form-floating">
                  <input type="password" className={`${error.password ? 'border-danger':''} form-control rounded-0 border-2 shadow-none`} placeholder="Password" name="password" value={formData.password} onChange={handleOnChange}/>
                  <label for="floatingPassword">Password *</label>
                  {error.password && <div className="text-danger mt-2">{error.password}</div>}

                </div>
              </div>
              <a href="" className="text-secondary normal nav-link link mt-3" style={{fontWeight:"490"}}>Forgot your password ?</a>
              <div className="mt-4">
                <button className="loginbtn">LOGIN
                </button>
              </div>
            </form>

            <div className="mt-5">
                 <a href="" className="nav-link link text-secondary medium" style={{fontWeight:"480"}}>I don't have an account?</a>
                 <p className="mt-4 text-secondary normal">
                 Create a My OMEGA account to benefit from our exclusive services and keep up to date with our latest publications.
                 </p>
                 <div className="mt-4">
                 <button className="signupbtn">SIGN UP
                </button>
                 </div>
            </div>

          </div>
        </div>
      </div>

    </>
  );
}

export default Loginsidebar