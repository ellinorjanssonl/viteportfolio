import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';

export const Contact = () => {
  const [comment, setComment] = useState(""); // Hantera användarens kommentar

  // Hantera formulärets submit-händelse
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Exempel på att skicka data till Formspree
    const form = new FormData();
    form.append("message", comment);

    fetch("https://formspree.io/f/myyrwayj", { // Ersätt 'yourFormId' med din faktiska Formspree ID
      method: "POST",
      body: form,
      headers: {
        'Accept': 'application/json'
      },
    })
    .then(response => {
      if (response.ok) {
        response.status(200).send("Thank you!");
        setComment(""); // Återställer kommentarfältet
      } else {
        alert("Please, try again!");
      }
    });
  };

  return (
    <motion.div
      id="contact"
      className={styles.contactContainer}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className={styles.contactHeader}>Kontakta Mig</h1>
      <motion.div
        className={styles.contactInfo}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p><strong>E-post:</strong> Ellinor_jansson@hotmail.com</p>
        <p><strong>Telefon:</strong> +46 707836682</p>

        <div className={styles.socialMediaLinks}>
  <a href="https://www.linkedin.com/in/dinprofil" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faLinkedin} size="lg" />
  </a>
  <a href="https://www.github.com/dinanvändarnamn" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faGithub} size="lg" />
  </a>
  <a href="https://www.facebook.com/dinprofil" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faFacebook} size="lg" />
  </a>
</div>

    </motion.div><form className={styles.contactForm} onSubmit={handleSubmit}>
        <label htmlFor="userComment">Din Kommentar</label>
        <textarea
          id="userComment"
          name="comment"
          rows="4"
          placeholder="Skriv din kommentar här..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}></textarea>
        <button type="submit">Skicka Kommentar</button>
      </form>
    </motion.div>
  );
};