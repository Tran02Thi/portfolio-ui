import React from "react";
import Header from "../Header/header";
import Navigation from "../Navigation/navigation";
import Wrapper from "../Wrapper/wrapper";
import Copyright from "../Copyright/copyright";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

function Layout() {
  return (
    <div className={styles.layoutContainer}>
      <Wrapper>
        <Header />
        <Navigation />
        <Outlet /> {/* Các component con sẽ được render ở đây */}
      </Wrapper>
      <Copyright />
    </div>
  );
}

export default Layout;