import React from "react";
import styles from "../styles/AuthLayout.module.css";

const AuthLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.authBox}>{children}</div>
    </div>
  );
};

export default AuthLayout;
