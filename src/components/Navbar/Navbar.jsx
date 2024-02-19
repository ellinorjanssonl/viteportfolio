import React, { useState } from 'react';
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faEnvelope, faBriefcase, faCode, faTimes } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = (sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.leftContainer}>
                <a className={styles.title} href="/cv.pdf" download="CV_Ellinor_Jansson_Lande.pdf">Download CV</a>
            </div>
            <div className={styles.rightContainer}>
                {/* Placera krysset utanför den utfällbara menyn men inom rightContainer */}
                {isMenuOpen && (
                    <div className={styles.closeIcon} onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                )}
                <div className={styles.hamburger} onClick={toggleMenu}>
                    {!isMenuOpen && "☰"}
                </div>
                <div className={`${styles.menu} ${isMenuOpen ? styles.show : ''}`}>
                    <ul className={styles.menuItems}>
                        <li><a href="#skills" onClick={(e) => { e.preventDefault(); handleScroll('#skills'); }}><FontAwesomeIcon icon={faCode} />SKILLS</a></li>
                        <li><a href="#projects" onClick={(e) => { e.preventDefault(); handleScroll('#projects'); }}><FontAwesomeIcon icon={faBriefcase} />PROJECTS</a></li>
                        <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleScroll('#contact'); }}><FontAwesomeIcon icon={faEnvelope} />CONTACT</a></li>
                        <li><a href="#about" onClick={(e) => { e.preventDefault(); handleScroll('#about'); }}><FontAwesomeIcon icon={faHouse}/>ABOUT</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};





