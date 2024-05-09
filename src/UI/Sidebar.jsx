import React from 'react';

const Sidebar = ({ targetId, showSidebar }) => {
  return (
    <>
      <div className={`offcanvas offcanvas-start ${showSidebar ? 'show' : ''}`} id={targetId}  style={{ zIndex: '91', position: 'fixed', top: '0', width: '370px', marginTop:'103.9px' }}>
        <div className="offcanvas-body">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius molestiae officiis ducimus nulla vel distinctio perspiciatis? Vitae at fuga officia dolores facere, veritatis nostrum reprehenderit, voluptatem sint dignissimos tenetur unde?</p>
        </div>
      </div>
      {showSidebar && <div className="offcanvas-backdrop show" style={{ zIndex: '-1', position: 'fixed', top: '0', left: '0', width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.3)', transition: 'opacity 0.7s ease' }}></div>}
    </>
  );
};

export default Sidebar;
