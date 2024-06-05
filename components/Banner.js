import React from "react";
import { PRIMARY_COLOR } from "@/constants/constants";

const ChatArea = () => (
  <div className="p-5 text-2xl bg-rose-900 text-white font-bold cursor-default">
    <img src="/chat-bubble.svg"
         className={`color-rose-500 w-8 inline mr-2`}
         alt="ChatMemo logo"
         style={{ filter: "brightness(0) invert(1)" }}
    />
      ChatMemo
  </div>
);

export default ChatArea;