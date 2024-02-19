import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Projects.module.css";


function useWindowSize() {
    const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

    useEffect(() => {
        const handleResize = () => {
            setSize([window.innerWidth, window.innerHeight]);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return size;
}

export const Projects = () => {

    const projects = [
        {
            id: 1,
            title: "Project 1",
            description: "This is a project where you can see the latest movies. I used React, Node.js, Express, html and css. I also made a page where you can see the movies you have saved and download it in case there is no wifi.",
            imageUrl: "Illustration.png"
        },
        {
            id: 2,
            title: "Project 2",
            description: "This is a news site where you can read the latest news. I used React, Node.js, Express, html and css. I also made a page where you can see the news you have saved.",
            imageUrl: "Ilustrationbottom.png"
        },
        {
            id: 3,
            title: "Project 3",
            description: "This is a project is a webshop for a company that sells clothes. I used React, Node.js, Express, html and css.  I also made a page where you can see your orders and a page where you can see the products you have in your cart",
            imageUrl: "Illustrationtop.png"
        },
        // Lägg till fler projekt efter behov
    ];

    const [width] = useWindowSize();

    const projectVariants = {
        initial: (custom) => ({
            opacity: 0,
            x: custom * 50
        }),
        animate: {
            opacity: 1.5,
            x: 0,
            transition: { type: "spring", stiffness: 100 }
        },
        whileHover: {
            scale: width > 600 ? 1.1 : 1.05, // Mindre skalning på små skärmar
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            },
            originX: 0.5,
            originY: 0.5,
        }
    };

    return (
        <motion.div
            id="projects"
            className={styles.projects}
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: 0.2, delayChildren: 0.5 }}
        >
            <div className={styles.projectContainer}>
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        custom={project.id}
                        variants={projectVariants}
                        whileHover="whileHover"
                        className={styles.project}
                    >
                        <img src={project.imageUrl} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className={styles.projectLinks}>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">Website</a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}