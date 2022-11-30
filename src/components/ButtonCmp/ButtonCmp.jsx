import React from "react";
import styles from "./ButtonCmp.module.css";

const ButtonCmp = ({ text, onClick, style, ...props }) => {
  return (
    <button
      className={styles.btnCmp}
      style={style}
      onClick={onClick}
      {...props}
    >
      {text || "Button"}
    </button>
  );
};

export default ButtonCmp;
