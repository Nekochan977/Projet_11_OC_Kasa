import Banner from "../components/Banner"
import homeBg from "../assets/eric-muhr-P_XxsdVgtpQ-unsplash.jpg"
import CardLink from "../components/Card-link"

function Home () {
    return (
      <div>
          <Banner
            source={homeBg}
            altText="côtes rocheuses en bord de mer un jour de brouillard"
          />
          <CardLink />
      </div>
    )
}

export default Home