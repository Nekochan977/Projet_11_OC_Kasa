import fullstar from'../assets/full-star.svg'
import emptystar from'../assets/empty-star.svg'

function Ratings(props) {
    const { children } = props
    const ratingRange = [1, 2, 3, 4, 5]
    return(
        <div className="appartment-rating">
            {ratingRange.map((star)=>(
                star<=children.rating ? <img key={`${children.id} - ${star}`} src={fullstar} alt="full star icon" /> : <img key={`${children.id} - ${star}`} src={emptystar} alt="empty star icon"  /> 
            ))}
        </div>
    )
}
export default Ratings