import React,{ useState, useCallback, useEffect } from "react";
import styles from "../styles/ChatArea.module.css";
import selectStyles from "../styles/NoSelect.module.css";
import DeleteModal from './DeleteModal';
import { PRIMARY_BUTTON_STYLES } from "@/constants/constants";
import ChatInfoModal from "./ChatInfoModal";
import Message from "./Message";

const ChatArea = ({ isMobile, user, updateUser, handleBack }) => {
    const [msgs, addMsg] = useState(user.messages || []);
    const [currMsg, updateCurr] = useState("");
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [isInfoModalOpen, setInfoModalOpen] = useState(false);

    const handleOpenDeleteModal = (e) => {
        if (e?.key && (e?.key !== 'Enter' && e?.key !== ' ')) {
            return;
        }
        setDeleteModalOpen(true);
    }

    const handleCloseDeleteModal = () => {
        setDeleteModalOpen(false);
    }

    const handleOpenInfoModal = (e) => {
        if (e?.key && (e?.key !== 'Enter' && e?.key !== ' ')) {
            return;
        }
        setInfoModalOpen(true);
    }

    const handleCloseInfoModal = () => {
        setInfoModalOpen(false);
    }
    const msgRef = useCallback((elem) => { //autofocus
          elem?.focus();
    }, [user]);

    useEffect(() => {
        addMsg(user.messages);
    }, [user]);

    const showMsgs = msgs.map((m, i) => {
        return (
            <Message key={i} messageData={m} />
        );
    })

    const handleSend = (e) => {
        if (currMsg) {
            const updatedMessages = [...msgs,{"id": Date.now(), "data": currMsg, "timestamp": Date.now()}];
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

    return (
        <section className={`basis-full overflow-hidden relative ${selectStyles.noSelect}`}>
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
                    <div className={`text-ellipsis whitespace-nowrap text-nowrap overflow-hidden cursor-default ${selectStyles.noSelect}`}>
                        {user.firstName} {user.lastName}
                    </div>
                </span>
                <div className="flex items-center flex-none">
                    <img src="/info.svg"
                        tabIndex={0}
                        className={`w-14 py-4 px-4 cursor-pointer ${selectStyles.noSelect}`}
                        onKeyDown={handleOpenInfoModal}
                        onClick={handleOpenInfoModal}
                        alt="View chat info" />
                    <ChatInfoModal isOpen={isInfoModalOpen} onClose={handleCloseInfoModal} userData={user} />
                    {isMobile
                        ? ''
                        : <>
                            <img src="/trash.png"
                                className={`h-14 py-4 pl-4 pr-8 cursor-pointer ${selectStyles.noSelect}`}
                                tabIndex={0}
                                onKeyDown={handleOpenDeleteModal}
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
                    className={`border p-2 mr-2 w-full rounded-md ${selectStyles.noSelect}`}
                    placeholder="Write message..."
                    value={currMsg}
                    onKeyDown={(e) => {
                        if (e.key === "Enter")
                            handleSend(e);
                        }}
                    onChange= {(e) => updateCurr(e.target.value)} 
                />
                <button
                    className="border rounded-md text-white bg-rose-500 px-8 py-2 hover:bg-rose-600 mt-6 w-fit"
                    onClick={handleSend}>
                        Send
                </button>
            </div>
        </section>
    );
};

export default ChatArea;