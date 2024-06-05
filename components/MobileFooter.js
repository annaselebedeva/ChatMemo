import React from "react";

const MobileFooter = ({ handleClickMenu, selected }) => {
    return (
        <section className={`flex justify-around items-center border-t-2 ${!selected ? "bg-rose-50" : "bg-white"}`}>
            <div className="border-r-2 flex-auto flex justify-center p-4" onClick={() => handleClickMenu(false)}>
                <img
                    src="/people.png"
                    className="h-10"
                    alt="Contacts tab" />
            </div>
            <div className={`flex-auto flex justify-center p-4 ${selected ? "bg-rose-50" : "bg-white"}`} onClick={() => handleClickMenu(true)}>
                <img
                    src="/chat.png"
                    className="h-10"
                    alt="Chat tab" />
            </div>
        </section>
    );
};
export default MobileFooter;