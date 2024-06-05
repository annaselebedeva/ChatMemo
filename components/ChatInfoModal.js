import React from "react";
import Modal from "./Modal";
import { formatPhoneNumberIntl } from "react-phone-number-input";

const ChatInfoModal = ({ isOpen, onClose, userData }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <section className="flex flex-col">
                <h1 className="text-2xl py-2 pb-2 mb-2 text-center cursor-default">Chat Info</h1>
                <div className="flex flex-col items-center text-center">
                    <div className="mb-2">Name: {userData.firstName} {userData.lastName}</div>
                    <div className="mb-2">Email: {userData.email}</div>
                    <div className="mb-2">Phone: {formatPhoneNumberIntl(userData.phone)}</div>
                </div>
            </section>
        </Modal>
    );
};

export default ChatInfoModal;