import "../styles/About.css"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Collapse from "./Collapse"

import collapse from "../assets/collapse.json"
import bannerImage from "../assets/banner_about.png"

function About() {
    return (
        <div>
            <section className='body_accueil'>
                <Navbar />
                    <div className='banner_bloc'>
                        <div className='banner'>
                            <div className='overlay overlay_about'></div>

                            <img src={bannerImage} alt="background bloc accueil"/>
                        </div>
                </div>
                {collapse.map((data, id) => (
                    <Collapse key={id} title={data.title} content={data.content} />
                ))}
            </section>
            <Footer />
        </div>
    )
}

export default About