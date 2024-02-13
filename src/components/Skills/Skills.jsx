import React from "react";
import styles from "./Skills.module.css";

export const Skills = () => {
    return <div id="skills" className={styles.skills}>
            
            
            <div className={styles.pContainer}>
            <div className={styles.diamond}>
            <img src="/Illustration (1).png" alt="diamond" />
            </div>
            <p className={styles.p}>Here are some of my different experiences in 
            frontend, backend and other things I consider important for a good understanding of web-aplication designs.</p>
            </div>

            <div className={styles.skillsContainer}>
                <div className={styles.skill}>
                    <h2 className ={styles.h2}>Frontend</h2>
                    <ul className ={styles.list}>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
                <div className={styles.skill}>
                <h2 className ={styles.h2}>Backend</h2>
                    <ul className ={styles.list}>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>API</li>
                        <li>SQL</li>
                    </ul>
                </div>
                <div className={styles.skill}>
                <h2 className ={styles.h2}>Other</h2>
                    <ul className ={styles.list}>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>Photoshop</li>
                        <li>Illustrator</li>
                    </ul>
                </div>
            
                <div className={styles.imageBackground2}>
         <img src="/Background2.png" alt="bakgrund" />
         </div>
            </div>
        </div>;
    };