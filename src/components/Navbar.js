import { Link } from "react-router-dom"

// import '../styles/Home.css';

import logo from "../assets/LOGO.png"

function Navbar() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "10px",
        }}>
            <img src={logo} alt="logo kasa" style={{
                width: "100px"
            }}/>

            <div style={{
                display: "flex",
                gap: "30px",
                textTransform: "uppercase",
                cursor: "pointer",
                fontSize: "0.7em"
            }}>
                    <Link to="/" style={{
                        color: "black",
                        textDecoration: "none"
                    }}>Accueil</Link>

                    <Link to="/about" style={{
                        color: "black",
                        textDecoration: "none"
                    }}>A propos</Link>
            </div>
        </div>
    )
}

export default Navbar