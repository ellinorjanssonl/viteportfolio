import { motion } from "framer-motion";
import styles from "./Projects.module.css";
import { useInView } from 'react-intersection-observer';


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
            title: "Food API App",
            description: "En applikation från ett API där man kan söka efter maträtter för att sedan få information om ingidienser, instruktioner och mått.",
            imageUrl: "FOODAPI.png",
            githubUrl: "https://github.com/ellinorjanssonl/FOODAPI",
            websiteUrl: "https://foodapi-ten.vercel.app/"
        },
        {
            id: 3,
            title: "Min Portfolio",
            description: "Min personliga portfolio där jag visar mina projekt och mina kunskaper inom webbutveckling. Koden för denna sida kan hittas i länken till GitHub.",
            imageUrl: "PORTFOLIO.png",
            githubUrl: "https://github.com/ellinorjanssonl/viteportfolio",
            websiteUrl: "https://ellinorsportfolio.vercel.app/"
        },
     
    ];
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0 });

    const projectVariants = {
        hidden: { opacity: 0, y: 300 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.6,
                animation: { duration: 0.5, type: "spring"}

            },
        }),
    };


    return (
        <div ref={ref}>
            <h1 className={styles.h1}>MINA PROJEKT</h1>
            <div className={styles.projects}>
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        custom={index} // Använder index som anpassat värde för att skapa en fördröjningseffekt
                        variants={projectVariants}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'} // Animerar till 'visible' endast om inView är true
                        className={styles.project}
                    >
                        <img src={project.imageUrl} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className={styles.projectLinks}>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">Hemsida</a>
                        </div>
            
                    </motion.div>
                ))}
            </div>
        </div>
    );
}