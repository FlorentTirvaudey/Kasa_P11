import "../styles/Logement.css"
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
    // eslint-disable-next-line array-callback-return
    houses.map((data) => {
        if(data.id === params.id) {
            res.push(data);
        }
    })

    const listCollapse = res.map((data) => (
        data.equipments.map((equip) => (
            <li className='equipment_list' key={equip}>{equip}</li>
        ))
    ))

    return (
        <div>
            <section className='body_accueil'>
                <Navbar />
                {res.map((data) => (
                        <div key={data.id} className="infos">
                            <Slideshow pictures={data.pictures} />
                            <div className="titles">
                                <h1>{data.title}</h1>
                                <h2>{data.location}</h2>
                            </div>
                            <div className="tags">
                                {data.tags.map((tags) => (
                                    <Tag key={tags} tag={tags} />
                                ))}
                            </div>
                            <div className="user_infos">
                                <div className="stars" >
                                    <Rate rating={data.rating} />
                                </div>
                                <div className="name_profil">
                                    <p>{data.host.name}</p>
                                    <div className="image_circle">
                                        <img src={data.host.picture} alt="visage profil de l'hôte" />
                                    </div>
                                </div>
                            </div>
                            <div className="dropdowns">
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