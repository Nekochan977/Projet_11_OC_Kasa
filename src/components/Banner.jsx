import '../styles/Banner.css';


function Banner(props) {
    return(
        
        <div className=" banner-container cover-banner">
            <img className="banner-image" src={props.source} alt={props.altText}/>
            {!props.title? "": <h1 className="banner-title">{props.title}</h1>}
        </div>

    )
}

export default Banner