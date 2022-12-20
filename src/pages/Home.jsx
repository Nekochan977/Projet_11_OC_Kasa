import Banner from "../components/Banner"
import homeBg from "../assets/eric-muhr-P_XxsdVgtpQ-unsplash.jpg"
import CardLink from "../components/Card-link"

function Home () {
    return (
      <div>
          <Banner
            source={homeBg}
            altText="côtes rocheuses en bord de mer un jour de brouillard"
            title="Chez vous, partout et ailleurs"
          />
          <CardLink />
      </div>
    )
}

export default Home