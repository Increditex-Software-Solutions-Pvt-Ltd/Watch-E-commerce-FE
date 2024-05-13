import React from 'react';
import '../uicss/Sidebar.css'

const Sidebar = ({ targetId }) => {
  return (
    <>
      <div className="offcanvas offcanvas-start" id={targetId} style={{ position: 'fixed', top: '0', width: '370px', marginTop: '103.9px' }}>
        <div className="offcanvas-body">
          <div class="accordion" id="watches">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button bg-white shadow-none" style={{fontWeight:"450"}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    WATCHES
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#watches">
                <div class="accordion-body">
                   <ul className="navbar-nav">
                       <li className="nav-item"><a className="nav-link sidebarlink pb-3" href="">CONSTELLATION</a></li>
                       <li className="nav-item"><a className="nav-link sidebarlink pb-3" href="">SEAMASTER</a></li>
                       <li className="nav-item"><a className="nav-link sidebarlink pb-3" href="">SPEEDMASTER</a></li>
                       <li className="nav-item"><a className="nav-link sidebarlink pb-3" href="">DE VILLE</a></li>
                       <li className="nav-item"><a className="nav-link sidebarlink pb-3" href="">WOMEN'S SELECTION</a></li>
                       <li className="nav-item"><a className="nav-link sidebarlink pb-3" href="">MEN'S SELECTION</a></li>
                   </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
     
    </>
  );
};

export default Sidebar;
