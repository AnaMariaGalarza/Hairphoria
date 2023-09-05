import { useEffect, useState } from "react";
import { useGlobalStates } from "../Context/Context";
import "../styles/RoleManagement.css";
import useFetchPutRol from "../hooks/useFetchPutRol";
import Select from 'react-select';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import { ClipLoader } from "react-spinners";

const RoleManagement = () => {
  // función global para traer todos los usuarios
  const { getDataFilterIdByEmail } = useGlobalStates();
  const { allClientesData, clienteDataFetch } = getDataFilterIdByEmail();
  const [loading, setLoading] = useState(true);

  // función para gestionar la selección de rol
  const { updateRol } = useFetchPutRol();

  // estado local para almacenar los roles actualizados
  const [updatedRoles, setUpdatedRoles] = useState({});
  useEffect(() => {
    if (allClientesData) {
      const initialRoles = {};
      allClientesData.forEach((cliente) => {
        initialRoles[cliente.id] = cliente.rol;
      });
      setUpdatedRoles(initialRoles);
      setLoading(false);
    }
  }, [allClientesData]);
  

  const handleRolChange = async (id, email, selectedOption) => {
    const newRol = selectedOption.value;
    await updateRol(id, email, newRol);
    setUpdatedRoles((prevUpdatedRoles) => ({
      ...prevUpdatedRoles,
      [id]: newRol,
    }));
  };

  // Genera las opciones para react-select
  const rolOptions = [
    { value: 'ADMIN', label: 'ADMIN' },
    { value: 'USUARIO', label: 'USUARIO' },
  ];

  const getSelectContainerClassName = (cliente) => {
    const selectedRol = updatedRoles[cliente.id];
    if (cliente.rol === 'ADMIN') {
      return `rol-select ${selectedRol === 'ADMIN' ? 'selected' : ''} admin`;
    } else if (cliente.rol === 'USUARIO') {
      return `rol-select ${selectedRol === 'USUARIO' ? 'selected' : ''} usuario`;
    }
    return 'rol-select';
  };

  const getSelectStyles = (cliente) => {


    const selectedRol = updatedRoles[cliente.id];
    const backgroundColor =
      selectedRol === 'ADMIN' ? 'var(--color-primary-0)' : selectedRol === 'USUARIO' ? 'var(--color-primary-4)' : 'var(--color-primary-0)';
    const placeholderColor = 'var(--color-primary-9)';
    return {
      control: (provided) => ({
        ...provided,
        backgroundColor: backgroundColor,

      }),
      singleValue: (provided) => ({
        ...provided,
        color: placeholderColor,
      }),
    };

  };

  return (
    <div className="containerAdmin">
      {loading ? (
      <div className="spinner">
        <ClipLoader color="var(--color-primary-4)" size={80} />
      </div>
    ) : (
      <>
      <div className="usersData">
        <div className="userTable">
          <div className="cardHeader">
            <h2 className="titleCardHeader">{clienteDataFetch?.nombre}, gestiona los roles</h2>
          </div>

          <table>
            <thead>
              <tr>
                <td>ID</td>
                <td>Nombre</td>
                <td>Correo</td>
                <td>Rol</td>
              </tr>
            </thead>

            <tbody>
              {allClientesData?.map((cliente) => (
                <tr key={cliente.id}>
                  <td>{cliente.id}</td>
                  <td className="nameCell">{cliente.nombre}</td>
                  <td className="emailCell">{cliente.email}</td>
                  <td>
                    <Select
                      className={getSelectContainerClassName(cliente)}
                      classNamePrefix="react-select"
                      value={rolOptions.find((option) => option.value === updatedRoles[cliente.id])}
                      options={rolOptions}
                      onChange={(selectedOption) => handleRolChange(cliente.id, cliente.email, selectedOption)}
                      placeholder={cliente.rol.toUpperCase()}
                      styles={getSelectStyles(cliente)}
                    />

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="addAdminPanel">
        <div className="buttonCategorie" id="buttonsAdmin">
          <h3>¡Aquí puedes agregar Categorías!</h3>
          <Link to={routes.addcategories}>
            <button className="addPlus">
              Añadir <FontAwesomeIcon icon={faPlus} />
            </button>
          </Link>
        </div>
        <div className="buttonService" id="buttonsAdmin">
          <h3>¡Aquí puedes agregar Servicios!</h3>
          <Link to={routes.addservices}>
            <button className="addPlus">
              Añadir <FontAwesomeIcon icon={faPlus} />
            </button>
          </Link>
        </div>
        <div className="buttonCity" id="buttonsAdmin">
          <h3>Gestiona las ciudades</h3>
          <Link to={routes.citys}>
            <button className="addPlus">
              Ver más
            </button>
          </Link>
        </div>
      </div>
      </>
    )}
    </div>
  );
};

export default RoleManagement;