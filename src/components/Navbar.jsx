import React, { useContext } from 'react'
import '../componentcss/Navbar.css';
import { NavLink } from 'react-router-dom';
import Sidebar from '../UI/Sidebar';
import Searchbar from '../UI/Searchbar';
import Loginsidebar from '../UI/Loginsidebar';
import { CartContext } from '../context/CartContext';


const Navbar = () => {

  const {state} = useContext(CartContext);
  const {cart} = state;

  const handleScrollTop=()=>{
     window.scrollTo({top:0,behavior:"smooth"})
  }
  
  return (
    <div className="position-sticky top-0" style={{zIndex:"99"}}>
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
           <Sidebar  targetId="filtersidebar"/>
          <div>
            <NavLink onClick={handleScrollTop} to="/" className="navbar-brand fs-5 fw-semibold" style={{ color: '#df6447' }}>LOGO</NavLink>
          </div>

          <div>
            <ul className="navbar-nav d-flex flex-row align-items-center gap-4">
              <li data-bs-toggle="offcanvas" data-bs-target="#searchbar"><i class="bi bi-search" style={{ fontSize: "19px" }}></i>
              </li>
              <li>
                {cart.length>0 ? <NavLink onClick={handleScrollTop} to="/cart" className="nav-link">
                <i class="bi bi-bag" style={{ fontSize: "19px" }}></i>
                </NavLink>: <NavLink onClick={handleScrollTop} to="/emptycart" className="nav-link">
                <i class="bi bi-bag" style={{ fontSize: "19px" }}></i>
                </NavLink>}
               
                </li>
              <li data-bs-toggle="offcanvas" data-bs-target="#loginsidebar"><i class="bi bi-person" style={{ fontSize: "23px" }}></i></li>
            </ul>
          </div>
        </div>
        <Loginsidebar targetId="loginsidebar"/>
         <Searchbar targetId="searchbar"/>
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