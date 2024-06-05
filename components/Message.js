import React, { useRef, useEffect } from "react";
import styles from '../styles/ChatArea.module.css';

const Message = ({ messageData }) => {
    const ref = useRef();

    useEffect(() => {
          ref.current?.scrollIntoView(true);      
      }, []);

    const formatDate = (date) => {
        return new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit'}).format(messageData.timestamp);
    }

    const messageTypePlacement = messageData.from ? "items-start" : "items-end";
    const messageTypeA = messageData.from ? styles.messageA : "";
    return (
        <li ref={ref} className={`flex flex-col mb-3 ${messageTypePlacement}`}>
            <div className={`${styles.message} ${messageTypeA}`}>{messageData.data}</div>
            <div className="text-slate-400 text-sm">{formatDate(messageData.timestamp)}</div>
        </li>
    );
};

export default Message;