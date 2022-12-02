import data from "../utils/adds.json";
import '../styles/Card-link.css'

function CardLink() {
  return (
    <div className="container">
      <div className="container-fluid bg-light rounded d-flex flex-wrap justify-content-md-around my-5">
        {data.map((data) => {
          //console.log(data);
          return (
            <div key={data.id} className="rounded bg-red-200 m-4 position-relative cover-card " >
              <img className="thumbnail rounded" src={data.cover} alt={data.title} />
              <p className="position-absolute bottom-0 text-white font-weight-bold card-text p-2">{data.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default CardLink;
