import NotFound from "../pages/NotFound";
import DetailsService from "../components/DetailsService";
import RegisterConfirm from "../components/RegisterConfirm";
import RegisterConfirmDisable from "../components/RegisterConfirmDisable";
import Home from "../pages/Home";
import Services from "../pages/Services";
import { routes } from "../routes";


export const userMenu = [
  {
    id: 1,
    path: routes.registerconfirm,
    element: <RegisterConfirm />
  },
  {
    id: 2,
    path: routes.registerconfirmdisable,
    element: <RegisterConfirmDisable />
  },
  {
    id: 3,
    path: routes.home,
    element: <Home mostrarCards={true} />
  },
  {
    id: 4,
    path: "/:atributo",
    element: <Services />
  },
  {
    id: 5,
    path: `${routes.details}/:nombreServicio`,
    element: <DetailsService />
  },
  {
    id: 6,
    path: "*",
    element: <NotFound />
  },

];
