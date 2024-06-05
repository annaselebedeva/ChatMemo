import React from "react";
import { PRIMARY_COLOR } from "@/constants/constants";
import Image from "next/image";

const ChatArea = () => (
  <div className="p-5 text-2xl bg-white font-bold"> {/*#FD243E*/}
    <Image src="/chat-bubble.svg"
         className={`color-${PRIMARY_COLOR}-500 inline mr-2`}
         alt="ChatMemo logo"
         width={32}
         height={32}
         style={{filter: "invert(28%) sepia(69%) saturate(6428%) hue-rotate(342deg) brightness(107%) contrast(98%)"
    }}
    />
      ChatMemo
  </div>
);

export default ChatArea;