import "../styles/RegisterConfirm.css"
import "../styles/RegisterConfirmDisable.css"


const RegisterConfirmDisable = ({handleModalToggle}) => {

  return (
    <div className="register-confirm-container">
      <h2 className="bienvenido">¡Ups! Parece que el tiempo para completar tu registro ha expirado.</h2>
      <p className="texto">
        No te preocupes, te invitamos a registrarte nuevamente para que puedas unirte a nuestra comunidad. ¡Estaremos encantados de darte la bienvenida otra vez!
      </p>
      {/* <br/><br/>
      <p className="registrate" onClick={handleModalToggle} > ¡Registrate aquí!</p> */}
    </div>
  );
};

export default RegisterConfirmDisable;