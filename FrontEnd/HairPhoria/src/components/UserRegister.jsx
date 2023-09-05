import { useEffect, useState } from "react";
import "../styles/UserRegister.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";
import { useFetchRegister } from "../hooks/useFetchRegister";
import { useFetchServices } from "../hooks/useFetchServices";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { routes } from "../routes";

const UserRegister = ({ handleModalToggle }) => {

  const { register } = useFetchRegister();
  const { dataFetch, isLoading } = useFetchServices();
  const [registerError, setRegisterError] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      if (dataFetch && dataFetch.length > 0) {
        setRandomIndex((prevIndex) => (prevIndex + 1) % dataFetch.length);
      }
    }, 3000);
  
    return () => clearInterval(interval);
  }, [dataFetch]);

  const [user, setUser] = useState({
    name: "",
    lastName: "",
    email: "",
    documento: "",
    password: "",
    passwordconfirm: "",
    rol:"usuario"
  });

  const [randomIndex, setRandomIndex] = useState(0);
  
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [invalidCharactersName, setInvalidCharactersName] = useState(false);
  const [invalidCharactersLastName, setInvalidCharactersLastName] = useState(false);
  const [invalidNumbers, setInvalidNumbers] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisibleConfirm, setPasswordVisibleConfirm] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setUser((prevUser) => ({ ...prevUser, [name]: newValue }));

    if (name === "password") {
      const uppercaseRegex = /[A-Z]/;
      const symbolRegex = /[!@#$%^&*()\-_=+[\]{};:'"\\|,.<>/?`~]/;

      const hasUppercase = uppercaseRegex.test(value);
      const hasSymbol = symbolRegex.test(value);

      if (!hasUppercase || !hasSymbol) {
        setInvalidPassword(true);
      } else {
        setInvalidPassword(false);
      }
    }

    if (name === "passwordconfirm") {
      setPasswordMatch(value === user.password);
    }

    if (name === "name") {
      if (/^[a-zA-Z\s]*$/.test(value)) {
        setInvalidCharactersName(false);
      } else {
        setInvalidCharactersName(true);
      }
    }

    if (name === "lastName") {
      if (/^[a-zA-Z\s]*$/.test(value)) {
        setInvalidCharactersLastName(false);
      } else {
        setInvalidCharactersLastName(true);
      }
    }

    if (name === "documento") {
      if (/^\d+$/.test(value)) {
        setInvalidNumbers(false);
      } else {
        setInvalidNumbers(true);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (invalidPassword) {
      swal({
        text: "Tu contraseña debe contener una letra mayúscula y un signo",
        icon: "warning",
        button: "Aceptar",
      });
      return; // Stop execution if the password is invalid
    }

    if (invalidCharactersName || invalidCharactersLastName) {
      swal({
        text: "Tu nombre y apellido solo pueden contener letras",
        icon: "warning",
        button: "Aceptar",
      });
      return; // Stop execution if the name or last name is invalid
    }

    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValidation.test(user.email)) {
      swal({
        text: "El correo electrónico debe tener el formato correcto (ejemplo@dominio.com)",
        icon: "warning",
        button: "Aceptar",
      });
      return; // Stop execution if the email is invalid
    }

    if (user.password.length < 6) {
      swal({
        text: "La contraseña debe tener al menos 6 caracteres",
        icon: "warning",
        button: "Aceptar",
      });
      return; // Stop execution if the password length is less than 6
    }

    if (!passwordMatch) {
      swal({
        text: "Las contraseñas no coinciden",
        icon: "warning",
        button: "Aceptar",
      });
      return; // Stop execution if the passwords do not match
    }

    // TODO: Add validation for unique name, last name, and email in the database

    const newUser = {
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      documento: user.documento,
      password: user.password,
      rol: "usuario",
    };

    try {
      await register(
        user.name,
        user.lastName,
        user.documento,
        user.email,
        user.password,
        user.rol
      );
    } catch (error) {
      setRegisterError(true);
      return; // Stop execution if there is an error during registration
    }

    swal({
      title: "¡Gracias por registrarte en HairPhoria!",
      text:
        "Hemos enviado un correo de confirmación a tu dirección de email registrada. Por favor, revisa tu bandeja de entrada y sigue las instrucciones para completar tu registro.",
      icon: "success",
      button: "Aceptar",
    });

    setUser({
      name: "",
      lastName: "",
      email: "",
      documento: "",
      password: "",
      passwordconfirm: "",
      rol: "usuario",
    });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  const togglePasswordVisibilityConfirm = () => {
    setPasswordVisibleConfirm((prevState) => !prevState);
  };

  return (
    <div className="contenedorFormUserRegister">
      <form className="containerFormRegister" onSubmit={handleSubmit}>
        <h3>¡Registrarte es fácil y rápido!</h3>
        <h4>Accede a todos los beneficios de HairPhoria</h4>
        <hr /> <br />

        <input
          type="text"
          id="name"
          className="form-control"
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Nombre*"
          required
        />
        {invalidCharactersName && (
          <p className="alertError">Solo puedes ingresar letras</p>
        )}
        <br />
        <input
          type="text"
          id="lastName"
          className="form-control"
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
          placeholder="Apellido*"
          required
        />
        {invalidCharactersLastName && (
          <p className="alertError">Solo puedes ingresar letras</p>
        )}
        <br />
        <input
          type="number"
          id="documento"
          className="form-control"
          name="documento"
          value={user.documento}
          onChange={handleChange}
          placeholder="Documento*"
          required
        />
        {invalidNumbers && (
          <p className="alertError">Solo puedes ingresar números</p>
        )}
        <br />
        <input
          type="email"
          id="email"
          className="form-control"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Correo*"
          required
        />
        <br />
        <div className="form-control">
          <input
            type={passwordVisible ? "text" : "password"}
            id="password"
            className="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Contraseña nueva*"
            required
            />
          <button
          type="button"
            className="toggle-password"
            onClick={togglePasswordVisibility}
          >
            <FontAwesomeIcon
              icon={passwordVisible ? faEye: faEyeSlash}
              className="eye-icon"
            />
          </button>

</div>

          
          
        
        {invalidPassword && (
          <p className="alertError">
            La contraseña debe contener al menos una letra mayúscula y un símbolo
          </p>
        )}
        <br />
        <div className="form-control" >
          <input
            type={passwordVisibleConfirm ? "text" : "password"}
            id="passwordconfirm"
            className="password"
            name="passwordconfirm"
            value={user.passwordconfirm}
            onChange={handleChange}
            placeholder="Confirmar contraseña*"
            required
            />
          <button
          type="button"
            className="toggle-password"
            onClick={togglePasswordVisibilityConfirm}
          >
            <FontAwesomeIcon
              icon={passwordVisibleConfirm ? faEye: faEyeSlash}
              className="eye-icon"
            />
          </button>
          
          </div>
        {!passwordMatch && (
          <p className="alertError">Las contraseñas no coinciden</p>
        )}
        <br />
        <div className="button-container">
          <button type="submit" className="btn-submit">
            Registrarse
          </button>
        </div>
        <br />
        <div className="contentLogin"> 
        <h5 className="login">
              ¿Ya tienes una cuenta? 
              <Link to={routes.login} className="linkLogin" onClick={handleModalToggle}>
              Inicia sesión
              </Link>
            </h5>
        </div>
            
      </form>

      <div className="containerImage">
      {isLoading ? (
          <div className="containerSpinner"><ClipLoader className="spinner" color="var(--color-primary-4)" size={80}/></div>) : (
            dataFetch &&
              dataFetch.length > 0 &&
              [...Array(4)].map((_, index) => {
                const servicio = dataFetch[(randomIndex + index) % dataFetch.length];
                const imgClass =
                  index === 0 || index === 3 ? 'imgRegister imgLarge' : 'imgRegister imgSmall';
          
                return (
                  <div key={servicio.id} className={imgClass}>
                    <img className="imagen" src={servicio.imagen[0]} alt="logo" />
                  </div>
                );
              })
          )}

      
    </div>
      <button className="close-modal" onClick={handleModalToggle}>
        <FontAwesomeIcon icon={faCircleXmark} />
      </button>
    </div>
  );
};

export default UserRegister;