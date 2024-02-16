import React from "react";
import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
/* import { motion } from "framer-motion" */



function App() {
  return <div className={styles.App}>
     <Navbar/> 
     <About/>
     <Skills/>
     <Projects/>
     <Contact/>
     </div>
};

export default App
