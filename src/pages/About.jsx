import Banner from "../components/Banner"
import aboutBg from"../assets/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg"

function About () {
    return(
        <main>
            <Banner source={aboutBg} altText="paysage montagnes enneigées au printemps" />
            <h1>About page</h1>
        </main>
    )
}

export default About