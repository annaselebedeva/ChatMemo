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
    return (
        <div 
        className={`flex w-full border-t-4 border-${PRIMARY_COLOR}-400 overflow-auto flex-col`}
        style={{height: "calc(100% - 75px)"}}>
            {!contactsPanel 
                ? <SideBar isMobile={isMobile} currentUser={currUser} users={chatData} changeUser={handleChangeUser} />
                : ((currUser && chatData.length) ? <ChatArea user={currUser} updateUser={handleUpdate} /> : <NoUserSelected />)
            }
            <MobileFooter handleClickMenu={handleClickMenu} />
        </div>
    );
}

export default MainMobile;