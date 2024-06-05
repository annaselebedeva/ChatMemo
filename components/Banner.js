import React from "react";
import { PRIMARY_COLOR } from "@/constants/constants";

const ChatArea = () => (
  <div className="p-5 text-2xl bg-white font-bold cursor-default">
    <img src="/chat-bubble.svg"
         className={`color-rose-500 w-8 inline mr-2`}
         alt="ChatMemo logo"
         style={{filter: "invert(28%) sepia(69%) saturate(6428%) hue-rotate(342deg) brightness(107%) contrast(98%)"
    }}
    />
      ChatMemo
  </div>
);

export default ChatArea;