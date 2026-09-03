"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
    ArrowUpRight,
    X,
    ExternalLink,
} from "lucide-react";

const projects = [
    {
        image: "/projects/hero-serviced-office.png",
        title: "HERO Serviced Office",
        link: "https://hero-office-space.vercel.app/",
        description:
            "A corporate website and digital inquiry platform for a serviced-office provider, built to showcase workspace solutions and convert visitors into qualified leads.",
        tags: ["Web Development", "CMS", "Lead Generation"],
        type: "Live Website",
        details: {
            overview:
                "A full-service corporate platform developed for HERO Serviced Office. The website presents private offices, virtual offices, co-working spaces, meeting rooms, and event spaces while providing customers with streamlined inquiry and quotation workflows.",
            role: "Full-Stack Web Developer",
            technologies: [
                "Next.js",
                "React",
                "Tailwind CSS",
                "Laravel",
                "MySQL",
            ],
            features: [
                "Responsive corporate website",
                "CMS content management",
                "Multi-step inquiry form",
                "Quotation request system",
                "Customer inquiry management",
                "Live chatbot and agent handoff",
                "Email notifications",
            ],
        },
    },

    {
        image: "/projects/lumebeanbar.png",
        title: "Lumé Bean and Bar",
        link: "https://lumébeanandbar.com",
        description:
            "A modern café website designed to showcase the brand, menu, and atmosphere while providing customers with a convenient online booking experience.",
        tags: ["Web Development", "Booking System"],
        type: "Live Website",
        details: {
            overview:
                "A visually engaging digital experience for Lumé Bean and Bar, combining brand presentation with customer-focused features for discovering the café, exploring its offerings, and making reservations.",
            role: "Web Developer",
            technologies: [
                "Next.js",
                "React",
                "Tailwind CSS",
            ],
            features: [
                "Responsive café website",
                "Menu presentation",
                "Online booking system",
                "Contact and inquiry forms",
                "Mobile-first interface",
                "Brand-focused visual design",
            ],
        },
    },

    {
        image: "/projects/alveo-agent.png",
        title: "ALVEO Land Agent",
        link: "https://staging-alveo.vercel.app/",
        description:
            "A real estate web experience designed to help users discover properties, explore developments, and access detailed project information.",
        tags: ["Web Development", "Listing System"],
        type: "Live Website",
        details: {
            overview:
                "A real estate platform focused on property discovery and presentation. The experience organizes developments and property information into an accessible browsing experience for prospective buyers.",
            role: "Web Developer",
            technologies: [
                "Next.js",
                "React",
                "Tailwind CSS",
                "Laravel",
            ],
            features: [
                "Property listing system",
                "Property filtering",
                "Development pages",
                "Property detail pages",
                "Responsive interface",
                "Inquiry functionality",
            ],
        },
    },

    {
        image: "/projects/whole-love.png",
        title: "Whole Love",
        link: "https://www.wholeloveph.com/",
        description:
            "A clean informational website designed to communicate the brand, services, and offerings through an approachable digital experience.",
        tags: ["Web Development", "Informational System"],
        type: "Live Website",
        details: {
            overview:
                "An informational website focused on presenting the organization's identity, services, and key information through a structured and responsive interface.",
            role: "Web Developer",
            technologies: [
                "Next.js",
                "React",
                "Tailwind CSS",
            ],
            features: [
                "Responsive informational website",
                "Service presentation",
                "Content sections",
                "Contact forms",
                "Mobile optimization",
            ],
        },
    },

    {
        image: "/projects/anilao.png",
        title: "Anilao Scuba Diving Center",
        link: "https://anilao-scuba-diving-center.vercel.app/",
        description:
            "A tourism and diving website created to showcase diving experiences, services, and information for visitors planning their Anilao adventure.",
        tags: [
            "Web Development",
            "Tourism",
            "Informational System",
        ],
        type: "Live Website",
        details: {
            overview:
                "A destination-focused website designed for a scuba diving center in Anilao. The platform helps visitors learn about diving services, experiences, and the center while making it easier to get in touch.",
            role: "Web Developer",
            technologies: [
                "Next.js",
                "React",
                "Tailwind CSS",
            ],
            features: [
                "Responsive diving website",
                "Service presentation",
                "Diving experience showcase",
                "Destination information",
                "Contact functionality",
                "Mobile optimization",
            ],
        },
    },

    {
        image: "/projects/hi-beauty-spa.png",
        title: "Hi Beauty Spa",
        link: "https://www.hibeautyspaph.com/",
        description:
            "A modern beauty and wellness website designed to showcase spa services, treatments, and the overall brand experience.",
        tags: [
            "Web Development",
            "Informational System",
        ],
        type: "Live Website",
        details: {
            overview:
                "A customer-focused website for a beauty and wellness business, designed to present services and treatments through a clean, visually engaging interface.",
            role: "Web Developer",
            technologies: [
                "Next.js",
                "React",
                "Tailwind CSS",
            ],
            features: [
                "Responsive spa website",
                "Service and treatment presentation",
                "Brand showcase",
                "Contact functionality",
                "Mobile optimization",
            ],
        },
    },

    {
        image: "/projects/mldesc.png",
        title: "MLD Engineering and Surveying Consultancy",
        link: "https://mldesc.com/",
        description:
            "A professional consultancy website designed to present engineering and surveying services while establishing a credible digital presence.",
        tags: [
            "Web Development",
            "Corporate Website",
        ],
        type: "Live Website",
        details: {
            overview:
                "A professional corporate website for an engineering and surveying consultancy. The platform communicates the company's expertise, services, and professional capabilities through a structured digital experience.",
            role: "Web Developer",
            technologies: [
                "Next.js",
                "React",
                "Tailwind CSS",
            ],
            features: [
                "Responsive corporate website",
                "Service presentation",
                "Company information",
                "Professional portfolio sections",
                "Contact functionality",
                "Mobile optimization",
            ],
        },
    },

    {
        image: "/projects/lifehealth.jpg",
        title: "Life Health Consultancy",
        link: "https://www.figma.com/proto/usSiD76mv8dTSkt0gC9tQI/LifeHealthConsult?node-id=36-140&p=f&t=GYbgwa66OlHjARar-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
        description:
            "A health consultancy website concept focused on presenting professional services, health resources, and an accessible user experience.",
        tags: [
            "UI/UX Design",
            "Web Design",
            "Figma",
        ],
        type: "UI/UX Prototype",
        details: {
            overview:
                "A UI/UX concept designed for Life Health Consultancy. The project focuses on creating a clear information architecture and approachable interface for presenting health consultancy services and resources.",
            role: "UI/UX Designer",
            technologies: [
                "Figma",
                "UI/UX Design",
                "Prototyping",
            ],
            features: [
                "Responsive interface concept",
                "Service presentation",
                "Information architecture",
                "User-focused navigation",
                "Interactive prototype",
                "Mobile interface design",
            ],
        },
    },

    {
        image: "/projects/guidancehub.jpg",
        title: "GuidanceHub",
        link: "",
        description:
            "A centralized guidance and counseling platform designed to streamline student support, counselor workflows, and engagement.",
        tags: [
            "Web Development",
            "Counseling Services",
            "System",
        ],
        type: "Web Application",
        details: {
            overview:
                "GuidanceHub is a comprehensive platform designed to centralize guidance and counseling services. It supports student engagement, counselor workflows, self-assessments, referrals, session tracking, resources, content management, and reporting.",
            role: "Web Developer",
            technologies: [
                "Next.js",
                "React",
                "Tailwind CSS",
            ],
            features: [
                "Student management",
                "Counselor management",
                "Self-assessment tools",
                "Counseling referrals",
                "Session tracking",
                "Resource management",
                "Content management",
                "Reporting and data analytics",
            ],
        },
    },
];

type Project = (typeof projects)[number];

export default function ProjectSection() {
    const [selectedProject, setSelectedProject] =
        useState<Project | null>(null);

    const getProjectAction = (type: string) => {
        switch (type) {
            case "UI/UX Prototype":
                return "View Prototype";

            case "Web Application":
                return "View Application";

            default:
                return "Visit Live Website";
        }
    };

    return (
        <section
            id="projects"
            className="w-full border-t border-[#2B2118]/10 bg-[#F7EDE2]"
        >
            <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 lg:py-16">

                {/* Section Header */}
                <div className="mb-12 sm:mb-16">
                    <div className="mb-5 flex items-center gap-3">
                        <span className="h-px w-8 bg-[#B5482A]" />

                        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#B5482A]">
                            Projects
                        </span>
                    </div>

                    <h2 className="text-3xl font-bold tracking-tight text-[#2B2118] sm:text-4xl">
                        Built & Designed.
                    </h2>
                </div>

                {/* Project Cards */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <article
                            key={project.title}
                            className="group flex h-full flex-col overflow-hidden border border-[#2B2118]/15 bg-white/30 transition-all duration-500 hover:border-[#B5482A]/40"
                        >
                            {/* Project Image */}
                            <button
                                type="button"
                                onClick={() =>
                                    setSelectedProject(project)
                                }
                                aria-label={`View details for ${project.title}`}
                                className="relative aspect-[3/2] shrink-0 overflow-hidden bg-[#2B2118]/5"
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    priority={index === 0}
                                    className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-[#2B2118]/0 transition-colors duration-500 group-hover:bg-[#2B2118]/10" />

                                {/* See Details */}
                                <div className="absolute bottom-5 right-5">
                                    <span className="inline-flex items-center gap-2 rounded-full bg-[#F7EDE2]/90 px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-[#2B2118] backdrop-blur-sm transition-all duration-300 group-hover:bg-[#F7EDE2] group-hover:text-[#B5482A]">
                                        See Details

                                        <ArrowUpRight
                                            size={16}
                                            strokeWidth={1.5}
                                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        />
                                    </span>
                                </div>
                            </button>

                            {/* Content */}
                            <div className="flex flex-1 flex-col p-6 sm:p-8">

                                {/* Main Content */}
                                <div>
                                    <h3 className="mb-4 text-xl font-bold tracking-tight text-[#2B2118] md:text-2xl">
                                        {project.title}
                                    </h3>

                                    <p className="mb-7 font-serif text-base leading-relaxed text-[#2B2118]/65">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="mb-3 flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full border border-[#2B2118]/15 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide text-[#2B2118]/60"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom Actions */}
                                <div className="mt-auto flex items-center gap-3 border-t border-[#2B2118]/15 pt-4">

                                    {/* View Details */}
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setSelectedProject(project)
                                        }
                                        className="flex-1 text-left font-mono text-xs font-semibold uppercase tracking-[0.15em] text-[#2B2118] transition-colors hover:text-[#B5482A]"
                                    >
                                        View Details
                                    </button>

                                    {/* External Link */}
                                    <Link
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${getProjectAction(project.type)} - ${project.title}`}
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2B2118]/20 text-[#2B2118] transition-all duration-300 hover:border-[#B5482A] hover:text-[#B5482A]"
                                    >
                                        <ExternalLink
                                            size={15}
                                            strokeWidth={1.5}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* Project Details Modal */}
            {selectedProject && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${selectedProject.title} project details`}
                >
                    {/* Backdrop */}
                    <button
                        type="button"
                        aria-label="Close project details"
                        onClick={() =>
                            setSelectedProject(null)
                        }
                        className="absolute inset-0 cursor-default bg-[#2B2118]/60 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <div className="relative z-10 max-h-[90vh] w-full max-w-5xl overflow-y-auto border border-[#2B2118]/15 bg-[#F7EDE2] shadow-2xl">

                        {/* Close Button */}
                        <button
                            type="button"
                            onClick={() =>
                                setSelectedProject(null)
                            }
                            aria-label="Close project details"
                            className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-[#2B2118]/15 bg-[#F7EDE2]/90 text-[#2B2118] backdrop-blur-sm transition-all duration-300 hover:border-[#B5482A] hover:bg-[#B5482A] hover:text-white"
                        >
                            <X
                                size={18}
                                strokeWidth={1.5}
                            />
                        </button>

                        {/* Modal Image */}
                        <div className="relative aspect-[16/8] bg-[#2B2118]/5">
                            <Image
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                fill
                                className="object-contain"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#2B2118]/60 via-transparent to-transparent" />

                            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-10">
                                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#F7EDE2]/70">
                                    {selectedProject.type}
                                </p>

                                <h3 className="text-3xl font-bold tracking-tight text-[#F7EDE2] sm:text-5xl">
                                    {selectedProject.title}
                                </h3>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6 sm:p-10 lg:p-12">
                            <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-14">

                                {/* Main Details */}
                                <div className="lg:col-span-2">

                                    {/* Overview */}
                                    <div>
                                        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#B5482A]">
                                            Overview
                                        </p>

                                        <p className="font-serif text-base leading-relaxed text-[#2B2118]/70 sm:text-lg">
                                            {selectedProject.details.overview}
                                        </p>
                                    </div>

                                    {/* Features */}
                                    <div className="mt-10">
                                        <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-[#B5482A]">
                                            Key Features
                                        </p>

                                        <ul className="space-y-3">
                                            {selectedProject.details.features.map(
                                                (feature) => (
                                                    <li
                                                        key={feature}
                                                        className="flex gap-3 text-sm text-[#2B2118]/70"
                                                    >
                                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B5482A]" />

                                                        <span>
                                                            {feature}
                                                        </span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>

                                {/* Project Information */}
                                <aside className="border-t border-[#2B2118]/15 pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">

                                    {/* Role */}
                                    <div className="mb-8">
                                        <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#2B2118]/45">
                                            My Role
                                        </p>

                                        <p className="text-sm font-semibold text-[#2B2118]">
                                            {selectedProject.details.role}
                                        </p>
                                    </div>

                                    {/* Technologies */}
                                    <div className="mb-8">
                                        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#2B2118]/45">
                                            Technologies
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.details.technologies.map(
                                                (technology) => (
                                                    <span
                                                        key={technology}
                                                        className="rounded-full border border-[#2B2118]/15 px-2.5 py-1.5 font-mono text-[10px] text-[#2B2118]/65"
                                                    >
                                                        {technology}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    {/* Project Link */}
                                    <Link
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-[#B5482A] transition-colors hover:text-[#2B2118]"
                                    >
                                        {getProjectAction(
                                            selectedProject.type
                                        )}

                                        <ArrowUpRight
                                            size={15}
                                            strokeWidth={1.5}
                                        />
                                    </Link>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}