import Modal from 'react-modal';

import css from './ImageModal.module.css';

Modal.setAppElement('#root');

export default function ImageModal({
  isOpen,
  onClose,
  image: { urls, description },
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modalContent}
      overlayClassName={css.modalOverlay}
      closeTimeoutMS={2000}
    >
      <img src={urls.regular} alt={description} className={css.modalImg} />
    </Modal>
  );
}
