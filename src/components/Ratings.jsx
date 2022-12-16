import fullstar from'../assets/full-star.svg'
import emptystar from'../assets/empty-star.svg'

function Ratings(props) {
    const { children } = props
    const ratingRange = [1, 2, 3, 4, 5]
    return(
        <div className="appartment-rating">
            {ratingRange.map((star)=>(
                star<=children.rating ? <img src={fullstar} /> : <img src={emptystar} /> 
            ))}
        </div>
    )
}
export default Ratings