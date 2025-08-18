"use client";
import React from "react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

const publications = [
    {
        id: "10.1109/ICETSIS61505.2024.10459484.",
        title: "Cognitive Assistance for Dementia Patients",
        authors: "Dheeraj Kiran Enna, Pratyus Basuli, Ayush Hrishikesh Mishra, Sunil Kumar Singh",
        conference: "IEEE International Conference on Emerging Trends in Smart Innovation Systems (ICETSIS 2024)",
        publishedOn: "2025-07-15",
        link: "https://arxiv.org/abs/1234.5678"
    },
];


const Publications = () => {
    return (
        <div id="publications" className="w-full h-full pt-20">
            <h1 className="heading">
                My <span className="text-purple">Publications</span>
            </h1>

            <div className="grid sm:grid-cols-2 gap-6 mt-10">
                {publications.map((pub) => (
                    <CardContainer key={pub.id} className="inter-var">
                        <CardBody className="bg-gray-50 dark:bg-black border rounded-xl p-6 w-auto sm:w-[30rem]">
                            <CardItem translateZ="50" className="text-xl font-bold text-neutral-800 dark:text-white">
                                {pub.title}
                            </CardItem>

                            <CardItem as="p" translateZ="40" className="text-sm mt-1 text-neutral-500 dark:text-neutral-400">
                                {pub.authors}
                            </CardItem>

                            <CardItem as="p" translateZ="30" className="text-xs text-neutral-400 mt-1">
                                Publication ID: {pub.id}
                            </CardItem>

                            <CardItem
                                as="a"
                                translateZ="20"
                                href={pub.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-block px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-semibold"
                            >
                                View Research Paper →
                            </CardItem>

                            {/* 🔹 Conference name in italics */}
                            <CardItem as="p" translateZ="60" className="mt-4 italic text-neutral-700 dark:text-neutral-300 text-sm">
                                {pub.conference}
                            </CardItem>

                            <div className="flex justify-between items-center mt-6 text-xs text-neutral-500 dark:text-neutral-400">
                                <span>Published on: {pub.publishedOn}</span>
                            </div>
                        </CardBody>

                    </CardContainer>
                ))}
            </div>
        </div>
    );
};

export default Publications;
