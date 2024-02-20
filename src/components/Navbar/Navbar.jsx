import React, { useState } from 'react';
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faEnvelope, faBriefcase, faCode, faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

export const Navbar = () => {
    // Definiera tillståndsvariabeln och funktionen för att uppdatera detta tillstånd
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = (sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Uppdaterar tillståndet baserat på dess nuvarande värde
    };

    const menuVariants = {
        open: { 
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 30,
                damping: 5
            }
        },

        closed: { 
            opacity: 0,
            x: "100%",
            transition: {
                type: 'spring',
                stiffness: 30,
                damping: 5
            }
        }
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.leftContainer}>
                <a className={styles.title} href="/cv.pdf" download="CV_Ellinor_Jansson_Lande.pdf">Download CV</a>
            </div>
            <div className={styles.rightContainer}>
                {isMenuOpen && (
                    <div className={styles.closeIcon} onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                )}
                <div className={styles.hamburger} onClick={toggleMenu}>
                    {!isMenuOpen && <FontAwesomeIcon icon={faBars} />}
                </div>
                <motion.div
                    className={`${styles.menu} ${isMenuOpen ? styles.show : ''}`}
                    variants={menuVariants}
                    initial="closed"
                    animate={isMenuOpen ? "open" : "closed"}
                >
                    <ul className={styles.menuItems}>
                        <li><a href="#skills" onClick={(e) => { e.preventDefault(); handleScroll('#skills'); }}><FontAwesomeIcon icon={faCode} /><br />SKILLS</a></li>
                        <li><a href="#projects" onClick={(e) => { e.preventDefault(); handleScroll('#projects'); }}><FontAwesomeIcon icon={faBriefcase} /><br />PROJECTS</a></li>
                        <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleScroll('#contact'); }}><FontAwesomeIcon icon={faEnvelope} /><br />CONTACT</a></li>
                        <li><a href="#about" onClick={(e) => { e.preventDefault(); handleScroll('#about'); }}><FontAwesomeIcon icon={faHouse}/><br />ABOUT</a></li>
                    </ul>
                </motion.div>
            </div>
        </nav>
    );
};




