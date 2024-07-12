import React from 'react';
import Experience from './Experience'; // Assuming Experience is in a separate file
import VWlogo from '@/public/VWlogojpg.jpg'
import { StaticImageData } from 'next/image';

interface Experience {
    title: string;
    subtitle: string;
    description: string;
    logo: StaticImageData;
}

const experiences: Experience[] = [
    {
        title: 'Software Engineer Trainee',
        subtitle: 'Volkswagen Group Technology Solutions India',
        description: 'Developed chatbots leveraging Large Language Models (LLMs) to provide users with engaging and informative conversational experiences.',
        logo: VWlogo,
    },
    // Add more experience objects here
];

const MyTimeline = () => {
    return (
        <div className="timeline pt-10 flex justify-center">
            
            {experiences.map((experience) => (
                <Experience
                    key={experience.title} 
                    title={experience.title}
                    subtitle={experience.subtitle}
                    description={experience.description}
                    logo={experience.logo}
                />
            ))}
        </div>
    );
};

export default MyTimeline;
