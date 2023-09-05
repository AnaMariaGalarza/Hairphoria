import { useState, useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarOutline } from '@fortawesome/free-regular-svg-icons';
import { AuthContext } from "../Context/AuthContext";
import swal from "sweetalert";
import usePostStats from '../hooks/usePostStats';
import '../styles/Modal.css';
import "../styles/CommentModal.css"
import "../styles/Comments.css"

const Comment = ({ service }) => {
    const { token } = useContext(AuthContext);
    const isLoggedIn = !!token;
    const { addStats } = usePostStats();

    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [filledStars, setFilledStars] = useState(0);

    //actualizacion comentario puntuacion en tiempo real
    const [statsUpdate, setstatsUpdate] = useState([]);
    useEffect(() => {
        if (service?.stats) {
            setstatsUpdate(service?.stats);
        }
    }, [service]);



    const handleRatingClick = (value) => {
        if (isLoggedIn) {
            setRating(value);
            setFilledStars(value);

        } else {
            if (!isLoggedIn) {
                swal({
                    text: "Debes ingresar a tu cuenta para calificarnos 😉",
                    icon: "warning",
                    button: "Aceptar",
                });
                return;
            }
        }
    };

    const handleCommentChange = (event) => {
        if (isLoggedIn) {
            const value = event.target.value;
            console.log("Comentario:", value);
            setComment(value);
        } else {
            if (!isLoggedIn) {
                swal({
                    text: "Debes ingresar a tu cuenta para comentar 😉",
                    icon: "warning",
                    button: "Aceptar",
                });
                return;
            }
        }
    };

    const renderStars = () => {
        const stars = [];

        for (let i = 1; i <= 5; i++) {
            let starIcon;

            if (i <= filledStars) {
                starIcon = (
                    <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        onClick={() => handleRatingClick(i)}
                        onMouseEnter={() => setFilledStars(i)}
                        onMouseLeave={() => setFilledStars(rating)}
                        className="star filled"
                    />
                );
            } else if (i - 0.5 === filledStars) {
                starIcon = (
                    <FontAwesomeIcon
                        key={i}
                        icon={faStarHalfStroke}
                        onClick={() => handleRatingClick(i)}
                        onMouseEnter={() => setFilledStars(i)}
                        onMouseLeave={() => setFilledStars(0)}
                        className="star half-filled"
                    />
                );
            } else {
                starIcon = (
                    <FontAwesomeIcon
                        key={i}
                        icon={faStarOutline}
                        onClick={() => handleRatingClick(i)}
                        onMouseEnter={() => setFilledStars(i)}
                        onMouseLeave={() => setFilledStars(0)}
                        className="star"
                    />
                );
            }

            stars.push(starIcon);
        }

        return stars;
    };

    const handleRating = async () => {
        if (!comment && !rating) {
            swal('Error', 'Debes ingresar un comentario y seleccionar una puntuación', 'error');
            return;
        }
        if (!comment) {
            swal('Error', 'Debes ingresar un comentario', 'error');
            return;
        }
        if (!rating) {
            swal('Error', 'Debes seleccionar una puntuación', 'error');
            return;
        }

        const id = service?.id;
        const email = localStorage.getItem('email');
        const comentarioData = { email: email, comentario: comment };
        const puntuacionData = { email: email, puntuacion: rating };
        const urlComentario = `http://3.19.243.36:8080/stats/comentario/${id}`;
        const urlPuntuacion = `http://3.19.243.36:8080/stats/puntuacion/${id}`;

        try {
            await addStats(urlComentario, comentarioData);
            await addStats(urlPuntuacion, puntuacionData);


            swal('Éxito', 'Se ha enviado el comentario exitosamente', 'success');

            const existingCommentIndex = statsUpdate.findIndex((comment) => comment.email === email);
            if (existingCommentIndex !== -1) {
                const updatedStats = [...statsUpdate];
                updatedStats[existingCommentIndex] = {
                    ...updatedStats[existingCommentIndex],
                    puntuacion: rating,
                    comentario: comment
                };
                setstatsUpdate(updatedStats);
            } else {
                const newComment = {
                    id: statsUpdate.length + 1,
                    puntuacion: rating,
                    email: email,
                    comentario: comment
                };
                setstatsUpdate([...statsUpdate, newComment]);
            }

            console.log(statsUpdate);

            setComment('');
            setRating(0);
            setFilledStars(0);
            setIsOpen(false);
        } catch (error) {
            console.error('Error al enviar las solicitudes:', error);
            swal('Error', 'Ha ocurrido un error al enviar el comentario', 'error');
        }
    };


    //limite caracteres textarea
    const characterCount = comment.length;
    const remainingCharacters = 300 - characterCount;

    //modal comentar
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    //prev de estrellas puestas

    const renderStarRating = (puntuacion) => {
        const stars = [];

        for (let i = 1; i <= 5; i++) {
            let starIcon;

            if (i <= puntuacion) {
                starIcon = (
                    <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        className="star filled"
                    />
                );
            } else if (i - 0.5 === puntuacion) {
                starIcon = (
                    <FontAwesomeIcon
                        key={i}
                        icon={faStarHalfStroke}
                        className="star half-filled"
                    />
                );
            } else {
                starIcon = (
                    <FontAwesomeIcon
                        key={i}
                        icon={faStarOutline}
                        className="star"
                    />
                );
            }

            stars.push(starIcon);
        }

        return <div className="star-rating">{stars}</div>;
    };


    return (
        <div className="commentsSection">
            <div className="containerComments">
                {statsUpdate?.map((comment) => (
                    <div className="comentarios-description" key={comment.id}>
                        <div className="containerPuntuacion">
                            <div key={comment.id}>
                                <div className="infoComment">
                                    {renderStarRating(comment.puntuacion)}
                                    <p className='commentEmail'>{comment.email}</p>
                                    <p>{comment.comentario}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            <div className="buttonComment">
                <button
                    onClick={openModal}
                    className='buttonRating'>
                    Agregar comentario
                </button>
            </div>

            {isOpen && (
                <div className="modal-overlay">
                    <div className="modalContainer">
                        <button onClick={closeModal} className="modalClose" >
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                        <div className="statStar">
                            ¡Calificanos! <br />
                            {renderStars()}
                        </div>
                        <textarea
                            placeholder="Escribe un comentario..."
                            value={comment}
                            onChange={handleCommentChange}
                            maxLength={300}
                            rows={4}
                            className='textComment'
                        />
                        <div className="character-count">Caracteres restantes {remainingCharacters}</div>
                        <button
                            onClick={handleRating}
                            className='buttonRating'
                        >
                            Calificar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Comment;