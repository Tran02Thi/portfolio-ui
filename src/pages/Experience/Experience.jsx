import React from "react";
import { FiGithub } from 'react-icons/fi';
import { useState } from "react";
import styles from "./Experience.module.css";
import Carousel from "../../components/Carousel/carousel";

function Experience() {

   return (
      <div className={styles.experienceContainer}>
        <Carousel
          baseWidth={250}
          // autoplay={true}
          autoplayDelay={3000}
          pauseOnHover={true}
          loop={true}
          round={false}
        />
      </div>
    );
}

export default Experience;