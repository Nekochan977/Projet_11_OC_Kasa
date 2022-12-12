import { useParams } from "react-router-dom"
import data from "../utils/adds.json"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Carousel from "../components/Carousel"
import Dropdown from "../components/Dropdown"
import "../styles/Appartment.css"

function Appartment(){
    const {appartmentId} = useParams()
    const appartment = data.find(appart => appart.id === appartmentId)
    console.log(appartment)
    return (
      <div>
        <Header />
        <main className="container">
          <Carousel>
            {appartment.pictures.map((picture, index) => (
              <div className="image-txt-wraper">
                <img className="carousel-img" key={index} src={picture} />
                <p className="carousel-img-number">{index+1}/{appartment.pictures.length}</p>
              </div>
               
            ))}
          </Carousel>
          <section>
            <div>
              <div className="appartment-header">
                <h1>{appartment.title}</h1>
                <p>{appartment.location}</p>
              </div>
              <div className="host-info">
                <div>
                  <p>{appartment.host.name}</p>
                </div>
                <img
                  className="host-profile-img"
                  src={appartment.host.picture}
                />
              </div>
            </div>
            <div className="tags-rating">
              <ul className="tags-list">
                {appartment.tags.map((tag, index) => {
                  return (
                    <li className="tag-item" key={`${tag}-${index}`}>
                      {tag}
                    </li>
                  );
                })}
              </ul>
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