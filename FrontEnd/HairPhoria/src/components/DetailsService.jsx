import { useEffect, useState } from "react";
import "../styles/DetailsService.css";
import { useParams } from "react-router-dom";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faScissors,
  faLocationDot,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { useFetchServices } from "../hooks/useFetchServices";
import { ClipLoader } from "react-spinners";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Helmet } from "react-helmet";
import PoliticasComponents from "./PoliticasComponents";
import Star from "./Star";
import Comment from "./Comment";
import IconFav from "./IconFav";
import ModalShare from "./ModalShare";
import Map from "./Map";
import ModalReservar from "./ModalReservar";

const DetailsService = () => {
  const { nombreServicio } = useParams();
  const { dataFetch, isLoading } = useFetchServices();

  const [service, setService] = useState(null);

  const [imgSelect, setSelect] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenShare, setIsOpenShare] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImageIndexModal, setCurrentImageIndexModal] = useState(0);
  const [selectedTab, setSelectedTab] = useState("descripcion");
  const [id, setId] = useState("");

  const [isOpenModalReservar, setIsOpenModalReservar] = useState(false);

  const handleChange = (event) => {
    const { value } = event.target;
    setId(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (id) {
      await updateService({ terminos: { id: id } }, service.id);
    }
  };

  useEffect(() => {
    if (dataFetch) {
      const servicio = dataFetch?.find(
        (value) => value.nombre === nombreServicio
      );
      setService(servicio);
    }
  }, [nombreServicio, dataFetch]);

  console.log("servicio detalle:", service);
  const handleTabClick = (tabIndex) => {
    let tabName;
    if (tabIndex === 0) {
      tabName = "descripcion";
    } else if (tabIndex === 1) {
      tabName = "servicio";
    } else if (tabIndex === 2) {
      tabName = "comentarios";
    }
    setSelectedTab(tabName);
  };

  const openModalReservar = () => {
    setIsOpenModalReservar(true);
  };

  const closeModalReservar = () => {
    setIsOpenModalReservar(false);
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  const openModalShare = () => {
    setIsOpenShare(true);
  };

  const closeModalShare = () => {
    setIsOpenShare(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  if (isLoading) {
    return (
      <div className="spinner  ">
        <ClipLoader color="var(--color-primary-4)" size={80} />
      </div>
    );
  }

  if (!service) {
    return <div>No se encontró el servicio.</div>;
  }

  const TABS = {
    descripcion: 0,
    servicio: 1,
    comentarios: 2,
  };

  const principalImage = service?.imagen[currentImageIndex];
  const carruselImages = service?.imagen.filter(
    (_, index) => index !== currentImageIndex
  );
  const servicioReplace = service?.nombre.replaceAll(" ", "%20");
  const urlWithReplace = `http://s3-hairphoria-front.s3-website.us-east-2.amazonaws.com/details/${servicioReplace}`;
  const shareTitle = service?.nombre;
  const shareDescription = service?.descripcion;
  const shareImage = service?.imagen[currentImageIndex];


  // precio punto
  const precioPunto = service?.precio;
  const formattedPrecioPunto = precioPunto?.toLocaleString("es", {
    minimumFractionDigits: 0,
    maximumFractionDigits: precioPunto % 1 === 0 ? 0 : 1,
  }).replace(",", ".");

  console.log(formattedPrecioPunto);

  return (
    <div className="contentDescription">
      <Link className="back" to="#" onClick={() => window.history.back()}>
        <button className="backButton">
          <FontAwesomeIcon icon={faArrowLeftLong} />
        </button>
      </Link>
      <div className="headerLocation">
        <div className="locationContainer">
          <div className="locationContain">
            <FontAwesomeIcon icon={faLocationDot} />
            <h4>Ciudad:</h4> <p>{service?.ubicaciones.length > 0 ? service?.ubicaciones[0].ciudad : "Este servicio no tiene una ciudad asignada"}</p>
            <h4>Latitud:</h4> <p>{service?.ubicaciones.length > 0 ? service?.ubicaciones[0].coordenadas.y : "No definida"} </p>
            <h4>Longitud:</h4> <p> {service?.ubicaciones.length > 0 ? service?.ubicaciones[0].coordenadas.x : "No definida"}</p>
          </div>

          <div>
            <Helmet>
              <meta property="og:title" content={shareTitle} />
              <meta property="og:description" content={shareDescription} />
              <meta
                property="og:image"
                content={`${shareImage}?w=1200&h=630`}
              />
            </Helmet>
          </div>
          <ModalShare
            isOpen={isOpenShare}
            onClose={closeModalShare}
            shareUrl={urlWithReplace}
          />
        </div>

        <span className="puntuacion">
          <div className="share" onClick={openModalShare}>
            <FontAwesomeIcon icon={faShareNodes} />
          </div>

          <Star service={service} />

        </span>
      </div>
      <div className="containerDetails">
        <div className="content-images">
          <img
            className="imgPrincipalDescription"
            src={principalImage}
            alt="Imagen Principal"
          />
          <div className="gridImg">
            {carruselImages.map((e, i) => (
              <div key={i} className="imgContainer">
                <img
                  id={`img${i}`}
                  className="imgCarruselDescription"
                  src={e}
                  alt={`Imagen ${i}`}
                  onClick={() => selectImage(i + 1)}
                  style={{
                    opacity: imgSelect === i ? "1" : "0.8",
                  }}
                />
                {i === 3 && (
                  <span className="button-span" onClick={openModal}>
                    Ver más
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="containerDescription">
          <div className="text-description">
            <h4 className="title-categoria">{service?.especialidad}</h4>
            <h2 className="title-description">{service?.nombre}</h2>
            <div className="precioPuntuacion">
              <span className="price">${formattedPrecioPunto}</span>
            </div>
            <div className="favorite">
              <IconFav service={service} />
            </div>
            <div className="divButtonReservar">
            <button className='buttonReservar' onClick={openModalReservar}>¡No esperes más! Haz clic para agendar tu cita</button>
            {isOpenModalReservar && (
            <div>
              <ModalReservar closeModalReservar={closeModalReservar}></ModalReservar>
            </div>
      )}
            </div>
          </div>
          <br />
          <br />

          <Tabs selectedIndex={TABS[selectedTab]} onSelect={handleTabClick}>
            <TabList className="tabs-container">
              <Tab
                className={`select ${
                  selectedTab === "descripcion" ? "selected" : ""
                }`}
              >
                Descripción
              </Tab>
              <Tab
                className={`select ${
                  selectedTab === "servicio" ? "selected" : ""
                }`}
              >
                Nuestro servicio incluye
              </Tab>
              <Tab
                className={`select ${
                  selectedTab === "comentarios" ? "selected" : ""
                }`}
              >
                Comentarios
              </Tab>
            </TabList>

            <TabPanel>
              <div className="contenedorInfo">
                <p className="p-description">{service.descripcion}</p>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="contenedorInfo">
                <div className="atributos-description">
                  <ul>
                    {service?.atributos.map((e, i) => (
                      <li
                        key={i}
                        style={{ listStyleType: "none", marginBottom: "5px" }}
                      >
                        <FontAwesomeIcon
                          icon={faScissors}
                          style={{ marginRight: "8px" }}
                        />
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <Comment service={service} />
            </TabPanel>
          </Tabs>
        </div>
      </div>
      <div className="politicas-description1">
        <PoliticasComponents service={service}></PoliticasComponents>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        images={service?.imagen}
        currentImageIndexModal={currentImageIndexModal}
        setCurrentImageIndexModal={setCurrentImageIndexModal}
      >
        <div className="modalContent">
          <img
            className="imgPrincipalModal"
            src={service?.imagen[currentImageIndexModal]}
            alt="Imagen Principal"
          />
          <div className="modalCarrusel">
            {service?.imagen.map((e, i) => {
              return (
                <img
                  key={i}
                  id={`modImg${i}`}
                  className="imgCarruselModal"
                  src={e}
                  alt={`Imagen ${i}`}
                  onClick={() => setCurrentImageIndexModal(i)}
                  style={{
                    border:
                      currentImageIndexModal === i
                        ? "2px solid var(--color-primary-4)"
                        : "none",
                  }}
                />
              );
            })}
          </div>
        </div>
      </Modal>

      {service?.ubicaciones.length > 0 && (
        <>
          <h2 className="titleMap">Encuéntranos aquí</h2>
          <Map service={service} />
        </>
      )}
    </div>
  );
};

export default DetailsService;
