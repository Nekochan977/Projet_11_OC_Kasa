// import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import homeBg from "../assets/home-background.png"
import '../styles/Header.css';
import { Outlet, Link } from "react-router-dom";

function Header() {
  return (
    <header className="container">
      <div className="d-flex align-items-center container-fluid position-relative my-2">
        <div>
          <img src={logo} alt="kasa logo" />
        </div>
        <nav className="navbar position-absolute end-0 justify-content-center">
          <ul className="d-flex navigation">
            <li className="mx-5">
            <Link to="/">accueil</Link>
            </li>
            <li className="mx-5">
            <Link to="/about">A propos</Link>
            </li>
          </ul>
        </nav>
       
      </div>
      <div className="container">
        <img className="img-fluid max-width: 100% rounded" src={homeBg} alt="Home background"/>
      </div>
      <Outlet />
    </header>
    
  );
}

export default Header;
