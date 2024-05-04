// import '../styles/Home.css';
import Navbar from "./Navbar.js"
import Housecard from "./Housecard.js"
import Footer from './Footer';
import headerImage from "../assets/image_background_banner_accueil.png"

function Home() {
  return (
    <div>
      <div className='body_accueil' style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        margin: "10px 15px",
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
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}></div>

              <img src={headerImage} alt="background bloc accueil" style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}/>
            </div>
              <span style={{
                  width: "100%",
                  maxWidth: "70%",
                  fontWeight: "bold",
                  fontSize: "1.2em",
                  position: "absolute",
                  left: "0%",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "white",
                  marginLeft: "10px"
              }}>Chez vous, partout et ailleurs</span>
          </div>
          <Housecard />
      </div>
      <Footer />
    </div>
  )
}

export default Home;
