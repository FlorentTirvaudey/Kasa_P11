import '../styles/Home.css';
import Navbar from "./Navbar.js"
import Housecard from "./Housecard.js"
import Footer from './Footer';
import headerImage from "../assets/image_background_banner_accueil.png"
import houses from "../assets/data.json"

function Home() {
  return (
    <div>
      <section className='body_accueil'>
        <Navbar />
        <div className='banner_house_part'>
          <div className='banner_bloc'>
              <div className='banner'>
                <div className='overlay overlay_home'></div>

                <img src={headerImage} alt="background bloc accueil"/>
              </div>
                <span className='banner_text'>Chez vous, partout et ailleurs</span>
          </div>
          <div className='housecard_bloc'>
            {houses.map((data, id) => (
              <Housecard key={id} id={data.id} cover={data.cover} title={data.title} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home;
