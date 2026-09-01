"use client";

import {
    Code2,
    Wrench,
    Sparkles,
    ArrowUpRight,
} from "lucide-react";

const skillGroups = [
    {
        number: "01",
        title: "Programming & Development",
        description:
            "Technologies I use to build responsive websites, web applications, and database-driven systems.",
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
        description:
            "Tools and platforms I use throughout development, design, deployment, and content management.",
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
        description:
            "Additional tools and capabilities that support design, productivity, marketing, and client growth.",
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
            <div className="px-12 py-4">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    {skillGroups.map((group) => {
                        const Icon = group.icon;

                        return (
                            <div
                                key={group.title}
                                className="group flex flex-col items-center p-7 text-center sm:p-8 lg:p-10"
                            >
                                {/* Header */}
                                <div className="mb-8 flex items-center gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#2B2118]/15 text-[#B5482A] transition-colors duration-300 group-hover:border-[#B5482A]/30 group-hover:text-[#B5482A]">
                                        <Icon size={17} strokeWidth={1.5} />
                                    </div>

                                    <h3 className="text-2xl font-bold tracking-tight text-[#2B2118] transition-colors duration-300 group-hover:text-[#B5482A]">
                                        {group.title}
                                    </h3>
                                </div>

                                {/* Skills */}
                                <div className="flex flex-wrap justify-center gap-2">
                                    {group.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-full border border-[#2B2118]/15 px-3 py-1.5 font-mono text-xs uppercase tracking-wide text-[#2B2118]/80 transition-colors duration-300 group-hover:border-[#B5482A]/30 group-hover:text-[#B5482A]"
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
