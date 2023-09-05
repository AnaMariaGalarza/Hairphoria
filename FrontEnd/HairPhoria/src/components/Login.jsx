import { useState, useContext } from "react";
import "../styles/Login.css";
import video from "../assets/logInVideo/HairSalon.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Login = ({ handleModalToggle }) => {
  const { dispatch } = useContext(AuthContext);
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const emailValue = e.target.email.value;
      const passwordValue = e.target.password.value;

      const response = await fetch("http://3.19.243.36:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailValue, password: passwordValue }),
      });

      if (response.ok) {
        const data = await response.json();

        dispatch({
          type: "LOGIN",
          payload: { accessToken: data.accessToken },
        });

        localStorage.setItem("email", emailValue);
        navigate("/");
        window.location.reload();
      } else {
        setLoginError(true);
      }
    } catch (error) {
      console.error(error);
      setLoginError(true);
    }
  };

  return (
    <div className="containerForm">
      <div className="containerBox">
        <div className="containerVideo">
          <video src={video} autoPlay loop muted></video>
        </div>

        <form
          className="containerLogIn"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <h3>¡Hola, inicia sesión!</h3> <br />

          <label htmlFor="">
            <FontAwesomeIcon icon={faEnvelope} /> Correo*
          </label>
          <br />
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Ingrese su correo"
            required
            className="inputLogIn"
            autoComplete="off"
          />
          <br />

          <label htmlFor="">
            <FontAwesomeIcon icon={faLock} /> Contraseña*
          </label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Ingrese su contraseña"
            required
            className="inputLogIn"
            autoComplete="off"
          />
          <br />

          <br />
          {loginError && (
            <p>El correo o la contraseña no coinciden.</p>
          )}
          <div>
          <button className="buttonLogIn" type="submit">
            Ingresar
          </button>
          <br />
          </div>
          <p className="singUp" onClick={handleModalToggle}>
            ¿No tienes cuenta? Registrate aquí
          </p>
        </form>
      </div>
    </div>
  );
};



export default Login;
