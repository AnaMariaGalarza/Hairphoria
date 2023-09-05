import '../styles/Modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

const Modal = ({ isOpen, onClose, children, images, currentImageIndexModal, setCurrentImageIndexModal }) => {
  if (!isOpen) return null;

  const handlePreviousImage = () => {
    setCurrentImageIndexModal((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndexModal((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
        <FontAwesomeIcon icon={faXmark} />
        </button>
        <button className="modal-left" onClick={handlePreviousImage}>
        <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="modal-right" onClick={handleNextImage}>
        <FontAwesomeIcon icon={faChevronRight} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;