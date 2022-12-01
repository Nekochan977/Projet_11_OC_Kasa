import homeBg from "../assets/eric-muhr-P_XxsdVgtpQ-unsplash.jpg"
import aboutBg from"../assets/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg"
import '../styles/Banner.css';


function Banner() {
    console.log(window.location.pathname)
    const path = window.location.pathname
    const bgImages = [homeBg, aboutBg]
    console.log(bgImages);
    return(
        <div className="container banner-container p-4 mt-8">
            {path==="/"? <img className="rounded" src={bgImages[0]}/> :  <img className="rounded" src={bgImages[1]}/>}
        </div>
    )
}

export default Banner