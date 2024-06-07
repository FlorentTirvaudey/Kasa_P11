import "../styles/Slideshow.css"

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
        <div className="box">
            {pictures.length === 1 ? (
                <div>
                    {pictures.map((img, index) => (
                        <div key={img} className="box_image">
                            {actualImg === index && (
                                <img src={img} alt="aperçu bien à louer"/>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                    {pictures.map((img, index) => (
                        <div key={img} className="box_image">
                            {actualImg === index && (
                                <img src={img} alt="aperçu bien à louer"/>
                            )}
                            {actualImg === index && (
                                <span>{actualImg + 1}/{pictures.length}</span>
                            )}
                        </div>
                    ))}

                    <span className='previous_chevron' onClick={previousImg}>
                        <i id="previous_chevron" className="fa-solid fa-chevron-left"></i>
                    </span>
                    <span className='next_chevron' onClick={nextImg}>
                        <i id="next_chevron" className="fa-solid fa-chevron-right"></i>
                    </span>
                </div>
            )}

        </div>
    )
}

export default Slideshow