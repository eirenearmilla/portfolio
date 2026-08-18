"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        image: "/path/to/project-image.jpg",
        title: "Project Title",
        description:
            "Short description of what this project does and the problem it solves.",
        tags: ["Web Development"],
    },
];

export default function ProjectSection() {
    return (
        <section
            id="projects"
            className="w-full mx-auto px-6 sm:px-8 lg:px-12 py-12 border-t border-[#2B2118]/10"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#2B2118] mb-6 md:mb-0">
                        Projects
                    </h2>

                    <Link
                        href="/projects"
                        className="inline-flex gap-2 text-[#B5482A] font-mono text-sm tracking-wide uppercase font-semibold hover:text-[#B5482A]/80 transition-colors duration-300"
                    >
                        View All Projects →
                    </Link>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="overflow-hidden rounded-md border border-[#2B2118]/15 bg-[#F7EDE2] hover:border-[#B5482A]/50 transition-colors duration-200"
                        >
                            {/* Project Image */}
                            <div className="relative w-full aspect-video bg-[#2B2118]/5">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-[#2B2118] mb-2">
                                    {project.title}
                                </h3>

                                <p className="text-md leading-relaxed text-[#2B2118]/70 font-serif mb-4">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="font-mono text-sm px-2 py-1 rounded-sm bg-[#2B2118]/5 text-[#2B2118]/70"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
