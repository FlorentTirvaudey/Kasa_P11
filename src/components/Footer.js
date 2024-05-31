import '../styles/Footer.css'

import logo from "../assets/LOGO.png"

function Footer() {
    return (
        <div className='footer'>
            <img src={logo} alt="logo kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer