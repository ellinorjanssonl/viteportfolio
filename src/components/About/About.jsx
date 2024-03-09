import React, { useEffect, useState } from "react";
import styles from "./About.module.css";
import { motion, AnimatePresence } from "framer-motion";

export const About = () => {
  const [animate, setAnimate] = useState(false);
  const text = "Front-end utvecklare."; // Texten som ska animeras
  const letters = Array.from(text); 


  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div id="about" className={styles.about}>
      <motion.div
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ duration: 1 }}
       className={styles.about}

      >
      <div className={`${styles.textContainer} ${animate ? styles.slidingText : ''}`}>
        <h1 className={styles.h1}> <span className={styles.ellinor}> ELLINOR </span> JANSSON LANDE</h1>
        <h2 className={`${styles.h2} ${styles.typingEffect}`}>
            <AnimatePresence>
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  {letter}
                </motion.span>
              ))}
            </AnimatePresence>
          </h2>
        <div className={styles.p}>
        <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }} // Lägg till delay för att synka med andra animationer om så önskas
            className={styles.p}
          >
         Jag är en frontend-webbutvecklare med passion för att skapa stilrena, användarvänliga och funktionella webbapplikationer. 
         Jag har en stark förståelse för frontend-utveckling men har också gjort endel backend-applikationer. 
         Jag lär mig snabbt och är alltid ivrig att utöka mina kunskaper och färdigheter. 
         Jag ser fram emot att bidra med min kreativitet och den tekniska kompetens jag har till ett team och hjälpa till att skapa kreativa och välgjorda webbapplikationer.
          </motion.p>
          </div>
      </div>
         <div className={styles.imageBackground}>
         <img src="/Background.png" alt="bakgrund" />
         </div>
           <div className={`${styles.imageContainer} ${animate ? styles.slidingImage : ''}`}>
            <img src="/linkedin.png" alt="bild på mig" />
            </div>
            </motion.div>
    </div>
    
  );
};
