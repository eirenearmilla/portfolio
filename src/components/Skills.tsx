"use client";

import {
    Code2,
    Wrench,
    Sparkles,
} from "lucide-react";

const skillGroups = [
    {
        number: "01",
        title: "Programming & Development",
        icon: Code2,
        skills: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "PHP",
            "Laravel",
            "Node.js",
            "MySQL",
        ],
    },
    {
        number: "02",
        title: "Tools & Platforms",
        icon: Wrench,
        skills: [
            "Git",
            "GitHub",
            "Vercel",
            "Railway",
            "DBeaver",
            "Figma",
            "WordPress",
            "Elementor",
        ],
    },
    {
        number: "03",
        title: "Other Technologies & Skills",
        icon: Sparkles,
        skills: [
            "GitHub Copilot",
            "Claude",
            "ChatGPT",
            "Canva",
            "Meta Business Suite",
            "UI/UX",
            "Client Generation",
            "Social Media Marketing",
        ],
    },
];

export default function SkillsSection() {
    return (
        <section
            id="skills"
            className="w-full border-t border-[#2B2118]/10 bg-[#F7EDE2]"
        >
            <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16">

                {/* Section Header */}
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="h-px w-8 bg-[#B5482A]" />

                        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#B5482A]">
                            Technical Skills
                        </span>
                    </div>

                    <h2 className="text-3xl font-bold tracking-tight text-[#2B2118] sm:text-4xl">
                        Skills & Technologies.
                    </h2>
                </div>

                {/* Skills */}
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    {skillGroups.map((group) => {
                        const Icon = group.icon;

                        return (
                            <div
                                key={group.title}
                                className="group flex flex-col items-center px-2 py-8 text-center lg:px-10"
                            >
                                {/* Header */}
                                <div className="mb-8 flex flex-col items-center gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#2B2118]/15 text-[#B5482A] transition-all duration-300 group-hover:border-[#B5482A]/40 group-hover:bg-[#B5482A] group-hover:text-white">
                                        <Icon
                                            size={18}
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    <h3 className="text-xl font-bold leading-tight tracking-tight text-[#2B2118] transition-colors duration-300 group-hover:text-[#B5482A] sm:text-2xl">
                                        {group.title}
                                    </h3>
                                </div>

                                {/* Skills */}
                                <div className="flex flex-wrap justify-center gap-2">
                                    {group.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-full border border-[#2B2118]/15 px-3 py-1.5 font-mono text-xs uppercase tracking-wide text-[#2B2118]/80 transition-all duration-300 group-hover:border-[#B5482A]/30 group-hover:text-[#B5482A]"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}