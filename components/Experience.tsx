import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ExperienceProps {
    title: string;
    subtitle: string;
    description: string;
    logo?: StaticImageData; // Optional logo prop
}

const Experience: React.FC<ExperienceProps> = ({ title, subtitle, description, logo }) => {
    return (
        <div id='experience' className='pt-20' >
            <h1 className="heading">My <span className="text-purple">Experience</span></h1>

            <div className="flex items-center py-10">
                {logo && ( // Conditionally render logo
                    <div className="mr-4 p-2 rounded-xl border-x-2 border-y-2 border-white-100">
                        <Image src={logo} width={100} height={100} className='rounded-xl' alt='Company Logo' />
                    </div>
                )}
                <div className="flex-grow block max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-black-200 dark:border-gray-700 dark:hover:bg-black dark:hover:border-black">
                    <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{subtitle}</p>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Experience;
