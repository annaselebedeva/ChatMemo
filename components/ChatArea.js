import React,{ useState, useCallback, useEffect } from "react";
import styles from "../styles/ChatArea.module.css";
import DeleteModal from './DeleteModal';
import { PRIMARY_BUTTON_STYLES } from "@/constants/constants";
import ChatInfoModal from "./ChatInfoModal";
import Message from "./Message";

const ChatArea = ({ isMobile, user, updateUser, handleBack }) => {
    const [msgs, addMsg] = useState(user.messages || []);
    const [currMsg, updateCurr] = useState("");
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [isInfoModalOpen, setInfoModalOpen] = useState(false);

    const handleOpenDeleteModal = () => {
        setDeleteModalOpen(true);
    }

    const handleCloseDeleteModal = () => {
        setDeleteModalOpen(false);
    }

    const handleOpenInfoModal = () => {
        setInfoModalOpen(true);
    }

    const handleCloseInfoModal = () => {
        setInfoModalOpen(false);
    }
    const msgRef = useCallback((elem) => { //autofocus
          elem?.focus();
      }, []);

    useEffect(() => {
        addMsg(user.messages);
    }, [user]);

    const showMsgs = msgs.map((m, i) => {
        return (
            <Message key={i} data={m.data} timestamp={m.timestamp} />
        );
    })

    const handleSend = (e) => {
        if (currMsg) {
            const date = new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit'}).format(Date.now());
            const updatedMessages = [...msgs,{"id": Date.now(), "data": currMsg, "timestamp": date}];
            addMsg(updatedMessages);
            let updatedUser = {...user};
            updatedUser.messages = updatedMessages;
            updateUser(updatedUser);
            updateCurr("");
        }
    }

    const handleDelete = () => {
        updateUser(user, true);
    }

    const capitalize = (str) => {
        return str.split(" ").map((word) => { 
            return word[0].toUpperCase() + word.substring(1).toLowerCase(); 
        }).join(" ");
    }

    return (
        <div className={`basis-full overflow-hidden relative ${isMobile ? "" : "border-l-2 "}`}>
            <div className="border-b-2 border-gray-200 flex justify-between items-center">
                <span className="py-4 px-4 font-semibold flex items-center flex-nowrap overflow-hidden">
                    {isMobile 
                        ? <img 
                            src="/back.png"
                            alt="Back to contacts"
                            className="h-6 mr-4"
                            onClick={handleBack}
                            />
                        : ""
                    }
                    <div className="text-ellipsis text-nowrap overflow-hidden">
                        {capitalize(`${user.firstName} ${user.lastName}`)}</div>
                </span>
                <div className="flex items-center flex-none">
                <img src="/info.svg"
                         className="w-14 py-4 px-4 cursor-pointer"
                         onClick={handleOpenInfoModal}
                         alt="View chat info" />
                    <ChatInfoModal isOpen={isInfoModalOpen} onClose={handleCloseInfoModal} userData={user} />
                    {isMobile
                        ? ''
                        : <>
                            <img src="/trash.png"
                                className="h-14 py-4 pl-4 pr-8 cursor-pointer"
                                onClick={handleOpenDeleteModal}
                                alt="Delete chat" />
                            <DeleteModal
                                isOpen={isDeleteModalOpen}
                                onClose={handleCloseDeleteModal}
                                onSubmit={handleDelete} />
                        </>
                    }
                </div>
            </div>
            <ol reversed className={styles.chat}>
                { showMsgs }
            </ol>
            <div className={isMobile ? styles.mobileNewChat : styles.newChat}>
                <input 
                    ref={msgRef}
                    type="text" 
                    className="border p-2 mr-2 w-full rounded-md" 
                    placeholder="Write message..."
                    value={currMsg}
                    onKeyDown={(e) => {
                        if (e.key === "Enter")
                            handleSend(e);
                        }}
                    onChange= {(e) => updateCurr(e.target.value)} 
                />
                <button
                    className="border rounded-md bg-rose-300 px-8 py-2 hover:bg-rose-400 mt-6 w-fit"
                    onClick={handleSend}>
                        Send
                </button>
            </div>
        </div>
    );
};

export default ChatArea;