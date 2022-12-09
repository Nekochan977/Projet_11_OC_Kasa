import { useParams } from "react-router-dom"
import data from "../utils/adds.json";
import Header from "../components/Header"
import Footer from "../components/Footer"
import Carousel from "../components/Carousel";

function Appartment(){
    const {appartmentId} = useParams()
    const appartment = data.find(appart => appart.id === appartmentId)
    //const appartmentPictures = appartment.pictures
    //console.log(appartment);
    return (
      <div>
        <Header />
        <main className="container">
          <h1>Appartment page</h1>
          <h2>{appartment.title}</h2>
          <Carousel>
            {appartment.pictures.map((picture, index) => {
              return <img className="carousel-img" key={index} src={picture} />;
            })}
          </Carousel>
        </main>
        <Footer />
      </div>
    );
}

export default Appartment