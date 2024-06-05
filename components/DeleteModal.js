import React from "react";
import Modal from "./Modal";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import { PRIMARY_COLOR, PRIMARY_BUTTON_STYLES, SECONDARY_BUTTON_STYLES } from "@/constants/constants";

const DeleteModal = ({ isOpen, onClose, onSubmit }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <section className="flex flex-col">
                <h1 className="text-2xl py-2 pb-2 mb-2 text-center">Delete Chat?</h1>
                <ButtonGroup>
                    <Button style="border rounded-md bg-rose-300 px-8 py-2 hover:bg-rose-400 hover:bg- mt-6 w-fit" 
                            onClickButton={onSubmit}>
                                Yes
                    </Button>
                    <Button style="border rounded-md bg-gray-100 px-8 py-2 hover:bg-gray-200 mt-6 ml-3 w-fit"
                            onClickButton={onClose}>
                                No
                    </Button>
                </ButtonGroup>
            </section>
        </Modal>
    );
};

export default DeleteModal;