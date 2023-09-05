import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import "../styles/ModalShare.css"
import "../styles/Modal.css"
import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    TelegramIcon,
    TelegramShareButton,
    TwitterIcon,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton,
    
  } from "react-share";
import swal from "sweetalert";

const ModalShare = ({ isOpen, onClose, shareUrl }) => {
  if (!isOpen) return null;

  const handleCopyToClipboard = () => {
    swal('El enlace ha sido copiado.')
  };

  return (
    <div className="modal-overlay" >
      <div className="modal-content-share">
        <div className="head">
            <div className="headShare">Compartir</div>
        <button className="modal-close-share" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        </div>
        
        <div className="share-options" >
        <FacebookShareButton url={shareUrl}>
              <FacebookIcon className="iconSocial" />
            </FacebookShareButton>
            <WhatsappShareButton url={shareUrl}>
              <WhatsappIcon className="iconSocial"/>
            </WhatsappShareButton>
            <TwitterShareButton url={shareUrl}>
              <TwitterIcon className="iconSocial"/>
            </TwitterShareButton>
            <EmailShareButton url={shareUrl}>
              <EmailIcon className="iconSocial"/>
            </EmailShareButton>
            <TelegramShareButton url={shareUrl}>
              <TelegramIcon className="iconSocial"/>
            </TelegramShareButton>
        </div>
        <div className="share-url">
          <input type="url" className="input-url" value={shareUrl} readOnly />
          <CopyToClipboard text={shareUrl}>
            <button className="copiar" onClick={handleCopyToClipboard}>Copiar</button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};

export default ModalShare;