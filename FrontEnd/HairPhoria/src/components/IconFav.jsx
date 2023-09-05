import  { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartOutline } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import usePostStats from '../hooks/usePostStats';
import { AuthContext } from '../Context/AuthContext';
import swal from 'sweetalert';

const IconFav = ({ service }) => {
  console.log("service", service);
  console.log("stats", service?.stats);

  const email = localStorage.getItem("email");
  const filteredStats = service?.stats?.filter((stat) => stat.email === email);
  const isFavorite = filteredStats.length > 0 ? filteredStats[0].favorito : false;
  //trae el primer resultado [0] de filteredStats
  console.log("filteredStats", filteredStats);
  console.log("isFavorite", isFavorite);
  const [isFavoriteState, setIsFavoriteState] = useState(isFavorite);
  const { addStats } = usePostStats();

  //autenticacion de login
  const { token } = useContext(AuthContext);
  const isLoggedIn = !!token;

  useEffect(() => {
    setIsFavoriteState(isFavorite);
  }, [isFavorite]);

  const handleFavorite = () => {
    if (isLoggedIn) {
      setIsFavoriteState((prevState) => !prevState);
      addFavorito();
    }
    else {
      if (!isLoggedIn) {
        swal({
          text: "Debes ingresar a tu cuenta para añadir a favoritos 😉",
          icon: "warning",
          button: "Aceptar",
        });
        return;
      }
    }

  };

  const iconFav = isFavoriteState ? faHeart : faHeartOutline;

  const addFavorito = () => {
    const id = service?.id;
    const favoritoValue = !isFavoriteState;
    const dataFavorito = { favorito: favoritoValue, email: email };
    const url = `http://3.19.243.36:8080/stats/marcarfavorito/${id}`;
    addStats(url, dataFavorito);
  };

  console.log("isFavorite:", isFavoriteState);

  return (
    <div>
      <FontAwesomeIcon icon={iconFav} onClick={handleFavorite} /> {isFavoriteState ? "Añadido a favoritos" : "Añadir a favorito"}
    </div>
  );
};

export default IconFav;

