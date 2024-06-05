import React, { useRef, useEffect } from "react";
import styles from '../styles/ChatArea.module.css';

const Message = ({ data, timestamp }) => {
    const ref = useRef();

    useEffect(() => {
          ref.current?.scrollIntoView(true);
      }, []);

    return (
        <li ref={ref} className="flex flex-col items-end mb-3">
            <div className={styles.message}>{data}</div>
            <div className="text-slate-400 text-sm">{timestamp}</div>
        </li>
    );
};

export default Message;