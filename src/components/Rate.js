import "../styles/Rate.css"

function Rate({ rating }) {
    const note = [1, 2, 3, 4, 5]

    return (
        <div className='stars_disposition'>
            {note.map((stars) => 
                rating >= stars ? (
                    <i key={stars.toString()} className="fa-solid fa-star"></i>
                ) : (
                    <i key={stars.toString()} className="fa-regular fa-star"></i>
                )
            )}
        </div>
    )
}

export default Rate