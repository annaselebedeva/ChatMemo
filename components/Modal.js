import React, { useRef, useState, useEffect } from "react";
import styles from "../styles/Modal.module.css";

const Modal = ({ isOpen, onClose, children }) => {
    const modalRef = useRef(null);
    const [isModalOpen, setModalOpen] = useState(isOpen);

    useEffect(() => {
        setModalOpen(isOpen);
      }, [isOpen]);

    useEffect(() => {
        const modalElement = modalRef.current;
        if (modalElement) {
          if (isModalOpen) {
            modalElement.showModal();
          } else {
            modalElement.close();
          }
        }
    }, [isModalOpen]);

    const handleCloseModal = () => {
        if (onClose) {
            onClose();
        }
        setModalOpen(false);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Escape") {
            handleCloseModal();
        }
    };

    return (
        <dialog ref={modalRef}
                className={styles.modalContent}
                onKeyDown={handleKeyDown} 
                onClick={e => { e.stopPropagation() }}>
                <span 
                    className={styles.close}
                    onClick={handleCloseModal}>
                        &times;
                </span>
                { children }
        </dialog>
    );
};

export default Modal;