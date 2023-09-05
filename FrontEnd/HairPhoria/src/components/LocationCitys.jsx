import { useEffect, useState } from "react";
import useGetCitys from "../hooks/useGetCitys";
import { usePutLocation } from "../hooks/usePutLocation";
import { faPenToSquare, faTrash, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/AddCitys.css"
import swal from "sweetalert";

const LocationCitys = () => {
  const { cities, getCities } = useGetCitys();
  const { editCity, deleteCity } = usePutLocation();
  const [editedCity, setEditedCity] = useState(null);
  const [updatedCities, setUpdatedCities] = useState([]);


  const [ciudadEditada, setCiudadEditada] = useState({
    ciudad: "",
    coordenadas: {
      x: 0.00,
      y: 0.00
    }
  });

  const [editingIndex, setEditingIndex] = useState(-1);

  const handleEditClick = async (city, index) => {
    try {
      setEditedCity(city);
      setCiudadEditada(city);
      setEditingIndex(index);
    } catch (error) {
    }
  };
     

  const handleSaveClick = async (locationCiudad, ciudad, coordenadas) => {
    try {
      await editCity(locationCiudad, {
        ciudad,
        coordenadas
      });
      swal({
        text: "¡Ciudad editada exitosamente!",
        icon: "success",
        button: "Aceptar",
      });
    } catch (error) {
      swal({
        text: "Error al editar la ciudad",
        icon: "error",
        button: "Aceptar",
      });
    }
    setEditedCity(null);
    setEditingIndex(-1);
  }

  const handleDeleteClick = (locationCiudad) => {
    swal({
      title: '¿Está seguro que desea eliminar esta ciudad?',
      icon: 'warning',
      buttons: ['Cancelar', 'Aceptar'],
      dangerMode: true,
    }).then(async (confirmDelete) => {
      if (confirmDelete) {
        try {
          await deleteCity(locationCiudad);
          swal({
            text: '¡Ciudad eliminada exitosamente!',
            icon: 'success',
            button: 'Aceptar',
          });
          setUpdatedCities(cities.filter((city) => city.ciudad !== locationCiudad));
        } catch (error) {
          swal({
            text: 'Error al eliminar la ciudad',
            icon: 'error',
            button: 'Aceptar',
          });
        }
      } else {
        swal('La eliminación de la ciudad ha sido cancelada', {
          icon: 'info',
          buttons: false,
          timer: 2000,
        });
      }
    });
  };

  const handleCancelEdit = () => {
    swal({
      title: '¿No desea editar la ciudad?',
      icon: 'info',
      buttons: ['Cancelar', 'Aceptar'],
    }).then((result) => {
      if (result) {
        setEditedCity(null);
        setCiudadEditada(ciudadEditada);
        setEditingIndex(-1);
        swal('La edición de la ciudad ha sido cancelada', {
          icon: 'success',
          buttons: false,
          timer: 2000,
        });
      }
    });
  };
  
  

  useEffect(() => {
    setUpdatedCities(cities);
  }, [cities]);
  

  useEffect(() => {
    if (editedCity === null) {
      getCities();
    }
  }, [editedCity, updatedCities]);
  

  return (
    <div className="containerShowListCitys">
      <div className="showListCitys">
        <table>
          <thead>
            <tr>
              <th>Ciudad</th>
              <th>Coordenadas</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {updatedCities?.map((location, index) => (
              <tr key={location.ciudad}>
                <td className="ciudadInput">
                  {editingIndex === index ? (
                    <input
                      type="text"
                      name="cityname"
                      id="cityname"
                      value={ciudadEditada.ciudad}
                      onChange={(e) =>
                        setCiudadEditada({
                          ...ciudadEditada,
                          ciudad: e.target.value
                        })
                      }
                    />
                  ) : (
                    <p>{location.ciudad}</p>
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <div className="coordenadasButtons">
                      <input
                        type="text"
                        name="coordenadasX"
                        id="coordenadasX"
                        placeholder="Ingrese la coordenada X"
                        value={ciudadEditada.coordenadas.x}
                        onChange={(e) =>
                          setCiudadEditada({
                            ...ciudadEditada,
                            coordenadas: {
                              ...ciudadEditada.coordenadas,
                              x: e.target.value
                            }
                          })
                        }
                      />
                      <input
                        type="text"
                        name="coordenadasY"
                        id="coordenadasY"
                        placeholder="Ingrese la coordenada Y"
                        value={ciudadEditada.coordenadas.y}
                        onChange={(e) =>
                          setCiudadEditada({
                            ...ciudadEditada,
                            coordenadas: {
                              ...ciudadEditada.coordenadas,
                              y: e.target.value
                            }
                          })
                        }
                      />
                    </div>
                  ) : (
                    <div>
                      {location.coordenadas.x}, {location.coordenadas.y}
                    </div>
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <div className="editButtons">
                    <FontAwesomeIcon
                      icon={faCheck}
                      onClick={() =>
                        handleSaveClick(
                          location.ciudad,
                          ciudadEditada.ciudad,
                          ciudadEditada.coordenadas
                        )
                      }
                    />
                    <FontAwesomeIcon 
                    icon={faXmark}
                    onClick={handleCancelEdit}
                     />
                    </div>
                  ) : (
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      onClick={() => handleEditClick(location, index)}
                    />
                  )}
                </td>
                <td>
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => handleDeleteClick(location.ciudad)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LocationCitys;
