import React from "react"; // Lägg till useState-import
import styles from "./Skills.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGit, faNodeJs, faHtml5, faCss3Alt, faJs, faReact, faBootstrap} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faCodeBranch, faImage} from "@fortawesome/free-solid-svg-icons";


export const Skills = () => {
    return (
        <div id="skills" className={styles.skills}>
            <div className={styles.flexContainer}>
                <div className={styles.pContainer}>
        
                        <p className={styles.p}>The list shows my different experiences in 
                        frontend, backend, and other things I consider important for a good understanding of web-application designs.</p>
                 
                </div>
                <div className={styles.diamond}>
                    <img src="/Illustration (1).png" alt="diamond" />
                </div>
               
                <div className={styles.skillsContainer}>
                    <h1 className={styles.h1}>MY CODING SKILLS</h1>
               
                    <div className={styles.skill}>
                        <ul className={styles.list}>
                            <li><FontAwesomeIcon icon={faHtml5} size="lg" color="red" /> Html</li>
                            <li><FontAwesomeIcon icon={faCss3Alt} size="lg" color="#4487d4" /> Css</li>
                            <li><FontAwesomeIcon icon={faJs} size="lg" color="#cdd758" /> Javascript</li>
                            <li><FontAwesomeIcon icon={faReact} size="lg" color="#3997e8" /> React</li>
                            <li><FontAwesomeIcon icon={faBootstrap} size="lg" color="#43239b" /> Bootstrap</li>
                            <li><FontAwesomeIcon icon={faNodeJs} size="lg" color="#3ab13a" /> NodeJs</li>
                            <li><FontAwesomeIcon icon={faJs} size="lg" color="#cdd758" /> Express</li>
                            <li><FontAwesomeIcon icon={faCodeBranch} size="lg" color="#b24a9b" />API</li>
                            <li><FontAwesomeIcon icon={faDatabase} size="lg" color="grey"/>SQL</li>
                            <li><FontAwesomeIcon icon={faGit} size="lg" color="red" /> Git</li>
                            <li><FontAwesomeIcon icon={faGithub} size="lg" /> Github</li>
                            <li><FontAwesomeIcon icon={faImage} size="lg" color="#6ddd36"/> Photoshop </li> 
                        </ul>   
                    </div>     
                </div>    
            </div>
        </div>
    );
    };

