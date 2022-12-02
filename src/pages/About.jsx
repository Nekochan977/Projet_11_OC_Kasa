import Banner from "../components/Banner"
import aboutBg from"../assets/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg"
import Header from "../components/Header"
import Footer from "../components/Footer"

function About () {
    return (
      <div>
        <Header />
        <main>
          <Banner
            source={aboutBg}
            altText="paysage montagnes enneigées au printemps"
          />
        </main>
        <Footer />
      </div>
    )
}

export default About