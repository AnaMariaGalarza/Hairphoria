import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/Dashboard.css"
import { NavLink, useNavigate, Outlet } from "react-router-dom";
import { faClipboardUser, faUsers, faHeart, faUser, faArrowRightFromBracket, faBars, faXmark }
  from '@fortawesome/free-solid-svg-icons';
import { useGlobalStates } from '../Context/Context';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Profile from './Profile';

const Dashboard = () => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const isLoggedIn = !!token;

  useEffect(() => {
    document.body.style.backgroundColor = "var(--color-primary-9)";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const { getDataFilterIdByEmail } = useGlobalStates();
  const {
    clienteDataFetch,
    allClientesData,  
  } = getDataFilterIdByEmail();
  console.log(allClientesData);
  console.log(clienteDataFetch)

  const itemsSideBar = [
    {
      id: 1,
      icon: <FontAwesomeIcon icon={faClipboardUser} />,
      title: "Opciones de usuario",
    },
    {
      id: 2,
      icon: <FontAwesomeIcon icon={faUsers} />,
      title: "Admin panel",
      path: "/dashboard/adminpanel"
    },
    {
      id: 3,
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "Perfil",
      path: "/dashboard/profile"
    },
    {
      id: 4,
      icon: <FontAwesomeIcon icon={faHeart} />,
      title: "Favoritos",
      path: "/dashboard/favorites"
    },
    {
      id: 5,
      icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
      title: "Cerrar sesión",
      path: "/dashboard/logout"
    },
  ];

  const clienteRol = clienteDataFetch?.rol;

  const filteredItemsSideBar = itemsSideBar.filter((item) => {
    if (item?.title === "Admin panel" && clienteRol !== "ADMIN") {
      return false;
    }
    return true;
  });

  //evento de hover sobre items de bar
  const listBar = document.querySelectorAll(".sideBar li");
  function activeLink() {
    listBar.forEach(item => {
      item.classList.remove("hovered");
    })
    this.classList.add("hovered");
  }
  listBar.forEach(item => item.addEventListener("mouseover", activeLink))


  const [isActive, setIsActive] = useState(false);

  const [currentComponent, setCurrentComponent] = useState();
  const handleItemClick = (component) => {
    setCurrentComponent(component);
  };

  const handleToggleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      {isLoggedIn ? (
        <div className="container">
          <div className={`sideBar ${isActive ? "active" : ""}`}>
            <ul>
              {filteredItemsSideBar.map((item) => (
                <li key={item.id}>
                  <NavLink to={item.path} onClick={() => handleItemClick(item.component)}>
                    <span className="iconBar">{item.icon}</span>
                    <span className="titleBar">{item.title}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="closeSideBar" >
              <FontAwesomeIcon icon={faXmark} onClick={handleToggleClick}/>
            </div>
            
          </div>
          <div className={`mainBar ${isActive ? "active" : ""}`}>
          <div className="toggleBar" onClick={handleToggleClick}>
              <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="mainBar-content">
              {currentComponent}
              <Outlet />
            </div>
          </div>
        </div>
      ) : (
        navigate("/")
      )}
    </>
  );
};

export default Dashboard;