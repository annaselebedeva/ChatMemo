import React, { useState } from "react";
import styles from "../styles/Modal.module.css";
import Modal from "./Modal";
import 'react-phone-number-input/style.css';
import PhoneInput, {isValidPhoneNumber} from 'react-phone-number-input';
import { PRIMARY_COLOR } from "@/constants/constants";

const fields = [{label: "firstName", text: "First Name", required: true},
                {label: "lastName", text: "Last Name", required: true},
                {label: "email", text: "Email", required: false},
                {label: "phone", text: "Phone", required: false}];

const NewUserModal = ({ isOpen, onClose, onSubmit }) => {
    const [modalData, updateData] = useState({});
    const [isError, setError] = useState([]);

    const handleSubmit = () => {
        let error = false;
        let newErrors = [];
        setError([]);
        if (!modalData) {
            let reqItems = fields.filter(f => f.required);
            reqItems.forEach(f => {
                if (!Object.keys(modalData).includes(f.label)) {
                    newErrors.push(fields.indexOf(fields.find(field => f.label === field.label)));
                }
            });
        }
        else {
            let reqItems = fields.filter(f => f.required);
            reqItems.forEach(f => {
                if (!Object.keys(modalData).includes(f.label) || !modalData[f.label]) {
                    newErrors.push(fields.indexOf(fields.find(field => f.label === field.label)));
                }
            });
            if (modalData.email && !validateEmail(modalData.email)) {
                newErrors.push(fields.indexOf(fields.find(f => f.label === "email")));
            }
            if (modalData.phone && !isValidPhoneNumber(modalData.phone)) {
                newErrors.push(fields.indexOf(fields.find(f => f.label === "phone")));
            }
        }
        if (newErrors.length) {
            setError([...isError, ...newErrors]);
            error = true;
        }
        if (!error) {
            onSubmit(modalData);
            updateData({});
            onClose();
        }
    }

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
    
    const updateField = (field, e, i, isPhone) => {
        const newData = {...modalData};
        newData[field] = (isPhone) ? (e || "") : (e ? e.target.value : "");
        if (isError.includes(i)) {
            const newError = [...isError];
            newError.splice(isError.indexOf(i), 1);
            setError(newError);
        }
        updateData(newData);
    }

    const generateFields = fields.map((f, i) => {
        if (f.label === "phone") {
            return (
                <div key={i} className="flex mb-4">
                    <PhoneInput
                        className={`${isError.includes(i) ? styles.error : ""}
                                    ${styles.fieldInput}
                                    border-rose-500
                                    bg-rose-50`}
                        placeholder={f.text}
                        value={modalData[f.label] || ""}
                        onChange={(val) => updateField(f.label, val, i, true)} />
                    <span className="text-red-500 ml-1">{(f.required) ? "*" : <>&nbsp;</>}</span>
                </div>
            );
        }
        else {
            return (
                <div key={i} className="flex mb-4">
                    <input 
                        className={`${isError.includes(i) ? styles.error : ""}
                                    ${styles.fieldInput}`}
                        placeholder={f.text}
                        name={f.label}
                        value={modalData[f.label] || ""}
                        onChange={(e) => updateField(f.label, e, i)} />
                    <span className="text-red-500 ml-1">{(f.required) ? "*" : <>&nbsp;</>}</span>
                </div>
            );
        }
    });

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="flex flex-col items-center">
                <h1 className="text-2xl py-2 pb-2 mb-6 text-center">Add New Chat</h1>
                <section className="flex flex-col items-center">
                    {generateFields}
                </section>

                <button 
                    className={`border rounded-md bg-rose-200 px-8 py-2 hover:bg-rose-300 mt-6 w-fit`}
                    onClick={handleSubmit}>
                        Open New Chat
                </button>
            </div>
        </Modal>
    );
};

export default NewUserModal;