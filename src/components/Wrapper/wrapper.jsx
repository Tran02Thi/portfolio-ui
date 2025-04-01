import React from "react";
import styles from "./wrapper.module.css";
import VideoBackground from "../VideoBackground/videobackground";
import Background from "../../assets/videos/Background.mp4";

function Wrapper( {children} ) {
    return (
        <div className={styles.whiteWrapper}>
            {children}
            <video autoPlay loop muted playsInline className={styles.video}>
                <source src={Background} type="video/mp4" />
            </video>
        </div>
    )
}

export default Wrapper;
