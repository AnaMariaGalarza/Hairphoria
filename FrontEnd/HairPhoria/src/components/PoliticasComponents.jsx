import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faScissors } from "@fortawesome/free-solid-svg-icons";
import "../styles/DetailsService.css"
function PoliticasComponents({service}) {

  return (
    <div className="politicas-description">
      <div className="policies1">
        <h2 className="policies">Políticas de Hairphoria</h2>
        <ul className="ulPoliticas">
        {service?.terminos?.politicas.map((politica, index) => (
            <li key={index}>
              <FontAwesomeIcon icon={faScissors} className="icon" />
              <span>{politica}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="policies1">
        <h2 className="policies">Políticas de Salud y seguridad</h2>
        <ul className="ulPoliticas">
        {service?.terminos?.saludYSeguridad.map((politica, index) => (
            <li key={index}>
              <FontAwesomeIcon icon={faScissors} className="icon" />
              <span>{politica}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="policies1">
        <h2 className="policies">Políticas de Cancelación</h2>
        <ul className="ulPoliticas">
        {service?.terminos?.cancelacion.map((politica, index) => (
            <li key={index}>
              <FontAwesomeIcon icon={faScissors} className="icon" />
              <span>{politica}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default PoliticasComponents;
