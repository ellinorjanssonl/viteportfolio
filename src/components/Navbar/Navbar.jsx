import React, { useState } from 'react';
import styles from "./Navbar.module.css";

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
                <div className={styles.hamburger} onClick={toggleMenu}>☰</div>
                <div className={`${styles.menu} ${isMenuOpen ? styles.show : ''}`}>
                    <ul className={styles.menuItems}>
                        <li><a href="#about" onClick={(e) => { e.preventDefault(); handleScroll('#about'); }}>About</a></li>
                        <li><a href="#skills" onClick={(e) => { e.preventDefault(); handleScroll('#skills'); }}>Skills</a></li>
                        <li><a href="#projects" onClick={(e) => { e.preventDefault(); handleScroll('#projects'); }}>Projects</a></li>
                        <li><div className={styles.contact}><a href="#contact" onClick={(e) => { e.preventDefault(); handleScroll('#contact'); }}>Contact</a></div></li>
                        <li><a href="#Home" onClick={(e) => { e.preventDefault(); handleScroll('/'); }}>Home</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};





