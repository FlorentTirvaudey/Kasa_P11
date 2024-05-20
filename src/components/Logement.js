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
            <Navbar />
            {res.map((data) => (
                    <div key={data.id} className="infos">
                        <div className="box">
                            <Slideshow pictures={data.pictures} />
                        </div>
                        <div className="titles">
                            <h1>{data.title}</h1>
                            <h3>{data.location}</h3>
                        </div>
                        <div className="user_infos">
                            <p>{data.host.name}</p>
                            <div className="image_circle">
                                <img src={data.host.picture} alt="" />
                            </div>
                        </div>
                        <div className="tags">
                            {data.tags.map((tags) => (
                                <Tag key={tags} tag={tags} />
                            ))}
                        </div>
                        <div className="stars">
                            <Rate rating={data.rating} />
                        </div>
                        <div className="dropdown_section">
                            <Collapse key={data.description} title="Description" content={data.description} />
                            <Collapse key={data.equipments} title="Equipements" content={listCollapse} />
                        </div>
                    </div>
            ))}
            <Footer />
        </div>
    )
}

export default Logement