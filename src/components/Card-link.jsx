import data from "../utils/adds.json";
import '../styles/Card-link.css'
import { Link } from "react-router-dom"

function CardLink() {
  return (
    <div className=" card-container">
      <div className="card-wrapper">
        {data.map((data) => {
          return (
            <Link 
              to={`/appartment/${data.id}`}
              key={data.id}
            >
              <div className="cover-card ">
                <img
                  className="thumbnail"
                  src={data.cover}
                  alt={data.title}
                />
                <p className="card-text">
                  {data.title}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default CardLink;
