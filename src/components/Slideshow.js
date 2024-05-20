import { useState } from "react"

function Slideshow ({ pictures }) {
    const [actualImg, setActualImg] = useState(0)
    console.log(pictures)



    return (
        <div>
            <i className="fa-solid fa-chevron-left"></i>

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

            <i className="fa-solid fa-chevron-right"></i>
        </div>
    )
}

export default Slideshow