"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import styles from "./Projects.module.css";
import projects from './projects.json';

const Projects = () => {
    const cards = projects.map((panel, index) => (
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
