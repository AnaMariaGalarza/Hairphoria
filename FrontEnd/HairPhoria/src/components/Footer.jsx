import "../styles/Footer.css";
import logo from "../assets/logo/logoBlack/android-chrome-192x192.png";
import facebook from "../assets/socialMediaIcons/LogoFacebook.png";
import instagram from "../assets/socialMediaIcons/LogoInstagram.png";

import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="logoCreditos">
            <img src={logo} alt="Logo HairPhoria" className="logo" />
            <span>© 2023</span>
            </div>
            <div className="socialMedia">
            <Link to="https://www.instagram.com/hairphoriastore/" target="_blank"> <img src={instagram}/> </Link>
            <Link to="https://www.facebook.com/profile.php?id=100093384822343" target="_blank"> <img src={facebook}/> </Link>
            
                
            </div>
        </div>
    )
}


export default Footer;
