import data from "../utils/adds.json";
import '../styles/Card-link.css'
import { Link } from "react-router-dom"

function CardLink() {
  return (
    <div className="container">
      <div className="container-fluid bg-light rounded d-flex flex-wrap justify-content-md-around my-5">
        {data.map((data) => {
          return (
            <Link 
              to={`/appartment/${data.id}`}
              key={data.id}
            >
              <div className="rounded bg-red-200 m-4 position-relative cover-card ">
                <img
                  className="thumbnail rounded"
                  src={data.cover}
                  alt={data.title}
                />
                <p className="position-absolute bottom-0 text-white font-weight-bold card-text p-2">
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
