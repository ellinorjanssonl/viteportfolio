import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Projects.module.css";
import { useInView } from 'react-intersection-observer';


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
            title: "Art Gallery Shop",
            description: "En webbshop med mina egna målningar och min konst i en fungerande webbshop. Här kan man se mina målningar och lägga till dem i en varukorg.",
            imageUrl: "arpage.png",
            githubUrl: "https://github.com/ellinorjanssonl/myArtPage",
            websiteUrl: "https://ellinorsart.vercel.app/"
        },
        {
            id: 2,
            title: "Project 2",
            description: "This is a news site where you can read the latest news. I used React, Node.js, Express, html and css. I also made a page where you can see the news you have saved.",
            imageUrl: "Ilustrationbottom.png",
            githubUrl: "https://github.com/ellinorjanssonl",
            websiteUrl: "https://ellinorsportfolio.vercel.app/"
        },
        {
            id: 3,
            title: "Project 3",
            description: "This is a project is a webshop for a company that sells clothes. I used React, Node.js, Express, html and css.  I also made a page where you can see your orders and a page where you can see the products you have in your cart",
            imageUrl: "Illustrationtop.png",
            githubUrl: "https://github.com/ellinorjanssonl",
            websiteUrl: "https://ellinorsportfolio.vercel.app/"
        },
     
    ];

    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 }); 

    const fadeInVariant = {
        visible: { opacity: 1, transition: { duration: 1.2 } },
        hidden: { opacity: 0 },
    };

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
            scale: width > 300 ? 1.1 : 1.05, // Mindre skalning på små skärmar
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            },
            originX: 0.5,
            originY: 0.5,
        }
    };

    return (
        <div>
        <div className={styles.h1}>
            <motion.h1
                ref={ref}
                variants={fadeInVariant}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
            >
                MY PROJECTS
            </motion.h1> 
        </div>
            <motion.div
                id="projects"
                className={styles.projects}
                initial="initial"
                animate="animate"
                transition={{ staggerChildren: 0.9, delayChildren: 0.5 }}
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
                     <div className={styles.imageBackground}>
         <img src="/Background.png" alt="bakgrund" />
         </div>
                </div>
            </motion.div>
        </div>
    );
}