import React from 'react';
import Experience from './Experience';
import experiences from './experiences.json'; // Import the JSON data

const MyTimeline = () => {
    return (
        <div id="experience" className="pt-20">
            <h1 className="heading text-center">
                My <span className="text-purple">Experience</span>
            </h1>
            <div className="timeline pt-10 flex flex-col items-center gap-y-10 relative">
                <div className="absolute left-[calc(24.4%+8.12%)] w-0.5 h-full bg-gray-300 z-0 hidden lg:block"></div>
                {experiences.map((experience, index) => {
                    const isContinued =
                        index > 0 && experiences[index - 1].subtitle === experience.subtitle;
                    return (
                        <Experience
                            key={index}
                            title={experience.title}
                            subtitle={experience.subtitle}
                            description={experience.description}
                            logo={experience.logo}
                            showLogo={!isContinued} // Show logo only if not continued
                            isLast={index === experiences.length - 1}
                            marginClass={isContinued ? 'ml-28' : 'ml-2'} // Pass margin class
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default MyTimeline;
