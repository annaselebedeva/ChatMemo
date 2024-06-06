import React from "react";
import SwipeToDelete from "react-swipe-to-delete-ios";

const User = ({ isMobile, active, styles, usr, changeUser, deleteUser }) => {
    const handleChangeUser = (usr, isKeyPress, e) => {
        if (isKeyPress && (e.key !== 'Enter' && e.key !== ' ')) {
            return;
        }
        changeUser(usr);
    }
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
            <div tabIndex={0}
                 aria-label="Select user"
                 className={`${active ? styles.active : ""} ${styles.user}`}
                 onKeyDown={(e) => handleChangeUser(usr, true, e)}
                 onClick={() => handleChangeUser(usr)}>
                    {usr.firstName} {usr.lastName}
            </div>
    );
}

export default User;