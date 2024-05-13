import React from 'react';
import '../uicss/Searchbar.css';

const Searchbar = ({targetId }) => {
  return (
    <>
      <div
        className="offcanvas offcanvas-top" id={targetId} style={{ position: 'fixed', top: '0', height: '110px' }}
       >
       
        <div className="offcanvas-body d-flex align-items-center">
          <div className="position-fixed" style={{right:"20px"}}>
             <button className="btn-close" data-bs-dismiss="offcanvas"></button>
          </div>
          <div className="position-relative w-60 m-auto">
              <input type="text" className="form-control searchbar" placeholder="Search..."/>
              <span className="position-absolute end-0 top-10"><i className="bi bi-search fs-5"></i></span>
          </div>
        </div>
      </div>
   
    </>
  );
};

export default Searchbar;
