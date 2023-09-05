import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';


const Star = ({ service }) => {

    // mostrar promedio puntuacion del servicio
    const puntuacion = service?.starsAvg;

    // Redondear la puntuación
    let roundedPuntuacion;
    const decimalPart = puntuacion % 1;
    if (decimalPart > 0.5) {
        roundedPuntuacion = Math.ceil(puntuacion);
    } else if (decimalPart >= 0.1 && decimalPart <= 0.5) {
        roundedPuntuacion = Math.floor(puntuacion) + 0.5;
    } else {
        roundedPuntuacion = Math.floor(puntuacion);
    }

    const renderStars = () => {
        const stars = [];
        const fullStarIcon = <FontAwesomeIcon icon={faStar} className="star" />;
        const halfStarIcon = <FontAwesomeIcon icon={faStarHalfStroke} className="star" />;
        const emptyStarIcon = <FontAwesomeIcon icon={faRegularStar} className="star" />;
    
        if (roundedPuntuacion === 0.0) {
            // Si la puntuación redondeada es 0.0, se agregan 5 estrellas vacías
            for (let i = 1; i <= 5; i++) {
                stars.push(emptyStarIcon);
            }
        } else {
            const integerPart = Math.floor(roundedPuntuacion);
            const decimalPart = roundedPuntuacion % 1;
            for (let i = 1; i <= 5; i++) {
                if (i <= integerPart) {
                    stars.push(fullStarIcon);
                } else if (i === integerPart + 1 && decimalPart === 0.5) {
                    stars.push(halfStarIcon);
                } else {
                    stars.push(emptyStarIcon);
                }
            }
        }
    
        return stars;
    };
    
    console.log("puntuacion", roundedPuntuacion)

    return (
        <div className="prevStar">
            {renderStars()} <span className="valorPuntuacion">{roundedPuntuacion}</span>
        </div>
    )
}

export default Star