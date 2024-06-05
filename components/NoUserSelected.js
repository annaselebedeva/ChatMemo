import React from "react";
import styles from "../styles/NoSelect.module.css";
const NoUserSelected = () => {
    return (
        <div className={`flex-9 basis-full flex items-center justify-center cursor-default ${styles.noSelect}`}>
            Please add or select a user to chat with
        </div>
    );
};

export default NoUserSelected;