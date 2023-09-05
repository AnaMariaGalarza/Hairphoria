import React, { useEffect, useState } from 'react'
import "../styles/Card.css"
import { useGlobalStates } from '../Context/Context';
import { routes } from '../routes';
import { Link } from 'react-router-dom';
import { ClipLoader } from "react-spinners";

const Favorites = () => {
  const [loading, setLoading] = useState(true);
  const { getDataFilterIdByEmail } = useGlobalStates();
  const {
    clienteDataFetch,
  } = getDataFilterIdByEmail();

  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    if (clienteDataFetch && clienteDataFetch.serviciosFavoritos) {
      setFavorites(clienteDataFetch.serviciosFavoritos);
      setLoading(false);
    }
  }, [clienteDataFetch]);
  

  return (
    <div className='favoritesContainer'>
    <div className="containerTitleButton">
      <h2 className='titleCard'>¡Aquí están tus servicios favoritos!</h2>
    </div>
    <div className='cardContainer'>
      {loading ? (
        <div className="spinner">
          <ClipLoader color="var(--color-primary-4)" size={80} />
        </div>
      ) : (
        favorites.length > 0 ? (
          favorites.map((servicio) => (
            <Link to={`${routes.details}/${servicio.nombre}`}>
              <div key={servicio.id} className='card'>
                <h3 className='title'>{servicio.nombre}</h3>
                <img className="img" src={servicio.imagen[0]} alt="imagen categoria" />
              </div>
            </Link>
          ))
        ) : (
          <p>Todavía no has agregado ningún favorito.</p>
        )
      )}
    </div>
  </div>
  )
}

export default Favorites