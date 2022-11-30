import React from "react";
import styles from "./InputField.module.css";

const InputField = ({ onChange, value, style, placeholder }) => {
  return (
    <input
      type="text"
      className={styles.inputField}
      onChange={onChange}
      value={value}
      style={style}
      placeholder={placeholder || ""}
    />
  );
};

export default InputField;
