import React from "react";
import styles from "./Core.module.css";


import Auth from "../auth/Auth";


const Header: React.FC = () => {
  return (
    <div>
      <Auth />

      <div className={styles.core_header}>
        <h1 className={styles.core_title}>Target</h1>
      
      </div>
    </div>
  );
};

export default Header;