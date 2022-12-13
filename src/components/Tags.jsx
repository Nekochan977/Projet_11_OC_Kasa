import '../styles/Tags.css'

function Tags(props) {
    const { children } = props

    return (
        <ul className="tags-list">
            {children.tags.map((tag, id)=>(
                <li key={`${tag}-${id}`} className="tag-item">{tag}</li>
            ))}
        </ul>
    )
}
export default Tags