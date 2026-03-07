"use client";
import { motion } from 'framer-motion';
import React from 'react';
import skills from './skills.json';
import { 
    SiPython, 
    SiJavascript, 
    SiReact, 
    SiNodedotjs, 
    SiMongodb, 
    SiFlask, 
    SiFastapi, 
    SiPostgresql, 
    SiGraphql, 
    SiCodefactor
} from 'react-icons/si';
import { SiLanggraph, SiCrewai } from '@icons-pack/react-simple-icons';
import { Brain, Zap, MessageSquare, Bot, Users } from 'lucide-react';

const iconMap: { [key: string]: React.ComponentType<any> } = {
    "Python": SiPython,
    "JavaScript": SiJavascript,
    "React.js": SiReact,
    "Node.js": SiNodedotjs,
    "MongoDB": SiMongodb,
    "Machine Learning": Brain,
    "Deep Learning": Zap,
    "NLP": MessageSquare,
    "Flask": SiFlask,
    "FastAPI": SiFastapi,
    "SQL": SiPostgresql,
    "GraphQL": SiGraphql,
    "Agentic AI": Bot,
    "Crew.ai": SiCrewai,
    "LangGraph": SiLanggraph,
};

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

            <div className="w-full max-w-6xl px-4 space-y-10">
                {skills.map((category, categoryIndex) => (
                    <motion.div
                        key={category.category}
                        className="flex flex-col items-start"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0, transition: { delay: categoryIndex * 0.2 } }}
                        viewport={{ once: true }}
                    >
                        <div className="w-fit mb-6 pb-3 border-b-2 border-gradient" style={{
                            backgroundImage: 'linear-gradient(to right, #b895f0, transparent)',
                            backgroundPosition: 'bottom',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '100% 2px'
                        }}>
                            <h2 className="text-2xl font-bold text-white">
                                {category.category}
                            </h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
                            {category.skills.map((skill, skillIndex) => {
                                const IconComponent = iconMap[skill.title] || SiCodefactor;
                                return (
                                    <motion.div
                                        key={skill.title}
                                        className="group relative p-4 rounded-2xl shadow-lg border border-gray-700 flex flex-col items-center justify-center transition-all duration-500 bg-black-200 hover:bg-gradient-to-br hover:from-purple-600 hover:to-purple-500 hover:border-purple-500 hover:shadow-purple-500/25 hover:shadow-2xl"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0, transition: { delay: (categoryIndex * 0.2) + (skillIndex * 0.1) } }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.05, rotateY: 5 }}
                                    >
                                        <div className="mb-4 p-1.5 rounded-full bg-gradient-to-br  transition-colors duration-500">
                                            <IconComponent className="w-7 h-7 text-white" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-white text-center group-hover:text-white transition-colors duration-300">
                                            {skill.title}
                                        </h3>
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Skills;
