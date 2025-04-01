import React from "react";
import Background from "../../assets/videos/Background.mp4";
import styles from "./videobackground.module.css";

function VideoBackground() {
    return (
      <div className={styles["video-container"]}>
        <video autoPlay loop muted playsInline className={styles.video}>
          <source src={Background} type="video/mp4" />
        </video>
      </div>
    );
  };
  
export default VideoBackground;
  
