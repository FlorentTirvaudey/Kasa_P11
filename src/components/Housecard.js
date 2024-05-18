import { Link } from "react-router-dom"

function Housecard({id, cover, title}) {
    return (
        <Link to={`/${id}`} >
            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr" ,
                gap: "20px"
            }}>
                <div className='card' style={{
                    width: "100%",
                    height: "250px",
                    position: "relative",
                    borderRadius: "10px",
                    overflow: "hidden"
                }}>
                    <div style={{
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        borderRadius: "10px"
                    }}>
                        <div className='overlay' style={{
                            position: "absolute",
                            top: "0",
                            left: "0",
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0, 0, 0, 0.2)",
                        }}></div>

                        <img src={cover} alt="liée à la maison en location" style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                        }}/>
                    </div>
                    <span style={{
                        position: "absolute",
                        left: "10px",
                        bottom: "10px",
                        color: "white",
                        fontWeight: "bold",
                        maxWidth: "70%",
                        fontSize: "1em",
                    }}>{title}</span>
                </div>   
            </div>
        </Link>
    )
}

export default Housecard