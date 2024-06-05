import MobileFooter from "./MobileFooter";
import SideBar from "./SideBar";
import ChatArea from "./ChatArea";
import NoUserSelected from "./NoUserSelected";

const MainMobile = ({ currUser, chatData, handleChangeUser, handleUpdate }) => {
    return (
        <>
            {/* <SideBar currentUser={currUser} users={chatData} changeUser={handleChangeUser} />
            {(currUser && chatData.length) ? <ChatArea user={currUser} updateUser={handleUpdate} /> : <NoUserSelected />}
            <MobileFooter /> */}
        </>
    );
}

export default MainMobile;