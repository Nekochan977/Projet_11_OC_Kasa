import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import data from "../utils/adds.json"
import Carousel from "../components/Carousel"
import Dropdown from "../components/Dropdown"
import Tags from "../components/Tags"
import Ratings from "../components/Ratings"
import "../styles/Appartment.css"


function Appartment() {
  const { appartmentId } = useParams();
  const navigate = useNavigate()
  // TODO:: asynchrone => fetch 
  const appartment = data.find(appart => appart.id === appartmentId)
  console.log(appartment)

  useEffect(() => {
    if (!appartment) {
      navigate('/not-found')
    }
    // eslint-disable-next-line
  }, [appartment])


  return (
    <div>
      <Carousel>{appartment}</Carousel>
      <section>
        <div className="appartment-info">
          <div className="appartment-header">
            <h1 className="appartment-title">{appartment.title}</h1>
            <p>{appartment.location}</p>
            <Tags>{appartment}</Tags>
          </div>

          <div className="host-rating">
            <div className="host-info">
              <div className="host-name">
                <p>{appartment.host.name}</p>
              </div>
              <img
                className="host-profile-img"
                src={appartment.host.picture}
                alt={`${appartment.host.picture} profile`}
              />
            </div>
            <div className="tags-rating">
              <Ratings>{appartment}</Ratings>
            </div>
          </div>
        </div>
        <div className="container mt-5 justify-content-center d-flex">
          <Dropdown type={"Description"} text={appartment.description} />
          <Dropdown type={"Équipements"} text={appartment.equipments} />
        </div>
      </section>
    </div>
  );
}

export default Appartment;