import React, { useEffect, useState } from "react";

import styles from "../styles/SideBar.module.css";
import NewUserModal from "./NewUserModal";
import User from "./User";

const SideBar = ({ isMobile, currentUser, users, changeUser, updateUser }) => {
    //params: list of users and usergroups (should you be able to create multiple groups with the same users?)
    const [currUser, changeCurr] = useState();
    const [isModalOpen, setModalOpen] = useState(false);
    useEffect(() => {
        changeCurr(currentUser);
    }, [currentUser]);

    const handleOpenModal = (e) => {
        if (e?.key && (e?.key !== 'Enter' && e?.key !== ' ')) {
            return;
        }
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

    const deleteUser = (usr) => {
        updateUser(usr, true);
    }

    const usersMap = users.map((usr,i) => {
        const active = (currUser && usr.id === currUser.id) ? "active" : "";
        return (
            <User 
                key={i}
                isMobile={isMobile}
                active={active}
                styles={styles}
                usr={usr}
                deleteUser={deleteUser}
                changeUser={changeUser} />
        );
    });

    return (
        <section className={`${styles.container} ${isMobile ? styles.mobileContainer : ""} `}>
            <div className={`flex justify-between items-center p-4 ${styles.user} ${styles.newChat}`}>
                Users
                <div tabIndex={0}
                     onKeyDown={handleOpenModal}
                     onClick={handleOpenModal}>
                        <img src="/new-chat.svg" alt="Create new chat" />
                </div>
            </div>
            <NewUserModal isMobile={isMobile} isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleNewChat} />
            { usersMap }
        </section>
    );
};

export default SideBar;