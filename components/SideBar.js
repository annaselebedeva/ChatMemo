import React, { useEffect, useState } from "react";

import styles from "../styles/SideBar.module.css";
import NewUserModal from "./NewUserModal";
import User from "./User";

const SideBar = ({ isMobile, currentUser, users, changeUser }) => {
    //params: list of users and usergroups (should you be able to create multiple groups with the same users?)
    const [currUser, changeCurr] = useState();
    const [isModalOpen, setModalOpen] = useState(false);
    useEffect(() => {
        changeCurr(currentUser);
    }, [currentUser]);

    const handleOpenModal = () => {
        setModalOpen(true);
    }

    const handleCloseModal = () => {
        setModalOpen(false);
    }

    const handleNewChat = (data) => {
        const newId = Date.now();
        changeUser({
            "id": newId,
            "messages": [],
            ...data
        }, true);
    }

    const usersMap = users.map((usr,i) => {
        const active = (currUser && usr.id === currUser.id) ? "active" : "";
        return (
            <User 
                key={i}
                active={active}
                styles={styles}
                usr={usr}
                changeUser={changeUser} />
        );
    });

    return (
        <div className={`${styles.container} ${isMobile ? styles.mContainer : ""} `}>
            <div className={`flex justify-between items-center p-4 ${styles.user} ${styles.newChat}`}>
                Users
                <div 
                    onClick={handleOpenModal}>
                        <img src="/new-chat.svg" alt="Create new chat" />
                </div>
            </div>
            <NewUserModal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleNewChat} />
            { usersMap }
        </div>
    );
};

export default SideBar;