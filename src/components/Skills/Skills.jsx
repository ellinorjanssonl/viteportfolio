import React from 'react';
import styles from './Skills.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faGit,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faBootstrap,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCodeBranch, faImage } from '@fortawesome/free-solid-svg-icons';
import { motion, useInView } from 'framer-motion';

export const Skills = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const diamondVariants = {
    visible: { opacity: 1, scale: 1, rotate: 360, transition: { duration: 1.5 } },
    hidden: { opacity: 0, scale: 0 }
};

  const containerVariants = {

    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.9,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      scale: 0.45,
    },
  };

 
  return (
    <motion.div
    id='skills'
    ref={ref}
    variants={containerVariants}
    initial="hidden"
    animate={isInView ? 'visible' : 'hidden'}
    className={styles.skills}
  >
    <div className={styles.flexContainer}>
      <div className={styles.pContainer}>
        <p className={styles.p}>
          Listan visar mina erfarenheter och kunskaper inom front-end och backend samt det jag kan tycka är viktigt utöver inom visuell design.
        </p>
      </div>
      <motion.div
        ref={ref}
        variants={diamondVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={styles.diamond}
      >
        <img src="/Illustration (1).png" alt="diamond" />
      </motion.div>
    
      <div className={styles.skillsContainer}>
        <h1 className={styles.h1}>MINA ERFARENHETER</h1>
        <div className={styles.circlesContainer}>
    <div className={styles.skillGroup}>
        <img className={styles.circles} src="/100cirkle.png" alt="100% circle"/>
        <ul className={styles.list}>
            <li><FontAwesomeIcon icon={faHtml5} size="lg" color="red" /> Html</li>
            <li><FontAwesomeIcon icon={faCss3Alt} size="lg" color="#4487d4" /> Css</li>
            <li><FontAwesomeIcon icon={faBootstrap} size="lg" color="#43239b" /> Bootstrap</li>
        </ul>
    </div>
    <div className={styles.skillGroup}>
        <img className={styles.circles} src="/87cirkle.png" alt="87% circle"/>
        <ul className={styles.list}>
            <li><FontAwesomeIcon icon={faGit} size="lg" color="red" /> Git</li>
            <li><FontAwesomeIcon icon={faGithub} size="lg" /> Github</li>
            <li><FontAwesomeIcon icon={faImage} size="lg" color="#6ddd36"/> Photoshop </li> 
        </ul>
    </div>
    <div className={styles.skillGroup}>
        <img className={styles.circles} src="/33cirkle.png" alt="33% circle"/>
        <ul className={styles.list}>
            <li><FontAwesomeIcon icon={faJs} size="lg" color="#cdd758" /> Express</li>
            <li><FontAwesomeIcon icon={faCodeBranch} size="lg" color="#b24a9b" />API</li>
            <li><FontAwesomeIcon icon={faDatabase} size="lg" color="grey"/>SQL</li>
        </ul>
    </div>
    <div className={styles.skillGroup}>
        <img className={styles.circles} src="/63cirkle.png" alt="67% circle"/>
        <ul className={styles.list}>
            <li><FontAwesomeIcon icon={faJs} size="lg" color="#cdd758" /> Javascript</li>
            <li><FontAwesomeIcon icon={faReact} size="lg" color="#3997e8" /> React</li>
            <li><FontAwesomeIcon icon={faNodeJs} size="lg" color="#3ab13a" /> NodeJs</li>
        </ul>
    </div>


         
        </div>
      </div>
    </div>
  </motion.div>
    );
    };

