import React from "react";

const Button = ({ style, onClickButton, children }) => {
    return (
        <button 
            className={style}
            onClick={onClickButton}>
                {children}
        </button>
    );
};

export default Button;