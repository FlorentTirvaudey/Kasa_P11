import Footer from "./Footer"
import Navbar from "./Navbar"
import Collapse from "./Collapse"

import collapse from "../assets/collapse.json"
import bannerImage from "../assets/banner_about.png"

function About() {
    return (
        <div>
            <div className='body_accueil' style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                margin: "10px 10px",
                marginBottom: "30px"
            }}>
                <Navbar />
                    <div className='banner_bloc' style={{
                    width: "100%",
                    height: "100px",
                    borderRadius: "10px",
                    overflow: "hidden",
                    position: "relative"
                }}>
                    <div style={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    borderRadius: "10px"
                    }}>
                    <div className='overlay' style={{
                            position: "absolute",
                            top: "0",
                            left: "0",
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0, 0, 0, 0.2)",
                        }}></div>

                    <img src={bannerImage} alt="background bloc accueil" style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}/>
                    </div>
                </div>
                {collapse.map((data, id) => (
                    <Collapse key={id} title={data.title} content={data.content} />
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default About