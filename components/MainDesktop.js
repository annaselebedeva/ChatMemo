import React from "react";
import NoUserSelected from "./NoUserSelected";
import ResizablePanel from "./ResizablePanel";
import SideBar from "./SideBar";
import ChatArea from "./ChatArea";

import { PRIMARY_COLOR, INIT_WIDTH_LEFT_PANEL, MIN_WIDTH_LEFT_PANEL, MAX_WIDTH_LEFT_PANEL } from "@/constants/constants";

const MainDesktop = ({ currUser, chatData, handleChangeUser, handleUpdate }) => {
    return (
        <div 
        className={`flex w-full border-t-4 border-rose-400 overflow-auto`}
        style={{height: "calc(100% - 75px)"}}>
            <ResizablePanel minSize={INIT_WIDTH_LEFT_PANEL} initialSize={MIN_WIDTH_LEFT_PANEL} maxSize={MAX_WIDTH_LEFT_PANEL}>
                <SideBar currentUser={currUser} users={chatData} changeUser={handleChangeUser} />
            </ResizablePanel>
            {(currUser && chatData.length) ? <ChatArea user={currUser} updateUser={handleUpdate} /> : <NoUserSelected />}
        </div>
    );
}

export default MainDesktop;
