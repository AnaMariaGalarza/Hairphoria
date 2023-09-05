import { createContext, useContext } from "react";
import { useFetchAllClientes } from "../hooks/useFetchAllClientes";
import { useFetchCliente } from "../hooks/useFetchCliente";

const GlobalStates = createContext();

const Context = ({ children }) => {

  const reloadAndScroll = () => {
    window.location.reload();
  };

  const getClientIdByEmail = (allClientesData, email) => {
    if (Array.isArray(allClientesData)) {
      const filteredCliente = allClientesData?.find(cliente => cliente?.email === email);
      return filteredCliente ? filteredCliente?.id : null;
    }
    return null;
  };

  const { dataFetch: allClientesData, isLoading: allClientesLoading } =
    useFetchAllClientes();
  console.log("Console log de Context todos los clientes: ", allClientesData);

  const clientId = getClientIdByEmail(
    allClientesData,
    localStorage.getItem("email")
  );

  const { dataFetch: clienteDataFetch, isLoading: clienteLoading } =
    useFetchCliente(clientId);
  console.log("Console log de Context info un cliente: ", clienteDataFetch);

  const getDataFilterIdByEmail = () => {
    return {
      allClientesData,
      allClientesLoading,
      clientId,
      clienteDataFetch,
      clienteLoading,
    };
  };

  return (
    <GlobalStates.Provider value={{
      reloadAndScroll,
      getDataFilterIdByEmail
    }}>
      {children}
    </GlobalStates.Provider>
  );
};

export default Context;

export const useGlobalStates = () => useContext(GlobalStates);
