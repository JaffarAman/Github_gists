import React from "react";
import styles from "./AvatarCmp.module.css";

const AvatarCmp = ({ img }) => {
  return (
    <img
      src={img || "https://www.w3schools.com/howto/img_avatar.png"}
      className={styles.avatarImg}
    />
  );
};

export default AvatarCmp;
