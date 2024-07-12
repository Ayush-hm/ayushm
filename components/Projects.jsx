// components/Panels.js
"use client";
import { useState } from 'react';
import styles from './Projects.module.css';
import {motion } from "framer-motion";
const panelsData = [
    {
        title: 'Cognitive Assistance for Dementia Patients',
        imageUrl: 'https://bf.kendal.org/wp-content/uploads/sites/13/2022/04/AdobeStock_319673883-1024x576.jpeg',
        description: "Smart Personal Object Tracker for Dementia Patients",
        githubLink: "https://github.com/BPratyus/Project-SPOT"
    },
    {
        title: 'Nexus Gear',
        imageUrl: 'NexusGear.png',
        description: "Onestop solution for all gaming accessories.",
        githubLink: "https://github.com/Ayush-hm/Nexus-Gear"
    },
    {
        title: 'Savoura',
        imageUrl: 'Savoura.png',
        description: 'Website for restaurant specializing in Mediterranean cuisine.',
        githubLink: "https://github.com/Ayush-hm/Savoura"
    },
    {
        title: 'nVision',
        imageUrl: 'TechVI.png',
        description: 'A wearable device that helps the visually impaired navigate their surroundings.',
        githubLink: "https://github.com/Ayush-hm/nVision"
    },
    {
        title: 'NewsWave',
        imageUrl: 'NewsWave.png',
        description: 'Stay informed, all sources, one feed..',
        githubLink: "https://github.com/Ayush-hm/NewsWave"
    },
];

const Projects = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div id='projects' className='pt-0 pb-20 justify-center items-center'>
            <h1 className="heading">My <span className="text-purple">Projects</span></h1>

            <div className={styles.container} >
                {panelsData.map((panel, index) => (
                    <motion.div
                        key={index}
                        className={`${styles.panel} ${index === activeIndex ? styles.active : ''}`}
                        onClick={() => setActiveIndex(index)}
                        style={{ backgroundImage: `url('${panel.imageUrl}')` }}
                        initial={{
                            opacity: 0,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0, // Slide in to its original position
                            transition: {
                                duration: 3 // Animation duration
                            }
                        }}
                        viewport={{ once: true }}
                    >
                        <h2>{index == activeIndex ? '' : index + 1}</h2>
                        <a href={panel.githubLink} target='_blank' className="text-sm underline"><h3>{panel.title}</h3></a>
                        <p>{panel.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;