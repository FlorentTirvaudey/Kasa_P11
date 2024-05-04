import Footer from "./Footer"
import Navbar from "./Navbar"

function Logement () {
    return (
        <div>
            <Navbar />
            {
                // carroussel ici
            }
            <div className="infos">
                <div className="titles">
                    <h1></h1>
                    <h3></h3>
                </div>
                <div className="user_infos">
                    <p></p>
                    <div className="image_circle">
                        <img src="" alt="" />
                    </div>
                </div>
                <div className="tags">
                    {
                        // ici les composants des tags
                    }
                </div>
                <div className="stars">
                    <i></i>
                    {
                        // for jusqu'à 5 pour afficher les 5 icônes étoiles ?
                    }
                </div>
                <div className="dropdown_section">
                    {
                        // premier composant collapse
                    }
                    {
                        // deuxième composant collapse
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Logement