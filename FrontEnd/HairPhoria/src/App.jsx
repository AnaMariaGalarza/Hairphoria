import './index.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import UserRegister from './components/UserRegister'
import { useState } from 'react'
import AuthContextProvider from './Context/AuthContext'
import { userMenu } from './routes/UserMenu'
import { adminMenu } from './routes/AdminMenu'
import Login from './components/Login'
import { routes } from './routes'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Logout from './pages/Logout'
import Favorites from './pages/Favorites'
import RoleManagement from './pages/RoleManagement'

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <AuthContextProvider>
        <Header handleModalToggle={handleModalToggle} />
        {modalOpen && (
          <div className="modal-overlay">
            <UserRegister handleModalToggle={handleModalToggle} />
          </div>
        )}
        <Routes>
          {userMenu.map((menuItem) => (
            <Route key={menuItem.id} path={menuItem.path} element={menuItem.element} />
          ))}


          {adminMenu.map((menuItem) => (
            <Route key={menuItem.id} path={menuItem.path} element={menuItem.element} />
          ))}

          <Route path={routes.login} element={<Login handleModalToggle={handleModalToggle} />} />
          <Route path={routes.dashboard} element={<Dashboard />}>
            <Route path="profile" element={<Profile />}/>
            <Route path="logout" element={<Logout />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="adminpanel" element={<RoleManagement />} />
          </Route>

        </Routes>
        <Footer />
      </AuthContextProvider>
    </>
  )
}

export default App