import '../styles/Navbar.css'

import { Link } from "react-router-dom"

import logo from "../assets/LOGO.png"

function Navbar() {
    return (
        <div className='nav'>
            <img src={logo} alt="logo kasa"/>

            <div className='nav_link_part'>
                    <Link className='nav_links' to="/">Accueil</Link>

                    <Link className='nav_links' to="/about">A propos</Link>
            </div>
        </div>
    )
}

export default Navbar