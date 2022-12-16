import { useParams } from "react-router-dom"
import data from "../utils/adds.json"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Carousel from "../components/Carousel"
import Dropdown from "../components/Dropdown"
import Tags from "../components/Tags"
import "../styles/Appartment.css"
//import { Children } from "react"

function Appartment(){
    const {appartmentId} = useParams()
    const appartment = data.find(appart => appart.id === appartmentId)
    console.log(appartment)
    return (
      <div>
        <Header />
        <main className="container">
          <Carousel>
            {appartment}
          </Carousel>
          <section>
            <div className="appartment-info">
              <div className="appartment-header">
                <h1 className="appartment-title">{appartment.title}</h1>
                <p>{appartment.location}</p>
                <Tags>{appartment}</Tags>
              </div>
              
              <div className="host-info">
                <div className="host-name">
                  <p>{appartment.host.name}</p>
                  
                </div>
                <img
                  className="host-profile-img"
                  src={appartment.host.picture}
                  alt={`${appartment.host.picture} profile`}
                />
                <div className="tags-rating">
                
                </div>
              </div>
              
            </div>
            <div className="container mt-5 justify-content-center d-flex">
              <Dropdown type={"Description"} text={appartment.description} />
              <Dropdown type={"Équipements"} text={appartment.equipments} />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
}

export default Appartment