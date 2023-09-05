import "../styles/Header.css";
import img from "../assets/logo/logoWhite/android-chrome-192x192.png";
import { Link } from "react-router-dom";
import { routes } from "../routes.js";
import { useContext, useMemo, useRef, useState } from "react";
import { useGlobalStates } from "../Context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../Context/AuthContext";


const Header = ({handleModalToggle}) => {
  const { reloadPage } = useGlobalStates;

  //autenticacion de login
  const { token } = useContext(AuthContext);
  const isLoggedIn = !!token;

  const { getDataFilterIdByEmail } = useGlobalStates();
  const {
    clienteDataFetch,
  } = getDataFilterIdByEmail();


  const iconLetters = useMemo(() => {
    const nombre = clienteDataFetch?.nombre;
    return nombre ? nombre.substring(0, 2).toUpperCase() : '';
  }, [clienteDataFetch?.nombre]);


  const handleClick = () => {
    reloadPage();
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className={`header ${menuOpen ? "menuOpen" : ""}`}>
        <div className="logo">
          <Link onClick={handleClick} to={routes.home} className="link">
            <img className="imgLogo" src={img} alt="logo HairPhobia" />
            <span className="lineaVertical"></span>
            <span className="slogan">La felicidad del cabello</span>
          </Link>
        </div>

        {menuOpen ? (
          <FontAwesomeIcon
            className="iconClose"
            icon={faXmark}
            onClick={handleMenuToggle}
          />
        ) : !isLoggedIn ? (
          <FontAwesomeIcon
            className="iconMenu"
            icon={faBars}
            onClick={handleMenuToggle}
          />
        ) : null}

        {isLoggedIn ? (
          <div className={`profileLogIn ${menuOpen ? "leftChange" : ""}`}>
            <div className="containerImg">
              <p>{iconLetters}</p>
            </div>
            <div className="greetProfile">Hola, {clienteDataFetch?.nombre}</div>
            <Link className="seeProfile" to={routes.dashboard + "/profile"}>Ver perfil</Link>
          </div>

        ) : (

          <div className={`logIn ${menuOpen ? "leftChange" : ""}`}>
            <Link to="#" onClick={handleLinkClick}>
              <button onClick={handleModalToggle}>Crear cuenta</button>
            </Link>
            <Link to={routes.login} onClick={handleLinkClick}>
              <button>Iniciar sesión</button>
            </Link>
          </div>
            )}
      </div>
    </>
  );
};

export default Header;