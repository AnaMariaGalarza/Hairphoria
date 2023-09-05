import { useGlobalStates } from "../Context/Context";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const { getDataFilterIdByEmail } = useGlobalStates();
  console.log("q hay aki:", getDataFilterIdByEmail)
  const {
    clienteDataFetch,
  } = getDataFilterIdByEmail();

  console.log("cliente data fetch desde rutas protegidas", clienteDataFetch);

  if ( clienteDataFetch.rol !== "ADMIN") {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
