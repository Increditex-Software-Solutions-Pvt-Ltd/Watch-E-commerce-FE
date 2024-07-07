import React, { useState } from 'react'
import '../uicss/Loginsidebar.css';

const Loginsidebar = ({ targetId }) => {
  
  return (
    <>
      <div className="offcanvas offcanvas-end " id={targetId} style={{ position: 'fixed', top: '0', width: '510px', marginTop: '103.9px' }}>
        <div className="offcanvas-body">
        
        </div>
      </div>

    </>
  );
}

export default Loginsidebar