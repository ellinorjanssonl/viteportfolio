import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <div id="contact" className={styles.contactContainer}>
      <h1 className={styles.contactHeader}>Kontakta Mig</h1>
      <div className={styles.contactInfo}>
        <p><strong>E-post:</strong> dinemail@example.com</p>
        <p><strong>Telefon:</strong> 123-456-7890</p>
        <div className={styles.socialMediaLinks}>
          <a href="https://www.linkedin.com/in/dinprofil" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.github.com/dinanvändarnamn" target="_blank" rel="noopener noreferrer">Github</a>
          <a href="https://www.facebook.com/dinprofil" target="_blank" rel="noopener noreferrer">Facebook</a>
          {/* Lägg till fler länkar efter behov */}
        </div>
      </div>
      <form className={styles.contactForm}>
        <label htmlFor="userComment">Din Kommentar</label>
        <textarea id="userComment" name="comment" rows="4" placeholder="Skriv din kommentar här..."></textarea>
        <button type="submit">Skicka Kommentar</button>
      </form>
    </div>
  );
};
