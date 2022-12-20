import fullstar from'../assets/full-star.svg'
import emptystar from'../assets/empty-star.svg'

function Ratings(props) {
    const { children } = props
    const ratingRange = [1, 2, 3, 4, 5]
    return(
        <div className="appartment-rating">
            {ratingRange.map((star)=>(
                console.log(children),
                console.log(`${children.id} - ${star}`),
                star<=children.rating ? <img key={`${children.id} - ${star}`} src={fullstar} /> : <img key={`${children.id} - ${star}`} src={emptystar} /> 
            ))}
        </div>
    )
}
export default Ratings