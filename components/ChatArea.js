import React,{ useState, useCallback, useEffect } from "react";
import styles from "../styles/ChatArea.module.css";
import DeleteModal from './DeleteModal';
import { PRIMARY_COLOR } from "@/constants/constants";
import ChatInfoModal from "./ChatInfoModal";

const ChatArea = ({ user, updateUser }) => {
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
        if (elem) {
          elem.focus();
        }
      }, [msgs]);

    useEffect(() => {
        addMsg(user.messages);
    }, [user]);

    const showMsgs = msgs.map((m, i) => {
        return (
            <li key={i} className="flex flex-col items-end mb-3">
                <div className={styles.message}>{m.data}</div>
                <div className="text-slate-400 text-sm">{m.timestamp}</div>
            </li>
        );
    })

    const handleSend = () => {
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

    return (
        <div className="flex-9 border-l-2 basis-full overflow-scroll relative">
            <div className="border-b-2 border-gray-200 flex justify-between items-center">
                <span className="py-4 px-8 font-semibold">{user.firstName} {user.lastName}</span>
                <div className="flex items-center">
                    <img src="/trash.png" className="h-14 py-4 px-4 cursor-pointer" onClick={handleOpenDeleteModal} />
                    <DeleteModal isOpen={isDeleteModalOpen} onClose={handleCloseDeleteModal} onSubmit={handleDelete} />
                    <img src="/dots.png" className="h-14 py-4 pl-4 pr-8 cursor-pointer" onClick={handleOpenInfoModal} />
                    <ChatInfoModal isOpen={isInfoModalOpen} onClose={handleCloseInfoModal} userData={user} />
                </div>
            </div>
            {/* <div className="overflow-scroll h-inherit" style={{height: "calc(100% - 136px)"}}> */}
                <ol className={styles.chat}>
                    { showMsgs }
                </ol>
            {/* </div> */}
            <div className={styles.newChat}>
                <input 
                    ref={msgRef}
                    type="text" 
                    className="border p-2 mr-2 w-full rounded-md" 
                    placeholder="Write message..."
                    value={currMsg}
                    onKeyDown={(e) => {
                        if (e.key === "Enter")
                            handleSend();
                        }}
                    onChange= {(e) => updateCurr(e.target.value)} 
                />
                <button
                    className={`border rounded-md bg-${PRIMARY_COLOR}-200 px-8 py-2 hover:bg-${PRIMARY_COLOR}-300`}
                    onClick={handleSend}>
                        Send
                </button>
            </div>
        </div>
    );
};

export default ChatArea;