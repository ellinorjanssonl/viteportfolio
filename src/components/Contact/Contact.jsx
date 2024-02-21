import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';

export const Contact = () => {
  const [comment, setComment] = useState(""); // Hantera användarens kommentar
  const [formVisible, setFormVisible] = useState(false); // State för att hantera formulärets synlighet

  // Hantera formulärets submit-händelse
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Exempel på att skicka data till Formspree
    const form = new FormData();
    form.append("message", comment);

    fetch("https://formspree.io/f/myyrwayj", {
      method: "POST",
      body: form,
      headers: {
        'Accept': 'application/json'
      },
    })
    .then(response => {
      if (response.ok) {
        setComment(""); // Återställer kommentarfältet
      } else {
        alert("Please, try again!");
      }
    });
  };

  // Funktion för att växla synligheten av formuläret
  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
  };

  return (
    <div id="contact" className={styles.contact}>
   
      <h1 className={styles.contactHeader}>Contact me!</h1>
      <p><strong>E-mail:</strong> Ellinor_jansson@hotmail.com</p>
      <p><strong>Phone number:</strong> +46 707836682</p>

      <div className={styles.socialMediaLinks}>
        <a href="https://www.linkedin.com/in//ellinor-jansson-lande-6680bb167/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a href="https://www.github.com/ellinorjanssonl" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <a href="https://www.facebook.com/Ellinor.Jansson.Lande" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>
        {!formVisible && ( // Button is only shown if formVisible is false
        <button onClick={toggleFormVisibility} className={styles.contactButton}>Want to leave a comment?</button>
      )}
      </div>

     

      {formVisible && (
        <motion.div
          className={styles.contactFormContainer}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 2 }}
          transition={{ duration: 1.5 }}
        >
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <label htmlFor="userComment">Send a comment to me!</label>
            <textarea
              id="userComment"
              name="comment"
              rows="4"
              placeholder="Write your comment here..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </motion.div>
      )}
    </div>
  );
};
