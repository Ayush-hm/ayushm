// MyTimeline.tsx
import React from "react";
import Experience from "./Experience";
import experiences from "./experiences.json";

const sortedexperiences = [...experiences].sort((a, b) => {
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
});

const MyTimeline = () => {
    return (
        <section id="experience" className="relative px-4 pb-16 pt-24 sm:px-6">
            <div className="pointer-events-none absolute left-1/2 top-16 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-500/[0.08] blur-[100px]" aria-hidden="true" />
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="heading">
                    My <span className="text-purple">Experience</span>
                </h2>
            </div>

            <div className="relative mx-auto mt-14 flex max-w-5xl flex-col gap-y-7 sm:mt-16 sm:gap-y-9">
                <div
                    className="absolute bottom-0 left-[27px] top-14 w-[1.4px] bg-slate-300/70 sm:left-[31px] sm:top-16"
                    aria-hidden="true"
                />

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
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default MyTimeline;
