import '../styles/Page404.css'

import Navbar from "./Navbar"
import Footer from "./Footer"
import { Link } from "react-router-dom"

function Page404 () {
    return (
        <div>
            <section className='body_accueil'>
                <Navbar />
                <div className='block_404'>
                    <h1>404</h1>
                    <p>Oups! La page que vous demandez n'existe pas.</p>
                    <Link className='back_home' to="/">Retourner sur la page d'accueil</Link>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Page404