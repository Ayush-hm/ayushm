"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import styles from "./Projects.module.css";

const panelsData = [
    {
        category: "AI & Cognitive Assistance",
        title: "Cognitive Assistance for Dementia Patients",
        imageUrl:
            "https://bf.kendal.org/wp-content/uploads/sites/13/2022/04/AdobeStock_319673883-1024x576.jpeg",
        description: "Smart Personal Object Tracker for Dementia Patients",
        githubLink: "https://github.com/BPratyus/Project-SPOT",
    },
    {
        category: "Gaming Accessories",
        title: "Nexus Gear",
        imageUrl: "/NexusGear.png",
        description: "One-stop solution for all gaming accessories.",
        githubLink: "https://github.com/Ayush-hm/Nexus-Gear",
    },
    {
        category: "Restaurant Website",
        title: "Savoura",
        imageUrl: "/Savoura.png",
        description:
            "Website for a restaurant specializing in Mediterranean cuisine.",
        githubLink: "https://github.com/Ayush-hm/Savoura",
    },
    {
        category: "Wearable Tech",
        title: "nVision",
        imageUrl: "/TechVI.png",
        description:
            "A wearable device that helps the visually impaired navigate their surroundings.",
        githubLink: "https://github.com/Ayush-hm/nVision",
    },
    {
        category: "News Aggregator",
        title: "NewsWave",
        imageUrl: "/NewsWave.png",
        description: "Stay informed, all sources, one feed.",
        githubLink: "https://github.com/Ayush-hm/NewsWave",
    },
    {
        category: "E-commerce", 
        title: "HoloDrive",
        imageUrl: "/HoloDrive.png",
        description: "A futuristic AR based Car Dashboard.",
        githubLink: "https://github.com/Ayush-hm/HoloDrive",
    }
];

const Projects = () => {
    const cards = panelsData.map((panel, index) => (
        <Card
            key={index}
            card={{
                category: panel.category,
                title: panel.title,
                src: panel.imageUrl,
                content: (
                    <div className="p-4">
                        <p className="text-sm text-gray-500 dark:text-gray-300">
                            {panel.description}
                        </p>
                        <a
                            href={panel.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline mt-2 block"
                        >
                            View on GitHub
                        </a>
                    </div>
                ),
            }}
            index={index}
        />
    ));

    return (
        <div id="projects" className="w-full h-full pt-20">
            <h1 className="heading">My <span className="text-purple">Projects</span></h1>
            <div className={styles.carouselContainer}>
                <Carousel items={cards} />
            </div>
        </div>
    );
};

export default Projects;
