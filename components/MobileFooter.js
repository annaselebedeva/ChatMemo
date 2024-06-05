import React from "react";
import styles from "../styles/Footer.module.css";

const MobileFooter = ({ handleClickMenu }) => {

    return (
        <section className="flex justify-around items-center border-t-2">
            <div className="border-r-2 flex-auto flex justify-center p-4" onClick={() => handleClickMenu(false)}>
                <img 
                    src="/people.png"
                    className="h-10"
                    alt="Contacts tab" />
            </div>
            <div className="flex-auto flex justify-center p-4" onClick={() => handleClickMenu(true)}>
                <img 
                    src="/chat.png"
                    className="h-10"
                    alt="Chat tab" />
            </div>
        </section>
    );
};
export default MobileFooter;