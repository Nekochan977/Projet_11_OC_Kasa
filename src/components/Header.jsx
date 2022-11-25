// import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import homeBg from "../assets/home-background.png"
import '../styles/Header.css';

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
              <a href="#" className="align-middle link">
                Accueil
              </a>
            </li>
            <li className="mx-5">
              <a href="#" className="align-middle link">
                A propos
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container">
        <img className="img-fluid max-width: 100% rounded" src={homeBg} alt="Home background"/>
      </div>
    </header>
    
  );
}

export default Header;
