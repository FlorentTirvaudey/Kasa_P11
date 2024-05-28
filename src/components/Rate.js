function Rate({ rating }) {
    const note = [1, 2, 3, 4, 5]

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            gap: "3px",
            color: "#FF6060"
        }}>
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