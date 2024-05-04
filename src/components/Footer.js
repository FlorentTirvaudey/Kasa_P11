import logo from "../assets/LOGO.png"

function Footer() {
    return (
        <div className='footer' style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
            color: "white",
            height: "200px",
            margin: "auto"
        }}>
            <img src={logo} alt="logo kasa" style={{
                width: "100px",
            }} />
            <p style={{
                maxWidth: "90px",
                fontSize: "0.7em"
            }}>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer