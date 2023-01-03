import logoFooter from "../assets/logo-white.png"

import '../styles/Footer.css'

function Footer() {
    return(
        <footer className="footer">
            <img className="footer-logo" src={logoFooter} />
            <p className="footer-text">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer