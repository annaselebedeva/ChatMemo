import React from "react";
import { useState, useEffect } from "react";
import styles from "../styles/NoSelect.module.css";
export default function ResizablePanel({
    minSize,
    initialSize,
    maxSize,
    children
  }) {
    const [size, setSize] = useState(initialSize);
    const [isResizing, setIsResizing] = useState(false);
  
    useEffect(() => {
      const handleMouseMove = (e) => {
        if (!isResizing) return;

        let newSize = size + e.movementX;

        newSize = Math.max(minSize, Math.min(maxSize, newSize));
        setSize(newSize);
      };
  
      const handleMouseUp = () => setIsResizing(false);
  
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }, [size, isResizing, minSize, maxSize]);
  
    const handleMouseDown = () => setIsResizing(true);

    return (
      <div
        className={`relative shrink-0 h-full ${styles.noSelect}`}
        style={{ "width": `${size}px` }}
      >
        {children}
        <ResizableHandle
          isResizing={isResizing}
          handleMouseDown={handleMouseDown}
        />
      </div>
    );
  }
  
  function ResizableHandle({ isResizing, handleMouseDown }) {
    const positionHandleStyle = "z-10 absolute w-1 top-0 bottom-0 -right-1 cursor-col-resize hover:bg-slate-300";
  
    return (
      <div
        className={`${positionHandleStyle} ${isResizing ? "bg-slate-400" : ""}`}
        onMouseDown={handleMouseDown}
      />
    );
  }