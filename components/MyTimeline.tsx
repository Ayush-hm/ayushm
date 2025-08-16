// MyTimeline.tsx
import React from "react";
import Experience from "./Experience";
import experiences from "./experiences.json";

const sortedexperiences = [...experiences].sort((a, b) => {
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
});

const MyTimeline = () => {
    return (
        <div id="experience" className="pt-20">
            <h1 className="heading text-center">
                My <span className="text-purple">Experience</span>
            </h1>

            <div className="relative mt-12 flex flex-col gap-y-12 max-w-3xl mx-auto">
                {/* 🔹 Continuous Vertical Line */}
                <div className="absolute left-8 top-0 bottom-0 w-[3px] bg-gray-500" />

                {sortedexperiences.map((sortedexperience, index) => {
                    const isContinued =
                        index > 0 && sortedexperiences[index - 1].subtitle === sortedexperience.subtitle;

                    return (
                        <Experience
                            key={index}
                            title={sortedexperience.title}
                            subtitle={sortedexperience.subtitle}
                            description={sortedexperience.description}
                            logo={sortedexperience.logo}
                            location={sortedexperience.location}
                            startDate={sortedexperience.startDate}
                            endDate={sortedexperience.endDate}
                            showLogo={!isContinued}
                            isLast={index === sortedexperiences.length - 1}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default MyTimeline;
