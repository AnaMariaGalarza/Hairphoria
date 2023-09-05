import AddCategorie from "../components/AddCategorie";
import AddService from "../components/AddService";
import LocationCitys from "../components/LocationCitys";
import { routes } from "../routes";

export const adminMenu = [
    {
        id: 1,
        path: routes.addservices,
        element: <AddService />
    },
    {
        id: 2,
        path: routes.addcategories,
        element: <AddCategorie />
    },
    {
        id: 3,
        path: routes.citys,
        element: <LocationCitys />
    }
    
]