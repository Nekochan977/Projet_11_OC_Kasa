import { useParams } from "react-router-dom"
import data from "../utils/adds.json";
import Header from "../components/Header"
import Footer from "../components/Footer"

function Appartment(){
    const {appartmentId} = useParams()
    const appartment = data.find(appart => appart.id === appartmentId)
    return(
        <div>
            <Header />
            <main>
                <h1>Appartment page</h1>
                <h2>{appartment.title}</h2>
            </main>
            <Footer />
        </div>
    )
}

export default Appartment