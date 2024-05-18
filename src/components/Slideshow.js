function Slideshow (props) {
    return (
        <div>
            <i className="fa-solid fa-chevron-left"></i>
            <div className="boxImage">
                <img src={props.img} alt="" />
            </div>
            <i className="fa-solid fa-chevron-right"></i>
        </div>
    )
}

export default Slideshow