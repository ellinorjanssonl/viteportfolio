import React from 'react'
import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faBriefcase, faEnvelope, faHouse } from '@fortawesome/free-solid-svg-icons';



const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

  return (
    <footer className={styles.footerStyle}>
      <nav>
      <ul className={styles.menuItems}>
                        <li><a href="#skills" onClick={(e) => { e.preventDefault(); handleScroll('#skills'); }}>SKILLS</a></li>
                        <li><a href="#projects" onClick={(e) => { e.preventDefault(); handleScroll('#projects'); }}>PROJECTS</a></li>
                        <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleScroll('#contact'); }}>CONTACT</a></li>
                        <li><a href="#about" onClick={(e) => { e.preventDefault(); handleScroll('#about'); }}>ABOUT</a></li>
                    </ul>
      </nav>
    </footer>
  )
}

export default Footer
