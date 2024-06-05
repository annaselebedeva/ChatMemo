import React, { useRef, useState, useEffect } from "react";
import styles from "../styles/Modal.module.css";
import { isMobile } from "react-device-detect";

const Modal = ({ isOpen, onClose, children }) => {
    const modalRef = useRef(null);
    const [isModalOpen, setModalOpen] = useState(isOpen);
    const innerRef = useRef(null);

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

    useEffect(
        () => {
        const listener = (event) => {
            if (!innerRef.current) {
                return;
            }

            if (event.target === modalRef.current) {
                handleCloseModal(event);
            }
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
        },
        [innerRef]
    );

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
                className={`${styles.modalContent} ${isMobile ? styles.mobileModalContent : ""}`}
                onKeyDown={handleKeyDown} 
                onClick={e => { e.stopPropagation() }}>
            <div ref={innerRef} className="px-8 pt-6 pb-8">
                {isMobile 
                    ?
                        <span className="w-" onClick={handleCloseModal}>
                                <img 
                                src="/back.png"
                                alt="Back to contacts"
                                className="h-6 mt-1"
                                />
                        </span>
                    :
                        <span 
                            className={styles.close}
                            onClick={handleCloseModal}>
                                &times;
                        </span>
                }
                { children }
            </div>
        </dialog>
    );
};

export default Modal;