import React from 'react';
import '../uicss/Searchbar.css';

const Searchbar = ({ showSearchbar }) => {
  return (
    <>
      <div
        className={`offcanvas offcanvas-top ${showSearchbar ? 'show' : ''}`}
        style={{
          zIndex: '91',
          position: 'fixed',
          height: '110px',
          top: showSearchbar ? '0' : '-110px',
          marginTop: '103.9px',
          transform: showSearchbar ? 'translateY(0)' : 'translateY(-110px)',
          opacity: showSearchbar ? '1' : '0',
          transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
        }}
      >
        <div className="offcanvas-body  d-flex align-items-center">
          <div className="position-relative w-60 m-auto">
              <input type="text" className="form-control searchbar" placeholder="Search..."/>
              <span className="position-absolute end-0 top-10"><i className="bi bi-search fs-5"></i></span>
          </div>
        </div>
      </div>
      {showSearchbar && (
        <div
          className="offcanvas-backdrop show"
          style={{
            zIndex: '-1',
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.3)',
            transition: 'opacity 0.5s ease',
          }}
        ></div>
      )}
    </>
  );
};

export default Searchbar;
