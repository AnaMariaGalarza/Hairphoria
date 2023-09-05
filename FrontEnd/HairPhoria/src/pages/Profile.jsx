import React, { useContext } from 'react'
import "../styles/Profile.css"
import { useGlobalStates } from '../Context/Context';
import { AuthContext } from '../Context/AuthContext';
import { ClipLoader } from "react-spinners";
const Profile = () => {

  const { dispatch, token } = useContext(AuthContext);
    //autenticacion de login
  const isLoggedIn = !!token;

  const { getDataFilterIdByEmail } = useGlobalStates();
  const {
    clienteDataFetch,
  } = getDataFilterIdByEmail();
  const loading = clienteDataFetch === undefined;

  const clienteNombre = clienteDataFetch?.nombre;
  const iconLetters = clienteNombre ? clienteNombre.substring(0, 2).toUpperCase() : '';


  return (
    <div className="infoProfile">
      {loading ? (
        <div className="loadingSpinner">
        <ClipLoader color="var(--color-primary-4)" size={80} />
      </div>
    ) : (
      <>
      <h2>Mi perfil</h2>
      <div className="headerContainer">   
        <div className="iconLetters">
          <p>{iconLetters}</p>
        </div>
        <div className="headerContent">
        <h3>{clienteDataFetch?.nombre}</h3>
        <p className="headerRol">{clienteDataFetch?.rol}</p>
        <p className="headerEmail">{clienteDataFetch?.email}</p>
        </div>
      </div>
      <h2>Información personal</h2>
      <div className="sectionPersonal">
        <div className="itemProfile">
        <p className="sectionLabel">
          Nombre:
        </p>
        <p className="sectionResponse">
          {clienteDataFetch?.nombre}
        </p>
        </div>
        <div className="itemProfile">
        <p className="sectionLabel">
          Apellido:
        </p>
        <p className="sectionResponse">
          {clienteDataFetch?.apellido}
        </p>
        </div>
        <div className="itemProfile">
        <p className="sectionLabel">
          Documento:
        </p>
        <p className="sectionResponse">
          {clienteDataFetch?.documento}
        </p>
        </div>
        <div className="itemProfile">
        <p className="sectionLabel">
          Correo:
        </p>
        <p className="sectionResponse">
          {clienteDataFetch?.email}
        </p>
        </div>
        <div className="itemProfile">
        <p className="sectionLabel">
          Teléfono:
        </p>
        <p className="sectionResponse">
          {clienteDataFetch?.telefono}
        </p>
        </div>
      </div>
      </>
    )}
    </div>
  )
}

export default Profile