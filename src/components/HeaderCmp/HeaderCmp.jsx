import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./HeaderCmp.module.css";

const HeaderCmp = () => {
  return (
    <div className={styles.headerWrapper}>
      <NavLink to="/" className={styles.headerHeading}>
        <h1>Github Gist</h1>
      </NavLink>
    </div>
  );
};

export default HeaderCmp;
