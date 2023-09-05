import swal from "sweetalert";
import { useState, useEffect } from "react";
import { useFetchPostAddCategorie } from "../hooks/useFetchPostAddCategorie";
import usePostCategoryImg from "../hooks/usePostCategoryImg";

const AddCategorie = () => {
  const { addCategorie, isLoading, dataFetch } = useFetchPostAddCategorie();
  const { postCategoryImg, response } = usePostCategoryImg();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    console.log("file", file)
    if (file) {
      postCategoryImg(file);
    }
  };

  const [nuevaCategoria, setNuevaCategoria] = useState({
    especialidad: "",
    descripcion: "",
    imagen: ""
  });

  useEffect(() => {
    if (response) {
      setNuevaCategoria((prevCategoria) => ({
        ...prevCategoria,
        imagen: response
      }));
      console.log("qq", setNuevaCategoria)
    }
  }, [response]);

  useEffect(() => {
    if (dataFetch && !isLoading) {
      if (dataFetch.error) {
        swal({
          text: "Error al agregar la categoría",
          icon: "error",
          button: "Aceptar",
        });
      } else {
        swal({
          text: "¡Categoría agregada exitosamente!",
          icon: "success",
          button: "Aceptar",
        });
      }

      setNuevaCategoria({
        especialidad: "",
        descripcion: "",
        imagen: ""
      });
    }
  }, [dataFetch, isLoading]);

  const validateForm = () => {
    for (const key in nuevaCategoria) {
      if (!nuevaCategoria[key] || nuevaCategoria[key] === "") {
        swal({
          text: "Todos los campos son requeridos",
          icon: "warning",
          button: "Aceptar",
        });
        return false;
      }
    }
    return true;
  };
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNuevaCategoria((prevCategoria) => ({
      ...prevCategoria,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }

    await addCategorie(nuevaCategoria);
    console.log("Nueva categoría enviada jojo:", nuevaCategoria);
  };

 

  console.log("nuevaCategoria:", nuevaCategoria);

  return (
    <div className="contenedor">
      <div className="contenedorForm">
        <h2>Agregar Categoría</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="categoria">*Categoría:</label>
            <input
              type="text"
              id="categoria"
              className="input"
              name="especialidad"
              value={nuevaCategoria.especialidad}
              onChange={handleChange}
              placeholder="Agregar nombre"
            />
          </div>
          <div>
            <label htmlFor="descripcion">Descripción:</label>
            <textarea
              id="descripcion"
              name="descripcion"
              className="input"
              value={nuevaCategoria.descripcion}
              onChange={handleChange}
              placeholder="Descripción de la categoría"
            />
          </div>

          <div>
            <label htmlFor="img">*Imagen: </label>
            <input
              className="inputFile"
              type="file"
              id="img"
              name="img"
              onChange={handleImageUpload}
            />
          </div>
          {nuevaCategoria.imagen && (
            <>
              <label>Imagen: </label>
              <img
                src={nuevaCategoria.imagen}
                alt="Imagen seleccionada"
                style={{ width: "200px" }}
              />
            </>
          )}

          <button className="buttonSubmit" type="submit">
            Agregar
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCategorie;