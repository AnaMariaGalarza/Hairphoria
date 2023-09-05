import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { useGlobalStates } from '../Context/Context';
import { AuthContext } from '../Context/AuthContext';
import "../styles/Logout.css"

const Logout = () => {
  const navigate = useNavigate();
  const { dispatch, token } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    window.location.reload();
  };

  const handleRedirectProfile = () => {
    navigate("/dashboard")
    window.location.reload();
  }

  const { getDataFilterIdByEmail } = useGlobalStates();
  const {
    clienteDataFetch,
  } = getDataFilterIdByEmail();


  return (
    <div className="logoutPage">
      <span className="figura"></span>
      <span className="figura"></span>
      <div className="logoutContainer">
        {clienteDataFetch?.nombre}, ¿Deseas salir de tu cuenta de Hairphoria?
        <div className="logoutButtons">
          <button onClick={handleRedirectProfile}>Cancelar</button>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      </div>
    </div>
  )
}

export default Logout