import MobileFooter from "./MobileFooter";
import SideBar from "./SideBar";
import NoUserSelected from "./NoUserSelected";
import { PRIMARY_COLOR } from "@/constants/constants";
import ChatArea from "./ChatArea";
import { useState } from "react";

const MainMobile = ({ isMobile, currUser, chatData, handleChangeUser, handleUpdate }) => {
    const [contactsPanel, changeView] = useState(false);

    const handleClickMenu = (view) => {
        if (contactsPanel !== view) {
            changeView(!contactsPanel);
        }
    }

    const handleChange = (usr) => {
        handleChangeUser(usr);
        changeView(!contactsPanel);
    }

    const handleUpdateUser = (user, toDelete) => {
        handleUpdate(user, toDelete);
        if (toDelete) {
            changeView(!contactsPanel);
        }
    }

    const handleBack = () => {
        changeView(!contactsPanel);
    }

    return (
        <div 
        className={`flex w-full border-t-4 border-rose-400 overflow-auto flex-col`}
        style={{height: "calc(100% - 75px)"}}>
            {!contactsPanel 
                ? <SideBar
                    currentUser={currUser}
                    users={chatData}
                    changeUser={handleChange} />
                : ((currUser && chatData.length)
                    ? <ChatArea
                        isMobile={isMobile}
                        user={currUser}
                        updateUser={handleUpdateUser}
                        handleBack={handleBack} />
                    : <NoUserSelected />)
            }
            <MobileFooter handleClickMenu={handleClickMenu} />
        </div>
    );
}

export default MainMobile;