import { useParams } from "react-router-dom"
import Collapse from "./Collapse"
import Footer from "./Footer"
import Navbar from "./Navbar"

import houses from "../assets/data.json"
import Tag from "./Tag"
import Slideshow from "./Slideshow"
import Rate from "./Rate"

function Logement () {
    const params = useParams()

    const res = [] 
    houses.map((data) => {
        if(data.id === params.id) {
            res.push(data);
        }
    })

    const listCollapse = res.map((data) => (
        data.equipments.map((equip) => (
            <li key={equip} style={{
                display: "flex",
                flexDirection : "column",
            }} >{equip}</li>
        ))
    ))

    return (
        <div>
            <section className="main_logement_section" style={{
                display: "flex",
                flexDirection: "column",
                margin: "10px",
                marginBottom: "30px",
                gap: "20px"
            }}>
                <Navbar />
                {res.map((data) => (
                        <div key={data.id} className="infos" style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "15px"
                        }}>
                            <Slideshow pictures={data.pictures} />
                            <div className="titles" style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "5px"
                            }}>
                                <h1 style={{
                                    color: "#FF6060",
                                    fontSize: "1.3em",
                                    fontWeight: "normal"
                                }} >{data.title}</h1>
                                <h3 style={{
                                    fontSize: "0.9em",
                                    fontWeight: "normal"
                                }} >{data.location}</h3>
                            </div>
                            <div className="tags" style={{
                                display: "flex",
                                flexDirection: "row",
                                gap: "10px",
                                flexWrap: "wrap"
                            }} >
                                {data.tags.map((tags) => (
                                    <Tag key={tags} tag={tags} />
                                ))}
                            </div>
                            <div className="user_infos" style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between"
                            }}>
                            <div className="stars" >
                                <Rate rating={data.rating} />
                            </div>
                            <div className="name_profil" style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                gap: "10px"
                            }}>
                                <p style={{
                                    maxWidth: "80px",
                                    textAlign: "right",
                                    color: "#FF6060"
                                }}>{data.host.name}</p>
                                <div className="image_circle" style={{
                                    width: "50px",
                                    height: "50px"
                                }}>
                                    <img src={data.host.picture} alt="" style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        borderRadius: "50%"
                                    }} />
                                </div>
                            </div>
                            </div>
                            <div className="dropdown_section" style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "20px"
                            }}>
                                <Collapse key={data.description} title="Description" content={data.description} />
                                <Collapse key={data.equipments} title="Equipements" content={listCollapse} />
                            </div>
                        </div>
                ))}
                </section>
            <Footer />
        </div>
    )
}

export default Logement