import { useParams } from "react-router-dom"
import data from "../utils/adds.json";

function Appartment(){
    const {appartmentId} = useParams()
    const appartment = data.find(appart => appart.id === appartmentId)
    return(
        <div>
            <h1>Appartment page</h1>
            <h2>{appartment.title}</h2>
        </div>
    )
}

export default Appartment