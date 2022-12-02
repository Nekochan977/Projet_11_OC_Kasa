import logo from "../assets/logo.png";
import '../styles/Header.css';
import { Outlet, Link } from "react-router-dom";

function Header() {
  return (
    <header className="container">
      <div className="d-flex align-items-center container-fluid position-relative my-2">
        <div className="my-4 w-50 justify-content-start">
          <img className="logo" src={logo} alt="kasa logo" />
        </div>
        <nav className="navbar position-absolute end-0 justify-content-end w-50">
          <ul className="d-flex navigation">
            <li className="mx-2">
            <Link className="link" to="/">accueil</Link>
            </li>
            <li className="mx-2">
            <Link className="link" to="/about">A propos</Link>
            </li>
          </ul>
        </nav>
      </div> 
      <Outlet />
    </header>
    
  );
}

export default Header;
