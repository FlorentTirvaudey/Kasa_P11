import '../styles/Housecard.css'

import { Link } from "react-router-dom"

function Housecard({id, cover, title}) {
    return (
        <Link to={`/logement/${id}`} >
            <div className='card'>
                <div className='card_image'>
                    <div className='card_overlay'></div>

                    <img src={cover} alt="card liée à la maison en location"/>
                </div>
                <span className='card_text'>{title}</span>
            </div>   
        </Link>
    )
}

export default Housecard