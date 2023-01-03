import logoFooter from "../assets/logo-white.png"

import '../styles/Footer.css'

function Footer() {
    return(
        <footer className="d-flex flex-column w-full bg-dark align-items-center justify-content-center footer mt-4">
            <img className="footer-logo" src={logoFooter} />
            <p className="footer-text">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer