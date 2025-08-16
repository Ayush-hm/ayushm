// Experience.tsx
import React from "react";
import Image, { StaticImageData } from "next/image";
import { Building2, MapPin, Calendar1 } from "lucide-react";

interface ExperienceProps {
    title: string;
    subtitle: string;
    description: string[];
    location: string;
    logo?: string | StaticImageData;
    showLogo: boolean;
    startDate: string;
    endDate: string;
    isLast: boolean;
}

const Experience: React.FC<ExperienceProps> = ({
    title,
    subtitle,
    description,
    location,
    logo,
    showLogo,
    startDate,
    endDate,
}) => {
    return (
        <div className="relative flex items-start w-full">
            {/* Logo / Dot */}
            {showLogo ? (
                <div className="relative z-10">
                    <div className="w-16 h-16 flex items-center justify-center rounded-xl border border-gray-600 bg-gradient-to-br from-gray-900 to-black shadow-md">
                        {logo && (
                            <Image
                                src={logo}
                                width={50}
                                height={50}
                                alt="Company Logo"
                                className="object-contain rounded-md"
                            />
                        )}
                    </div>
                </div>
            ) : (
                <div className="w-16" />
            )}

            {/* Card */}
            <div className="ml-6 flex-1 relative z-10">
                <div className="p-4 bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-md hover:shadow-xl transition hover:scale-[1.02] border-b-2 border-white-100">
                    <h3 className="text-xl font-bold text-white mb-1">{title}</h3>

                    <div className="flex items-center gap-2 text-sm text-purple-300 mb-1">
                        <Building2 size={16} />
                        <span>{subtitle}</span>
                    </div>

                    <div className="flex items-center gap-6 text-xs text-gray-400 mb-3 flex-wrap md:flex-nowrap">
                        {location && (
                            <div className="flex items-center gap-1 whitespace-nowrap">
                                <MapPin size={14} />
                                <span>{location}</span>
                            </div>
                        )}
                        <div className="flex items-center gap-1 whitespace-nowrap">
                            <Calendar1 size={14} />
                            <span>{startDate} - {endDate}</span>
                        </div>
                    </div>
                    <ul className="list-disc list-inside text-gray-300 leading-1 justify-evenly text-md">
                        {description.map((point, idx) => (
                            <li key={idx}>{point}</li>
                        ))}
                    </ul>
                    {/* <p className="text-gray-300 leading-relaxed">{description}</p> */}
                </div>
            </div>
        </div>
    );
};

export default Experience;
