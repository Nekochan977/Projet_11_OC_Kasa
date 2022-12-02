import Banner from "../components/Banner"
import homeBg from "../assets/eric-muhr-P_XxsdVgtpQ-unsplash.jpg"
import CardLink from "../components/Card-link"
import Header from "../components/Header"
import Footer from "../components/Footer"

function Home () {
    return (
      <div>
        <Header />
        <main>
          <Banner
            source={homeBg}
            altText="côtes rocheuses en bord de mer un jour de brouillard"
          />
          <CardLink />
        </main>
        <Footer />
      </div>
    )
}

export default Home