import Navbar from "./Navbar"
import Footer from "./Footer"
import { Link } from "react-router-dom"

function Page404 () {
    return (
        <div>
            <div style={{
                margin: "15px"
            }}>
                <Navbar />
            </div>
            <div style={{
                display: "flex",
                textAlign: "center",
                flexDirection: "column",
                gap: "90px",
                margin: "100px auto",
            }}>
                <h1 style={{
                    fontSize: "4.5em",
                    color: "#FF6060"
                }}>404</h1>
                <p style={{
                    color: "#FF6060",
                    maxWidth: "80%",
                    margin: "auto"
                }}>Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/" style={{
                    fontSize: "0.8em",
                    color: "black",
                    maxWidth: "80%",
                    margin: "auto",
                    cursor: "pointer",
                }}>Retourner sur la page d'accueil</Link>
            </div>
            <Footer />
        </div>
    )
}

export default Page404