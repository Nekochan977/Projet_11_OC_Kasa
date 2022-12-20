import '../styles/Banner.css';


function Banner(props) {
    return(
        
        <div className=" banner-container my-8 cover-banner">
            <img className="banner-image" src={props.source} alt={props.altText}/>
            <h1 className="banner-title">{props.title}</h1>
        </div>

    )
}

export default Banner