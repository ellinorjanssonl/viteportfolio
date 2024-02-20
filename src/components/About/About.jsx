import React, { useEffect, useState } from "react";
import styles from "./About.module.css";

export const About = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div id="about" className={styles.about}>
      <div className={`${styles.textContainer} ${animate ? styles.slidingText : ''}`}>
        <h1 className={styles.h1}> <span className={styles.ellinor}> ELLINOR </span> JANSSON LANDE</h1>
        <h2 className={`${styles.h2} ${styles.typingEffect}`}>Frontend Developer.</h2>
        <p className={styles.p}>
          I am a Frontend web developer with a passion for creating beautiful, user-friendly, and functional web applications. 
          I have a strong understanding of front-end development but has also done a lot of backend applications. 
          I am a quick learner and Im always looking to expand my knowledge and skills. 
          I am excited to bring my creativity and technical skills to a team and help create amazing web applications.
         </p>
      </div>
         <div className={styles.imageBackground}>
         <img src="/Background.png" alt="bakgrund" />
         </div>
           <div className={`${styles.imageContainer} ${animate ? styles.slidingImage : ''}`}>
            <img src="/linkedin.png" alt="bild på mig" />
            </div>
    </div>
  );
};
