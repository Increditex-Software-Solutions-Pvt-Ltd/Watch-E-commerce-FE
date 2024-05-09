import React,{useState} from 'react'
import '../componentcss/Navbar.css';
import { NavLink } from 'react-router-dom';
import Sidebar from '../UI/Sidebar';
import Searchbar from '../UI/Searchbar';


const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSearchbar, setShowSearchbar] = useState(false);
  

  return (
    <div className="position-sticky top-0" style={{zIndex:"99"}}>
      <header className="navbar bg-white shadow-sm ">
        <div className="container-fluid d-flex justify-content-between py-1">
          <input id="toggleChecker" type="checkbox" />
          <label id="togglerLable" for="toggleChecker" className="d-flex flex-row gap-3">
            <div className="checkboxtoggler" onClick={()=>setShowSidebar(!showSidebar)}>
              <div className="line-1"></div>
              <div className="line-2"></div>
              <div className="line-3"></div>
            </div>
            {showSidebar? 'CLOSE':'MENU'}
          </label>
           {showSidebar && <Sidebar showSidebar={showSidebar}/>}
          <div>
            <NavLink to="/" className="navbar-brand fs-5 fw-semibold" style={{ color: '#df6447' }}>LOGO</NavLink>
          </div>

          <div>
            <ul className="navbar-nav d-flex flex-row align-items-center gap-4">
              <li onClick={()=>setShowSearchbar(!showSearchbar)}>
                {showSearchbar ?<i class="bi bi-x-lg" style={{ fontSize: "19px",color:'#df6447' }}></i>:<i class="bi bi-search" style={{ fontSize: "19px" }}></i>}
              </li>
              <li><i class="bi bi-bag" style={{ fontSize: "19px" }}></i></li>
              <li><i class="bi bi-person" style={{ fontSize: "23px" }}></i></li>
            </ul>
          </div>
        </div>
        {showSearchbar && <Searchbar showSearchbar={showSearchbar}/>}
        <div className="container-fluid d-flex justify-content-center py-1 position-relative undernavbar">
          <ul className="navbar-nav d-flex flex-row gap-5">
            <li className="nav-item ">
              <NavLink className="nav-link" to='/collection/Constellation'>CONSTELLATION</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/collection/Seamaster">SEAMASTER</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/collection/Speedmaster">SPEEDMASTER</NavLink></li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/collection/DeVille">DE VILLE</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/accessories">ACCESSORIES</NavLink>
            </li>
          </ul>


        </div>


      </header>

    </div>
  )
}

export default Navbar