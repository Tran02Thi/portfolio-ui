import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./navigation.module.css";

const Radio = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    setTimeout(() => {
      navigate(path);
    }, 500);
  };

  return (
    <div className={styles["radio-container"]}>
      <input 
        defaultChecked 
        id="radio-home" 
        name="radio" 
        type="radio" 
        onChange={() => handleNavigation('/home')} 
      />
      <label htmlFor="radio-home">Home</label>
      
      <input 
        id="radio-projects" 
        name="radio" 
        type="radio" 
        onChange={() => handleNavigation('/projects')}
      />
      <label htmlFor="radio-projects">Projects</label>

      <input 
        id="radio-infor" 
        name="radio" 
        type="radio" 
        onChange={() => handleNavigation('/infor')}
      />
      <label htmlFor="radio-infor">Infor</label>

      <input 
        id="radio-experience" 
        name="radio" 
        type="radio" 
        onChange={() => handleNavigation('/experience')}
      />
      <label htmlFor="radio-experience">Experience</label>

      <input 
        id="radio-contact" 
        name="radio" 
        type="radio" 
        onChange={() => handleNavigation('/contact')}
      />
      <label htmlFor="radio-contact">Contact</label>

      <div className={styles["glider-container"]}>
        <div className={styles.glider} />
      </div>
    </div>
  );
};

export default Radio;
