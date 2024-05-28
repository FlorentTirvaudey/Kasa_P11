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
        <div className="box" style={{
            display: "flex",
            position: "relative",
            width: "100%",
            height: "250px",
            overflow: "hidden",
            borderRadius: "10px"
        }}>

            {pictures.map((img, index) => (
                <div key={index} className="boxImage" style={{
                    height: "100%",
                    width: "100%",
                    position: "absolute",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    overflow: "hidden"
                }}>
                    {actualImg === index && (
                        <img src={img} alt="" style={{
                            position: "absolute",
                            top: "0",
                            left: "0",
                            right: "0",
                            bottom: "0",
                            height: "100%",
                            width: "100%",
                            objectFit: "cover"
                        }}/>
                    )}
                    {actualImg === index && (
                        <span style={{
                            position: "absolute",
                            bottom: "10px",
                            left: "50%",
                            color: "white",
                            fontWeight: "bold",
                            display: "none" // on ne l'affiche pas pour la version mobile
                        }}>{actualImg + 1}/{pictures.length}</span>
                    )}
                </div>
            ))}

            <span onClick={previousImg} style={{
                position: "absolute",
                top: "50%",
                left: "20px",
                color: "white",
                fontSize: "1.5em"
            }} >
                <i id="previous_chevron" className="fa-solid fa-chevron-left"></i>
            </span>
            <span onClick={nextImg} style={{
                position: "absolute",
                top: "50%",
                right: "20px",
                color: "white",
                fontSize: "1.5em"
            }}>
                <i id="next_chevron" className="fa-solid fa-chevron-right"></i>
            </span>
        </div>
    )
}

export default Slideshow