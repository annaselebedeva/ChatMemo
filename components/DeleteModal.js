import React from "react";
import Modal from "./Modal";
import { PRIMARY_COLOR } from "@/constants/constants";

const DeleteModal = ({ isOpen, onClose, onSubmit }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <section className="flex flex-col">
                <h1 className="text-2xl py-2 pb-2 mb-2 text-center">Delete Chat?</h1>
                <div className="flex justify-center">
                    <button 
                        className={`border rounded-md bg-rose-200 px-8 py-2 hover:bg-rose-300 mt-6 w-fit mr-4`}
                        onClick={onSubmit}>
                            Yes
                    </button>
                    <button
                        className="border rounded-md bg-gray-100 px-8 py-2 hover:bg-gray-200 mt-6 w-fit"
                        onClick={onClose}>
                            No
                    </button>
                </div>
            </section>
        </Modal>
    );
};

export default DeleteModal;