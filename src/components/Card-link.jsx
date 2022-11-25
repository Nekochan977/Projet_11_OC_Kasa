import data from "../utils/adds.json";
import '../styles/Card-link.css'

function CardLink() {
  return (
    <div className="container">
      <div className="container-fluid bg-light rounded d-flex flex-wrap justify-content-md-around my-5">
        {/* <h1>card</h1> */}
        {/* {console.log(data)} */}
        {data.map((data) => {
          console.log(data);
          return (
            <div key={data.id} className="rounded bg-red-200 m-4 card cover-card">
              <img className="thumbnail" src={data.cover} alt={data.title} />
              <p>{data.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default CardLink;
