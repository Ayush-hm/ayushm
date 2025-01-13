"use client";
import { motion } from 'framer-motion';
import React from 'react';

const Skills = () => {
    const skills = [
        { title: 'Python' },
        { title: 'Java' },
        { title: 'Machine Learning' },
        { title: 'Deep Learning' },
        { title: 'NLP' },
        { title: 'Large Language Models' },
        { title: 'React.js' },
        { title: 'MongoDB' },
    ];

    return (
        <motion.div id='skills' className="pt-40" initial={{
            opacity: 0,
        }}
            whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                    duration: 3 // Animation duration
                }
            }}
            viewport={{ once: true }}>
            <h1 className="heading">Technical <span className="text-purple">Skills</span></h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4 py-10">
                {skills.map((skill) => (
                    <div key={skill.title} className="bg-black-200 rounded-xl shadow-lg p-4 h-20 flex 
                    justify-center items-center border-y-2 border-x-2 border-gray-700 hover:cursor-pointer">
                        <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default Skills;
