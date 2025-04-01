import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.headerContainer}>

      <span className={styles.nameSection}>
        <h1 className={styles.nameTitle}>Tran Van Thi</h1>
        <p className={styles.roleText}>Developer & more</p>
      </span>

    <span className={styles.logoContainer}>
      <div className={styles.logoWrapper}>
        <span className={styles.logoText}>therops</span>
        <span className={styles.logoDot}>.</span>
        <span className={styles.logoCode}>&lt;/&gt;</span>
      </div>
    </span>
  </header>
  );
};

export default Header;
