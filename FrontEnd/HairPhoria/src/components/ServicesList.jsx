import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faChevronLeft, faChevronRight,  faTrash } from "@fortawesome/free-solid-svg-icons";
import { useFetchServices } from "../hooks/useFetchServices";
import { routes } from "../routes";
import "../styles/Card.css";
import "../styles/CardServices.css";
import { useFetchDeleteService } from "../hooks/useFetchDeleteService";
import swal from "sweetalert";
import { ClipLoader } from "react-spinners";
import { useGlobalStates } from "../Context/Context";
import { AuthContext } from "../Context/AuthContext";

const ServicesList = () => {

  //autenticacion de login
  const { token } = useContext(AuthContext);
  const isLoggedIn = !!token;

  const { dataFetch, isLoading } = useFetchServices();

  const { getDataFilterIdByEmail } = useGlobalStates();
  const {
    clienteDataFetch,
  } = getDataFilterIdByEmail();

  const { atributo } = useParams();
  const [serviciosCard, setServiciosCard] = useState([]);
  const [paginaActual, setpaginaActual] = useState(0);
  const [cardsPorPagina, setCardsPorPagina] = useState(2);

  useEffect(() => {
    if (dataFetch) {
      let serviciosCategoria = dataFetch.filter((value) => value.especialidad === atributo);
      setServiciosCard(serviciosCategoria);
    }
  }, [atributo, dataFetch]);

  useEffect(() => {
    const updateCardsPerPage = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 480) {
        setCardsPorPagina(1);
        
      } else {
        setCardsPorPagina(2);
      }
    };

    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);

    return () => {
      window.removeEventListener("resize", updateCardsPerPage);
    };
  }, []);

  const { deleteData, isLoadingDelete: isDeleting } = useFetchDeleteService();

  const handleDeleteCard = (id) => {
    swal({
      title: "¿Estás seguro?",
      text: "Una vez eliminado, no podrás recuperar este servicio",
      icon: "warning",
      buttons: ["Cancelar", "Eliminar"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteData(id, token).then(() => {
          // Eliminar el servicio del estado serviciosCard
          setServiciosCard((prevServicios) =>
            prevServicios.filter((servicio) => servicio.id !== id)
          );
        });
      } else {
        swal("El servicio no ha sido eliminado");
      }
    });
  };

  const handleNextPage = () => {
    setpaginaActual((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setpaginaActual((prevPage) => prevPage - 1);
  };

  const startIndex = paginaActual * cardsPorPagina;
  const visibleCards = serviciosCard.slice(startIndex, startIndex + cardsPorPagina);

  const handleClick = () => {
    // código para recargar la página
  };

  return (
    <div>
      <div className="servicesContainer">
        <h2 className="subtitulo titleCard">{atributo}</h2>
        <div className="buttonsContainer">
          <Link onClick={handleClick} to={routes.home} className="back">
            <button className="backButton">
              <FontAwesomeIcon icon={faArrowLeftLong} />
            </button>
          </Link>
        </div>
      </div>
      <div className="cardServiceList">
        {isLoading || isDeleting ? (
          <div className="spinner"><ClipLoader color="var(--color-primary-4)" size={80}/></div>
        ) : (
          visibleCards.map((value, index) => (
            <div key={index} className="cardService">
              {isLoggedIn && clienteDataFetch?.rol === 'ADMIN' && (
                <FontAwesomeIcon
                  icon={faTrash}
                  className="iconDelete"
                  onClick={() => handleDeleteCard(value.id)}
                />
              )}
              <Link onClick={handleClick} to={`${routes.details}/${value.nombre}`}>
                <h3 className="title">{value.nombre}</h3>
                <img
                  className="img"
                  src={value.imagen[0]}
                  alt={`imagen ${value.nombre} servicio`}
                />
              </Link>
            </div>
          ))
        )}
      </div>
      <div className="carouselButtons">
        {paginaActual > 0 && (
          <button className="carouselButton" onClick={handlePrevPage}>
            <FontAwesomeIcon size="2x" icon={faChevronLeft} />
          </button>
        )}
        {serviciosCard.length > (paginaActual + 1) * cardsPorPagina && (
          <button className="carouselButton" onClick={handleNextPage}>
            <FontAwesomeIcon size="2x" icon={faChevronRight} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ServicesList


