import "../styles/Tags.css"

function Tag (props) {
    return (
        <div className='tags_bloc'>
            <p>{props.tag}</p>
        </div>
    )
}

export default Tag