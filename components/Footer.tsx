import React from 'react';
import { FaEnvelope, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'; // Import icons from tabler-icons-react


const Footer = () => {
    return (
        <footer className="bg-transparent text-center p-4 dark:bg-transparent">
            <div className="w-full mx-auto max-w-screen-xl">
                <h1 className="text-2xl text-purple-600">Ayush Hrishikesh Mishra</h1>
                <div className="flex justify-center space-x-6 mt-4">
                    <a href="mailto:h.ayushm@gmail.com" aria-label="Email">
                        <FaEnvelope className="h-6 w-6 text-purple-600 hover:text-purple-400" />
                    </a>
                    <a href="https://www.linkedin.com/in/ayush-h-mishra/" target='_blank' aria-label="LinkedIn">
                        <FaLinkedin className="h-6 w-6 text-purple-600 hover:text-purple-400" />
                    </a>
                    <a href="https://twitter.com/AyushHrishikesh" aria-label="Twitter">
                        <FaTwitter className="h-6 w-6 text-purple-600 hover:text-purple-400" />
                    </a>
                    <a href="https://github.com/Ayush-hm" aria-label="GitHub">
                        <FaGithub className="h-6 w-6 text-purple-600 hover:text-purple-400" />
                    </a>
                </div>
                <p className="text-gray-400 mt-4">Thanks for Exploring</p>
                <span className="text-sm text-gray-400 block mt-2">
                    © Ayush Hrishikesh Mishra. All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
