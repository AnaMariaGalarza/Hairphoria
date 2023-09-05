import "../styles/AddService.css";
import swal from "sweetalert";
import { useEffect, useState } from "react";
import { useFetchAddService } from "../hooks/useFetchAddService";
import { useFetchCategories } from "../hooks/useFetchCategories";
import { useFetchServices } from "../hooks/useFetchServices";
import usePostServiceImg from "../hooks/usePostServiceImg";
import useGetCitys from "../hooks/useGetCitys";
import Location from "./Location";

const AddService = () => {
  const { agregarServicio } = useFetchAddService();
  const { dataFetch } = useFetchCategories();
  const { dataFetch: servicios } = useFetchServices();
  const listServices = servicios;
  const { postServiceImg, response } = usePostServiceImg();
  const { cities } = useGetCitys();
  const [ubicacionesIndices, setUbicacionesIndices] = useState([]);
  const [nuevaCiudad, setNuevaCiudad] = useState({
            ciudad: "",
            coordenadas: {
                x: null,
                y: null
            }
});

const ciudadLocalStorage = JSON.parse(localStorage.getItem("ciudad"))
const ubicacionesConcat = ciudadLocalStorage ? cities.concat(ciudadLocalStorage) : cities

console.log(cities)
console.log(ubicacionesIndices)
console.log(ubicacionesConcat)
console.log("localStorage", ciudadLocalStorage)



  const handleChangeImg = async (event) => {
    const fileList = [...event.target.files];
    if (fileList.length > 0) {
      try {
        const imgUrls = await postServiceImg(fileList);
        setNuevoServicio((prevService) => ({
          ...prevService,
          imagen: imgUrls,
        }));
      } catch (error) {
        console.error("Error al subir las imágenes", error);
        swal({
          text: "Error al subir las imágenes",
          icon: "error",
          button: "Aceptar",
        });
      }
    }
  };

  const handleUbicacionesChange = (event) => {
    const { value, checked } = event.target;
    setUbicacionesIndices((prevIndices) => {
      if (checked) {
        return [...prevIndices, parseInt(value)];
      } else {
        return prevIndices.filter((index) => index !== parseInt(value));
      }
    });
  };
  

  const [nuevoServicio, setNuevoServicio] = useState({
    nombre: "",
    descripcion: "",
    especialidad: "",
    precio: "",
    palabrasClave: [],
    imagen: [],
    atributos: [],
    ubicaciones: [],
  });
  const [precioError, setPrecioError] = useState("");

  const validateForm = () => {
    let camposVacios = false;

  for (const key in nuevoServicio) {
    if (!nuevoServicio[key]) {
      camposVacios = true;
      break;
    }
  }

  if (camposVacios) {
    swal({
      text: "Todos los campos son requeridos",
      icon: "warning",
      button: "Aceptar",
    });
    return false;
  }
    const nombreServicio = nuevoServicio.nombre;
    const servicioExistente = servicios?.find(
      (servicio) => servicio.nombre === nombreServicio
    );
    

    if (servicioExistente) {
      swal({
        text: "El nombre de este servicio ya existe, por favor ingresa uno nuevo",
        icon: "warning",
        button: "Aceptar",
      });
      return false;
    }
    if (!nuevoServicio.atributos.length) {
      swal({
        text: "El campo 'atributos' es requerido",
        icon: "warning",
        button: "Aceptar",
      });
      return false;
    }
  
    if (!nuevoServicio.palabrasClave.length) {
      swal({
        text: "El campo 'palabras clave' es requerido",
        icon: "warning",
        button: "Aceptar",
      });
      return false;
    }
  
    if (nuevoServicio.imagen.length !== 5) {
      swal({
        text: "Debe seleccionar exactamente 5 imágenes",
        icon: "warning",
        button: "Aceptar",
      });
      return false;
    }

    if (ubicacionesIndices.length === 0) {
      swal({
        text: "Debe seleccionar al menos una ciudad",
        icon: "warning",
        button: "Aceptar",
      });
      return false;
    }

    return true;
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const nuevoServicioObj = {
      nombre: nuevoServicio.nombre,
      precio: parseFloat(nuevoServicio.precio),
      imagen: nuevoServicio.imagen,
      descripcion: nuevoServicio.descripcion,
      especialidad: nuevoServicio.especialidad,
      palabrasClave: nuevoServicio.palabrasClave,
      atributos: nuevoServicio.atributos,
      ubicaciones: ubicacionesIndices.map((index) => ubicacionesConcat[index]),
      terminos : {id:1}
    };

    try {
      await agregarServicio(nuevoServicioObj);

      swal({
        text: "¡Servicio agregado exitosamente!",
        icon: "success",
        button: "Aceptar",
      });

      setNuevoServicio({
        nombre: "",
        precio: "",
        imagen: [],
        descripcion: "",
        especialidad: "",
        palabrasClave: [],
        atributos: [],
        ubicaciones: [],
      });
    } catch (error) {
      console.error("Error al agregar el servicio", error);
      swal({
        text: "Error al agregar el servicio",
        icon: "error",
        button: "Aceptar",
      });
    }
  };

  useEffect(() => {
    if (response) {
      setNuevoServicio((prevService) => ({
        ...prevService,
        imagen: response,
      }));
    }
  }, [response]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "palabrasClave") {
      // Convertir las palabras clave separadas por comas en un array
      const palabrasClaveArray = value
        .split(",")
        .map((palabra) => palabra.trim());
      setNuevoServicio((prevServicio) => ({
        ...prevServicio,
        [name]: palabrasClaveArray,
      }));
    } else if (name === "atributos") {
      const atributoArray = value
        .split(",")
        .map((atributos) => atributos.replace(/^\s+/, ""));
      setNuevoServicio((prevServicio) => ({
        ...prevServicio,
        [name]: atributoArray,
      }));
    } else if (name === "imagen") {
      // Obtener los archivos de imagen seleccionados
      const imgFiles = event.target.files;

      // Verificar que se seleccionen exactamente 5 imágenes
      if (imgFiles.length !== 5) {
        swal({
          text: "Debe seleccionar 5 imágenes",
          icon: "error",
          button: "Aceptar",
        });
        return false;
      }
    } else if (name === "precio") {
      if (!/^\d*\.?\d*$/.test(value)) {
        setPrecioError("Recuerda que solo debes ingresar números");
      } else {
        setPrecioError("");
      }
      setNuevoServicio((prevServicio) => ({
        ...prevServicio,
        [name]: value,
      }));
    } else {
      setNuevoServicio((prevServicio) => ({
        ...prevServicio,
        [name]: value,
      }));
    }
  };

  return (
    <div className="contenedor">
      <div className="contenedorForm">
        <h3 className="ServiceTitulo">Agregar Servicio</h3>
        <form>
          <div>
            <label htmlFor="nombre">Servicio: *</label>
            <input
              type="text"
              id="nombre"
              className="input"
              name="nombre"
              value={nuevoServicio.nombre}
              onChange={handleChange}
              placeholder="Agregar el Servicio"
            />
          </div>
          <div>
            <label htmlFor="descripcion">Descripción: *</label>
            <textarea
              id="descripcion"
              name="descripcion"
              className="input"
              value={nuevoServicio.descripcion}
              onChange={handleChange}
              placeholder="Descripción del servicio"
            />
          </div>
          <div>
            <label htmlFor="especialidad">Categoría: *</label>
            <select
              id="especialidad"
              name="especialidad"
              className="input"
              value={nuevoServicio.especialidad}
              onChange={handleChange}
            >
              <option value="" className="input">
                ✂ Categorías
              </option>
              {dataFetch &&
                dataFetch.map((categorias) => (
                  <option key={categorias.id} value={categorias.especialidad}>
                    {categorias.especialidad}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label htmlFor="precio">Precio: *</label>
            <input
              type="text"
              id="precio"
              name="precio"
              className="inputPrecio"
              value={nuevoServicio.precio}
              onChange={handleChange}
              placeholder="Agregar el Precio, solo ingresar numeros..."
            />
            {precioError && <p className="errorText">{precioError}</p>}
          </div>
          <div>
            <label htmlFor="palabrasClave">Palabras Clave: *</label>
            <input
              type="text"
              id="palabrasClave"
              className="inputPalabraClave"
              name="palabrasClave"
              value={nuevoServicio.palabrasClave.join(", ")}
              onChange={handleChange}
              placeholder="Ingrese palabras claves separados por comas. Ejemplo: Palabra1., Palabra2., Palabra3.,"
            />
          </div>
          <div>
            <label htmlFor="atributos">Atributo: *</label>
            <input
              type="text"
              id="atributos"
              className="inputAtributos"
              name="atributos"
              value={nuevoServicio.atributos.join(", ")}
              onChange={handleChange}
              placeholder="Ingrese atributo separados por comas. Ejemplo: Primer Atributo., Segundo Atributo.,"
            />
          </div>
          <div>
            <Location listServices={listServices} nuevaCiudad={nuevaCiudad} setNuevaCiudad={setNuevaCiudad}/>
          </div>
          <div>
            <label htmlFor="ubicaciones">Ciudad: *</label>
            <br/><br/>
            {ubicacionesConcat &&
              ubicacionesConcat.map((ciudad, index) => (
                <div key={index} className="containerCheckbox">
                  <input
                    type="checkbox"
                    id={`ciudad-${index}`}
                    name="ubicaciones"
                    value={index}
                    checked={ubicacionesIndices.includes(index)}
                    onChange={handleUbicacionesChange}
                    className="inputCiudad"
                  />
                  <label htmlFor={`ciudad-${index}`} className="ciudadNombre">{ciudad.ciudad}</label>
                </div>
              ))}
          </div>
          <div>
            <label htmlFor="imagen">Imagen: *</label>
            <input
              className="inputFile"
              type="file"
              id="imagen"
              name="imagen"
              onChange={handleChangeImg}
              multiple
            />
          </div>
          {nuevoServicio?.imagen?.length === 5 ? (
            <div className="containerImageSelected">
              <label>Imagenes Seleccionadas: </label>
              <img src={nuevoServicio.imagen[0]} alt="Imagen seleccionada" className="imageSelected"/>
              <img src={nuevoServicio.imagen[1]} alt="Imagen seleccionada" className="imageSelected"/>
              <img src={nuevoServicio.imagen[2]} alt="Imagen seleccionada" className="imageSelected"/>
              <img src={nuevoServicio.imagen[3]} alt="Imagen seleccionada" className="imageSelected"/>
              <img src={nuevoServicio.imagen[4]} alt="Imagen seleccionada" className="imageSelected"/>
            </div>
          ) : (
            ""
          )}

          <button 
          className="buttonSubmit" 
          type="submit"
          onClick={handleSubmit}>
            Agregar
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddService;