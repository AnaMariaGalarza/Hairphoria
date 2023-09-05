import { useEffect } from 'react';
import { routes } from '../routes';
import "../styles/RegisterConfirm.css"

const RegisterConfirm = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = routes.home;
    }, 10000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="register-confirm-container">
      <h2 className="bienvenido">Bienvenido(a)!</h2>
      <p className="texto">
        Gracias por registrarte. Estamos emocionados de tenerte como parte de nuestra comunidad.
      </p>
    </div>
  );
};

export default RegisterConfirm;
