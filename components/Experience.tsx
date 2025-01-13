import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ExperienceProps {
    title: string;
    subtitle: string;
    description: string;
    logo?: string | StaticImageData;
    showLogo: boolean;
    isLast: boolean;
    marginClass: string; // Add this prop
}

const Experience: React.FC<ExperienceProps> = ({
    title,
    subtitle,
    description,
    logo,
    showLogo,
    marginClass
}) => {
    return (
        <div className={`flex items-start relative justify-evenly w-max flex-grow ${marginClass}`}>
            {/* Left Column: Logo */}
            <div className="flex items-center justify-center w-1/4 relative z-10 mr-2 flex-1">
                {showLogo && logo && (
                    <div className="p-1 rounded-xl border-x-2 border-y-2 border-white-100 bg-[#01031a]">
                        <Image
                            src={logo}
                            width={100}
                            height={100}
                            className="rounded-xl"
                            alt="Company Logo"
                        />
                    </div>
                )}
            </div>

            {/* Right Column: Experience Details */}
            <div
                className="w-full max-w-md p-6 flex-grow bg-white border border-gray-200 rounded-lg shadow
                 hover:bg-gray-100 dark:bg-black-200 dark:border-gray-700 
                 dark:hover:bg-black dark:hover:border-black">
                <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">{subtitle}</p>
                <p className="text-balance">{description}</p>
            </div>
        </div>
    );
};

export default Experience;
