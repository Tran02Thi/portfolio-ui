import React from "react";
import { FiGithub } from 'react-icons/fi';
import { useState } from "react";
import styles from "./Infor.module.css";
import Card from "../../components/Card/card";

function Infor() {
  return (
    <div className={styles.inforContainer}>
      <Card
        imageSrc="https://i.postimg.cc/vHjcRP2J/em.jpg"
        altText="Trần Văn Thi"
        captionText="Hello World"
        containerHeight="200px"
        containerWidth="200px"
        imageHeight="150px"
        imageWidth="150px"
        rotateAmplitude={22}
        scaleOnHover={1.2}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
        overlayContent={<p className="tilted-card-demo-text"></p>}
      />
      <div className={styles.linkContainer}>
        <a
          href="https://www.linkedin.com/in/tran-thi-165964237"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.customLink}
        >
          linked
        </a>
        <a
          href="https://www.instagram.com/tranthi_25/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.customLink}
        >
          instagram
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100035816387544"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.customLink}
        >
          facebook
        </a>
      </div>

      <div className={styles.mailContainer}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={styles.customLink}
        >
          tranthipr30@gmail.com
        </a>
      </div>
    </div>
  );
}

export default Infor;