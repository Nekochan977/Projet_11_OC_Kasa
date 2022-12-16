import { Link } from "react-router-dom"
import "../styles/Error.css"

function Error(){

    return(
        <section className="my-container">
            <div className="responsive">
            <h1 className="error-title">404</h1>
                <p className="">Oups! La page que vous demandez n'existe pas.</p>
                <div>
                    <Link
                    to={`/`}>
                        Retourner sur la page d’accueil
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Error