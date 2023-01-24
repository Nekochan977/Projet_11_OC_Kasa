import logo from "../assets/logo.png"
import '../styles/Header.css'
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="main-container global">
      <div className="logo-nav-wrapper">
        <div className="logo-container">
          <Link className="link" to="/">
            <img className="logo" src={logo} alt="kasa logo" />
          </Link>
        </div>
        <nav className="navbar">
          <ul className="navigation">
            <li className="navigation-link">
            <Link className="link" to="/">accueil</Link>
            </li>
            <li className="navigation-link">
            <Link className="link" to="/about">A propos</Link>
            </li>
          </ul>
        </nav>
      </div> 
    </header>
  )
}

export default Header
