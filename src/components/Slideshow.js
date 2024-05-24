import { useState } from "react"

function Slideshow ({ pictures }) {
    const [actualImg, setActualImg] = useState(0)

    const nextImg = () => {
        setActualImg(actualImg === pictures.length - 1 ? 0 : actualImg + 1)
    }

    const previousImg = () => {
        setActualImg(actualImg === 0 ? pictures.length - 1 : actualImg - 1)
    }

    return (
        <div>
            <span onClick={previousImg}>
                <i id="previous_chevron" className="fa-solid fa-chevron-left"></i>
            </span>

            {pictures.map((img, index) => (
                <div key={index} className="boxImage">
                    {actualImg === index && (
                        <img src={img} alt="" />
                    )}
                    {actualImg === index && (
                        <span>{actualImg + 1}/{pictures.length}</span>
                    )}
                </div>
            ))}

            <span onClick={nextImg}>
                <i id="next_chevron" className="fa-solid fa-chevron-right"></i>
            </span>
        </div>
    )
}

export default Slideshow