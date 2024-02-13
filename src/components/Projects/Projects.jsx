import React from "react";
import styles from "./Projects.module.css";

export const Projects = () => {
    return <div id="projects" className={styles.projects}>
            <h1 className ={styles.minasprojects}>Projects</h1>
            <div className={styles.projectsContainer}>
                <div className={styles.project}>
                    <h2 className ={styles.h2}>Project 1</h2>
                    <p className ={styles.p}>This is a project I made</p>
                </div>
                <div className={styles.project}>
                <h2 className ={styles.h2}>Project 2</h2>
                    <p className ={styles.p}>This is a project I made</p>
                </div>
                <div className={styles.project}>
                <h2 className ={styles.h2}>Project 3</h2>
                    <p className ={styles.p}>This is a project I made</p>
                </div>
            </div>
        </div>;
    };
