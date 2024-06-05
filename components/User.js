import React from "react";
import SwipeToDelete from "react-swipe-to-delete-ios";

const User = ({ isMobile, active, styles, usr, changeUser, deleteUser }) => {
    return (
        isMobile 
        ?
            <SwipeToDelete
                onDelete={() => deleteUser(usr)}
                height={60}
                deleteColor="rgb(244, 63, 94)"
            >
                <div 
                    className={`${active ? styles.active : ""} ${styles.user}`}
                    onClick={() => changeUser(usr)}>
                        {usr.firstName} {usr.lastName}
                </div>
            </SwipeToDelete>
        : 
            <div 
                className={`${active ? styles.active : ""} ${styles.user}`}
                onClick={() => changeUser(usr)}>
                    {usr.firstName} {usr.lastName}
            </div>
    );
}

export default User;