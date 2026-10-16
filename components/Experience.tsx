// Experience.tsx
import React from "react";
import Image, { StaticImageData } from "next/image";
import { Building2, MapPin } from "lucide-react";

interface ExperienceProps {
    title: string;
    subtitle: string;
    description: string[];
    location: string;
    logo?: string | StaticImageData;
    showLogo: boolean;
    startDate: string;
    endDate: string;
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
        <article className="relative flex w-full items-start">
            {showLogo ? (
                <div className="relative z-10 shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-300/20 bg-[#111323] shadow-[0_0_24px_rgba(139,92,246,0.14)] ring-4 ring-[#080a18] sm:h-16 sm:w-16">
                        {logo && (
                            <Image
                                src={logo}
                                width={42}
                                height={42}
                                alt={`${subtitle} logo`}
                                className="rounded-md object-contain"
                            />
                        )}
                    </div>
                </div>
            ) : (
                <div className="h-14 w-14 shrink-0 sm:h-16 sm:w-16" aria-hidden="true" />
            )}

            <div className="relative z-10 ml-4 min-w-0 flex-1 sm:ml-7">
                <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-[#2c1947] via-[#0c041d] to-[#000000] p-5 shadow-[0_16px_50px_rgba(0,0,0,0.22)] sm:p-7">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent" />
                    <div className="mb-2.5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0">
                            <h3 className="text-lg font-semibold leading-snug tracking-[-0.02em] text-white sm:text-xl">{title}</h3>

                            <div className="mt-2.5 flex items-start gap-2 text-sm text-purple-200/90">
                                <Building2 size={15} className="mt-0.5 shrink-0 text-purple-300" />
                                <span className="leading-5">{subtitle}</span>
                            </div>
                        </div>

                        <span className="flex w-fit shrink-0 items-center gap-2 rounded-full border border-purple-300/15 bg-purple-300/[0.07] px-3 py-1.5 text-[11px] font-medium tracking-wide text-purple-100 sm:text-xs">
                            {endDate.toLowerCase() === "present" && <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(110,231,183,0.7)]" aria-hidden="true" />}
                            {startDate} <span className="text-purple-300/60">-</span> {endDate}
                        </span>
                    </div>

                    <div className="mb-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-gray-400">
                        {location && (
                            <div className="flex items-center gap-1.5">
                                <MapPin size={14} className="text-purple-300/80" />
                                <span>{location}</span>
                            </div>
                        )}
                    </div>

                    <ul className="space-y-2.5 border-t border-purple-200/50 pt-5 text-sm leading-relaxed text-gray-300 sm:text-[15px]">
                        {description.map((point, idx) => (
                            <li key={idx} className="flex gap-3">
                                <span className="shrink-0 font-bold text-purple-100 drop-shadow-[0_0_15px_rgba(203,172,249,1)] brightness-125" aria-hidden="true">—</span>
                                <span className="text-white/75 font-medium">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </article>
    );
};

export default Experience;
