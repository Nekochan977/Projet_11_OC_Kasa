import '../styles/Banner.css';


function Banner(props) {
    return(
        
        <div className="container banner-container my-8">
            <img className="rounded" src={props.source} alt={props.altText}/>
        </div>

    )
}

export default Banner