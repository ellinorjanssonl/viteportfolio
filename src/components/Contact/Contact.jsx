import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Importera useInView
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';

export const Contact = () => {
  const [comment, setComment] = useState("");
  const [formVisible, setFormVisible] = useState(false);

  // useInView hook för att spåra synligheten av komponenten
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger when 50% of the element is in view
  });

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
      
      <motion.div
        ref={ref}
        initial={{ y: 200, opacity: 0 }} // Börjar positionen lite nedåt och opaciteten som 0
        animate={{ y: inView ? 0 : 50, opacity: inView ? 1 : 0 }} // När inView är true, rör sig till y: 0 och opaciteten till 1
        transition={{ duration: 1 }} // Längden på övergången
        className={styles.contact}
      >
        <h1 className={styles.contactHeader}>CONTACT ME!</h1>
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
        </div>
        {!formVisible && (
          <>
            <p className={styles.buttomP}>Want to leave a comment?</p>
            <button onClick={toggleFormVisibility} className={styles.contactButton}>Click me!</button>
          </>
        )}
  
  {formVisible && (
        <motion.div
          className={styles.contactFormContainer}
          initial={{ scale: 0.5, opacity: 0 }} // Börjar med en mindre skala och opacitet 0
          animate={{ scale: 1, opacity: 1 }} // Animerar till full skala och full opacitet
          transition={{ duration: 0.75 }} // Längden på övergången
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
    </motion.div>
  </div>
  );
};