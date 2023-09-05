import { useEffect, useState } from 'react'
import '../styles/Modal.css';
import "../styles/AddCitys.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert';

const Location = ({ listServices, nuevaCiudad, setNuevaCiudad}) => {


    const handleFormSubmit = async (event) => {
        event.preventDefault();
        localStorage.setItem("ciudad", JSON.stringify(nuevaCiudad))
    
        setIsOpen(false)
        swal({
          text: "La ciudad ingresada fue añadida, por favor selecciona la nueva ciudad antes de agregar el servicio para que sea agregada exitosamente.",
          icon: "success",
          button: "Aceptar",
        });

        setNuevaCiudad({ 
                    ciudad: nuevaCiudad.ciudad,
                    coordenadas: {
                        x: parseFloat(nuevaCiudad.coordenadas.x),
                        y: parseFloat(nuevaCiudad.coordenadas.y)
                    }
        });

        setNuevaCiudad({ 
            ciudad: "",
            coordenadas: {
              x: "",
              y: ""
            }
          });
    };
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <div className="locationContainer">
                <div
                    onClick={openModal}
                    className='buttonLocation'>
                    Añadir ciudad
                </div>
          
            {isOpen && (
                    <div className="modal-overlay">
                        <div className="modalContainerCity">
                            <button className="modalClose" onClick={closeModal}>
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                            <div className="formLocation">
                                <div >
                                    <label htmlFor="cityname">Ciudad*</label>
                                    <input
                                        type="text"
                                        name="cityname"
                                        id="cityname"
                                        placeholder="Ingrese el nombre de la ciudad"
                                        value={nuevaCiudad.ciudad}
                                        onChange={(e) =>
                                            setNuevaCiudad({
                                                ...nuevaCiudad,
                                                ciudad: e.target.value
                                            })
                                        }
                                    />
                                    <label htmlFor="coordenadasX">Coordenadas x*</label>
                                    <input
                                        type="text"
                                        name="coordenadasX"
                                        id="coordenadasX"
                                        placeholder="Ingrese la coordenada x"
                                        value={nuevaCiudad.coordenadas?.x}
                                        onChange={(e) =>
                                            setNuevaCiudad({
                                                ...nuevaCiudad,
                                                coordenadas: {
                                                    ...nuevaCiudad.coordenadas,
                                                    x: e.target.value
                                                }
                                            })
                                        }
                                    />
                                    <label htmlFor="coordenadasY">Coordenadas y*</label>
                                    <input
                                        type="text"
                                        name="coordenadasY"
                                        id="coordenadasY"
                                        placeholder="Ingrese la coordenada y"
                                        value={nuevaCiudad.coordenadas?.y}
                                        onChange={(e) =>
                                            setNuevaCiudad({
                                                ...nuevaCiudad,
                                                coordenadas: {
                                                    ...nuevaCiudad.coordenadas,
                                                    y: e.target.value
                                                }
                                            })
                                        }
                                    />
                                    <button className="buttonSubmitCity" type="submit" onClick={handleFormSubmit} >
                                        Agregar
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
            )}
        </div>
    )
}

export default Location