import React, { useEffect, useState } from 'react';
import { useFetchServices } from '../hooks/useFetchServices';
import { ClipLoader } from "react-spinners";
import { useContext } from 'react';
import { AuthContext } from "../Context/AuthContext";
import { useGlobalStates } from "../Context/Context";
import swal from "sweetalert";
import { useFetchDeleteService } from "../hooks/useFetchDeleteService";
import { Link } from 'react-router-dom';
import { routes } from "../routes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faChevronLeft, faChevronRight, faTrash } from "@fortawesome/free-solid-svg-icons";


const ServiceSearch = ({ search }) => {

  const { dataFetch, isLoading } = useFetchServices();
  const { token } = useContext(AuthContext);
  const isLoggedIn = !!token;
  const { getDataFilterIdByEmail } = useGlobalStates();
  const { clienteDataFetch } = getDataFilterIdByEmail();

  // Delete Card
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
          // Eliminar el servicio del estado servicios
          setServicios((prevServicios) =>
            prevServicios.filter((servicio) => servicio.id !== id)
          );
        });
      } else {
        swal("El servicio no ha sido eliminado");
      }
    });
  };

  const { deleteData, isLoadingDelete: isDeleting } = useFetchDeleteService();

  // Render Imagenes
  const [servicios, setServicios] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    let serviciosFiltrados = [];
    if (!isLoading) {
      setShowSpinner(true);
      setTimeout(() => {
        serviciosFiltrados = dataFetch.filter((servicio) =>
          servicio.especialidad === search.categoria.value
        );
        serviciosFiltrados = serviciosFiltrados.filter((e) =>
          e.ubicaciones.some((servicio) => servicio.ciudad === search.ciudad.value)
        );
        setServicios(serviciosFiltrados);
        setShowSpinner(false);
      }, 500); // Mostrar el spinner durante 1 segundo
    }
  }, [dataFetch, isLoading, search]);

  const [paginaActual, setpaginaActual] = useState(0);
  const [cardsPorPagina, setCardsPorPagina] = useState(2);

  const startIndex = paginaActual * cardsPorPagina;
  const endIndex = startIndex + cardsPorPagina;
  const visibleCards = servicios.slice(startIndex, endIndex);

  const handleNextPage = () => {
    setpaginaActual((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setpaginaActual((prevPage) => prevPage - 1);
  };

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

  return (
    <div>
      <div className="servicesContainer">
        <h2 className="subtitulo titleCard">{search.categoria.value}</h2>
      </div>
      <div className="cardServiceList">
        {showSpinner || isLoading || isDeleting ? (
          <div className="spinner">
            <ClipLoader color="var(--color-primary-4)" size={80} />
          </div>
        ) : (
          visibleCards.map((value) => (
            <div key={value.id} className="cardService">
              {isLoggedIn && clienteDataFetch?.rol === 'ADMIN' && (
                <FontAwesomeIcon
                  icon={faTrash}
                  className="iconDelete"
                  onClick={() => handleDeleteCard(value.id)}
                />
              )}
              <Link to={`${routes.details}/${value.nombre}`}>
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
        {servicios.length > endIndex && (
          <button className="carouselButton" onClick={handleNextPage}>
            <FontAwesomeIcon size="2x" icon={faChevronRight} />
          </button>
        )}
      </div>
    </div>
  );

};

export default ServiceSearch;
