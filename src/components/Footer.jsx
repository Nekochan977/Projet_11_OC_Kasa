import logoFooter from "../assets/logo-white.png"

function Footer() {
    return(
        <footer className="d-flex flex-column w-full bg-dark align-items-center justify-content-center footer">
            <img className="m-2" src={logoFooter} />
            <p className="text-light">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer