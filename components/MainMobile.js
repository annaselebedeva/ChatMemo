import MobileFooter from "./MobileFooter";
import SideBar from "./SideBar";
import NoUserSelected from "./NoUserSelected";
import { PRIMARY_COLOR } from "@/constants/constants";
import ChatArea from "./ChatArea";
import { useState } from "react";
import Div100vh from 'react-div-100vh';

const MainMobile = ({ isMobile, currUser, chatData, handleChangeUser, handleUpdate }) => {
    const [contactsPanel, changeView] = useState(false);

    const handleClickMenu = (view) => {
        if (contactsPanel !== view) {
            changeView(!contactsPanel);
        }
    }

    const handleChange = (usr, newUsr) => {
        handleChangeUser(usr, newUsr);
        changeView(!contactsPanel);
    }

    const handleBack = () => {
        changeView(!contactsPanel);
    }

    return (
        // <Div100vh>
            <div 
                className={`flex w-full border-t-4 border-rose-400 overflow-auto flex-col`}
                style={{height: "calc(100% - 75px)"}}>
            {!contactsPanel 
                ? <SideBar
                    isMobile={isMobile}
                    currentUser={currUser}
                    users={chatData}
                    updateUser={handleUpdate}
                    changeUser={handleChange} />
                : ((currUser && chatData.length)
                    ? <ChatArea
                        isMobile={isMobile}
                        user={currUser}
                        updateUser={handleUpdate}
                        handleBack={handleBack} />
                    : <NoUserSelected />)
            }
            <MobileFooter handleClickMenu={handleClickMenu} selected={contactsPanel} />
            </div>
        // </Div100vh>
    );
}

export default MainMobile;