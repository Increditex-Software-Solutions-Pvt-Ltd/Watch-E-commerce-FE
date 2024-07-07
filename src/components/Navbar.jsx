import React, { useContext } from 'react'
import '../componentcss/Navbar.css';
import { NavLink } from 'react-router-dom';
import Sidebar from '../UI/Sidebar';
import Searchbar from '../UI/Searchbar';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';


const Navbar = () => {

  const { state: cartState } = useContext(CartContext);
  const {isAuthenticated,user,logout} = useContext(AuthContext);


  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="position-sticky top-0" style={{ zIndex: "99" }}>
      <header className="navbar bg-white shadow-sm ">
        <div className="container-fluid d-flex justify-content-between py-1">
          <input id="toggleChecker" type="checkbox" />
          <label id="togglerLable" for="toggleChecker" data-bs-toggle="offcanvas" data-bs-target="#filtersidebar" className="d-flex flex-row gap-3">
            <div className="checkboxtoggler" >
              <div className="line-1"></div>
              <div className="line-2"></div>
              <div className="line-3"></div>
            </div>

          </label>
          <Sidebar targetId="filtersidebar" />
          <div>
            <NavLink onClick={handleScrollTop} to="/" className="navbar-brand fs-5 fw-semibold" style={{ color: '#df6447' }}>LOGO</NavLink>
          </div>

          <div>
            <ul className="navbar-nav d-flex flex-row align-items-center gap-4">
              <li data-bs-toggle="offcanvas" data-bs-target="#searchbar"><i class="bi bi-search" style={{ fontSize: "19px" }}></i>
              </li>
              <li>
                {cartState.cart.length === 0 ? (
                  <NavLink onClick={handleScrollTop} to="/emptycart" className="nav-link">
                    <i class="bi bi-bag" style={{ fontSize: "19px" }}></i>
                  </NavLink>
                ) : (<NavLink onClick={handleScrollTop} to="/cart" className="nav-link">
                  <i className="bi bi-bag position-relative" style={{ fontSize: "19px", zIndex: "0" }}>
                    <span className="position-absolute start-100 translate-middle d-flex justify-content-center align-items-center  bg-danger rounded-circle" style={{ height: "17px", width: "17px", zIndex: '1', top: '2px' }}>
                      <span className="" style={{ fontSize: '10px', color: 'white' }}>{cartState.cart.length}</span>
                    </span>
                  </i>
                </NavLink>)}

              </li>
              <li>
                {isAuthenticated ? (<button className="btn btn-link">
                  <span className="me-1"><i className="bi bi-person-circle" style={{ fontSize: "23px" }}></i></span>
                  {user?.firstName}
                </button>):
                (<NavLink to="/login">
                  <i className="bi bi-person" style={{fontSize:"23px"}}></i>
                </NavLink>)}
              </li>
            </ul>
          </div>
        </div>

        <Searchbar targetId="searchbar" />
        <div className="container-fluid d-flex justify-content-center py-1 position-relative undernavbar">
          <ul className="navbar-nav d-flex flex-row gap-5">
            <li className="nav-item ">
              <NavLink className="nav-link" onClick={handleScrollTop} to='/collection/Constellation'>CONSTELLATION</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" onClick={handleScrollTop} to="/collection/Seamaster">SEAMASTER</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" onClick={handleScrollTop} to="/collection/Speedmaster">SPEEDMASTER</NavLink></li>
            <li className="nav-item">
              <NavLink className="nav-link" onClick={handleScrollTop} to="/collection/DeVille">DE VILLE</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" onClick={handleScrollTop} to="/accessories">ACCESSORIES</NavLink>
            </li>
          </ul>


        </div>


      </header>

    </div>
  )
}

export default Navbar