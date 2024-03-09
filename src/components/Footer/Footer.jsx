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
      <li><a href="#skills" onClick={(e) => { e.preventDefault(); handleScroll('#skills'); }}><FontAwesomeIcon icon={faCode} /><br /></a></li>
                        <li><a href="#projects" onClick={(e) => { e.preventDefault(); handleScroll('#projects'); }}><FontAwesomeIcon icon={faBriefcase} /><br /></a></li>
                        <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleScroll('#contact'); }}><FontAwesomeIcon icon={faEnvelope} /><br /></a></li>
                        <li><a href="#about" onClick={(e) => { e.preventDefault(); handleScroll('#about'); }}><FontAwesomeIcon icon={faHouse}/><br /></a></li>
                    </ul>
      </nav>
      <div className={styles.footertext}>  
      <p>Denna portfolio är skapad av Ellinor Jansson Lande. © 2024 </p>
      </div>
    </footer>
  )
}

export default Footer
