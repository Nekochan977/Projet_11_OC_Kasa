import Banner from "../components/Banner"
import aboutBg from"../assets/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg"
import Dropdown from "../components/Dropdown"

function About () {
    return (
      <div>
          <Banner
            source={aboutBg}
            altText="paysage montagnes enneigées au printemps"
          />
          <div className="container mt-5 justify-content-center">
            <Dropdown 
            type={"Fiabilité"}
            text={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."}
            />
             <Dropdown 
            type={"Respect"}
            text={"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."}
            />
          </div>
      </div>
    )
}

export default About