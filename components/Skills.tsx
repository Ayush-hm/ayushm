"use client";
import { motion } from 'framer-motion';
import React from 'react';
import skills from './skills.json';

const Skills = () => {
    return (
        <motion.div
            id='skills'
            className="pt-20 flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
            viewport={{ once: true }}
        >
            <h1 className="heading mb-20">
                Technical <span className="text-purple">Skills</span>
            </h1>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 w-full max-w-6xl">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.title}
                        className="group p-2 rounded-2xl shadow-lg border-b-2 border-gray-600 flex flex-col items-center justify-center transition-all duration-500 bg-black-200 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 hover:border-transparent"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0, transition: { delay: index * 0.1 } }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
                    </motion.div>           
                ))}
            </div>
        </motion.div>
    );
};

export default Skills;
