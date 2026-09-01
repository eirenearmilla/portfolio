"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, X, ExternalLink } from "lucide-react";

const projects = [
    {
        image: "/path/to/hero-project.jpg",
        title: "HERO Serviced Office",
        link: "https://heroservicedoffice.com",
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
        image: "/path/to/lume-project.jpg",
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
        image: "/path/to/alveo-project.jpg",
        title: "ALVEO Land",
        link: "https://alveoland.com",
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
        image: "/path/to/whole-love-project.jpg",
        title: "Whole Love",
        link: "https://wholelove.com",
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
        image: "/path/to/anilao-project.jpg",
        title: "Anilao Scuba Diving Center",
        link: "https://anilaoscubadiving.com",
        description:
            "A tourism and diving website created to showcase diving experiences, services, and information for visitors planning their Anilao adventure.",
        tags: ["Web Development", "Tourism", "Informational System"],
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
        image: "/path/to/hi-beauty-spa-project.jpg",
        title: "Hi Beauty Spa",
        link: "https://hibeautyspa.com",
        description:
            "A modern beauty and wellness website designed to showcase spa services, treatments, and the overall brand experience.",
        tags: ["Web Development", "Informational System"],
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
        image: "/path/to/mld-project.jpg",
        title: "MLD Engineering and Surveying Consultancy",
        link: "https://mldesc.com/",
        description:
            "A professional consultancy website designed to present engineering and surveying services while establishing a credible digital presence.",
        tags: ["Web Development", "Corporate Website"],
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
        image: "/path/to/life-health-project.jpg",
        title: "Life Health Consultancy",
        link: "https://www.figma.com/proto/usSiD76mv8dTSkt0gC9tQI/LifeHealthConsult?node-id=36-140&p=f&t=GYbgwa66OlHjARar-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
        description:
            "A health consultancy website concept focused on presenting professional services, health resources, and an accessible user experience.",
        tags: ["UI/UX Design", "Web Design", "Figma"],
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
        image: "/path/to/guidancehub-project.jpg",
        title: "GuidanceHub",
        link: "https://www.figma.com/proto/usSiD76mv8dTSkt0gC9tQI/LifeHealthConsult?node-id=36-140&p=f&t=GYbgwa66OlHjARar-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
        description:
            "A centralized guidance and counseling platform designed to streamline student support, counselor workflows, and engagement.",
        tags: ["Web Development", "Counseling Services", "System"],
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
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section
            id="projects"
            className="w-full border-t border-[#2B2118]/10 bg-[#F7EDE2]"
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">

                {/* Section Header */}
                <div className="mb-12 sm:mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#2B2118]">
                        Projects
                    </h2>
                </div>

                {/* Project Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <article
                            key={project.title}
                            className="group flex flex-col h-full overflow-hidden border border-[#2B2118]/15 bg-white/30 transition-all duration-500 hover:border-[#B5482A]/40"
                        >
                            {/* Project Image */}
                            <button
                                type="button" 
                                onClick={() => setSelectedProject(project)}
                                aria-label={`View details for ${project.title}`}
                                className="relative aspect-[3/2] shrink-0 overflow-hidden bg-[#2B2118]/5"
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    priority={index === 0}
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                                />

                                {/* Image Overlay */}
                                <div className="absolute inset-0 bg-[#2B2118]/0 group-hover:bg-[#2B2118]/10 transition-colors duration-500" />

                                {/* See Details */}
                                <div className="absolute right-5 bottom-5">
                                    <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#F7EDE2]/90 backdrop-blur-sm text-xs font-mono uppercase tracking-[0.15em] font-semibold text-[#2B2118] transition-all duration-300 group-hover:bg-[#F7EDE2] group-hover:text-[#B5482A]">
                                        See Details
                                        <ArrowUpRight
                                            size={16}
                                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        />
                                    </span>
                                </div>
                            </button>

                            {/* Content */}
                            <div className="flex flex-col flex-1 p-6 sm:p-8">

                                <div>
                                    {/* Title */}
                                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#2B2118] mb-4">
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-md leading-relaxed text-[#2B2118]/65 font-serif mb-7">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1.5 border border-[#2B2118]/15 rounded-full font-mono text-[10px] uppercase tracking-wide text-[#2B2118]/60"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom Actions */}
                                <div className="mt-auto pt-4 flex items-center gap-3 border-t border-[#2B2118]/15 mt-8">

                                    {/* Details */}
                                    <button
                                        type="button"
                                        onClick={() => setSelectedProject(project)}
                                        className="flex-1 text-left font-mono text-xs uppercase tracking-[0.15em] font-semibold text-[#2B2118] hover:text-[#B5482A] transition-colors"
                                    >
                                        Visit Site
                                    </button>

                                    {/* Website */}
                                    <Link
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Visit ${project.title} website`}
                                        className="flex items-center justify-center w-10 h-10 rounded-full border border-[#2B2118]/20 text-[#2B2118] hover:border-[#B5482A] hover:text-[#B5482A] transition-all duration-300"
                                    >
                                        <ExternalLink size={15} />
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
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 border border-[#2B2118]/15 bg-[#F7EDE2]/90 backdrop-blur-sm rounded-lg shadow-2xl shadow-[#2B2118]/20"
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${selectedProject.title} project details`}
                >
                    {/* Backdrop */}
                    <button
                        type="button"
                        aria-label="Close project details"
                        onClick={() => setSelectedProject(null)}
                        className="absolute inset-0 bg-[#2B2118]/60 backdrop-blur-sm cursor-default"
                    />

                    {/* Modal */}
                    <div className="relative z-10 w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#F7EDE2] border border-[#2B2118]/15 shadow-2xl">

                        {/* Close Button */}
                        <button
                            type="button"
                            onClick={() => setSelectedProject(null)}
                            aria-label="Close"
                            className="absolute top-5 right-5 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-[#F7EDE2]/90 border border-[#2B2118]/15 text-[#2B2118] hover:text-[#B5482A] hover:border-[#B5482A] transition-all"
                        >
                            <X size={18} />
                        </button>

                        {/* Modal Image */}
                        <div className="relative aspect-[16/8] bg-[#2B2118]/5">
                            <Image
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                fill
                                className="object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#2B2118]/50 via-transparent to-transparent" />

                            <div className="absolute bottom-6 left-6 sm:left-10">
                                <h3 className="text-3xl sm:text-5xl font-bold text-[#F7EDE2] mt-2">
                                    {selectedProject.title}
                                </h3>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6 sm:p-10 lg:p-12">

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">

                                {/* Main Details */}
                                <div className="lg:col-span-2">
                                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#B5482A] mb-4">
                                        Overview
                                    </p>

                                    <p className="text-base sm:text-lg leading-relaxed font-serif text-[#2B2118]/70">
                                        {selectedProject.details.overview}
                                    </p>

                                    {/* Features */}
                                    <div className="mt-10">
                                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#B5482A] mb-5">
                                            Key Features
                                        </p>

                                        <ul className="space-y-3">
                                            {selectedProject.details.features.map(
                                                (feature) => (
                                                    <li
                                                        key={feature}
                                                        className="flex gap-3 text-sm text-[#2B2118]/70"
                                                    >
                                                        <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-[#B5482A]" />
                                                        {feature}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <aside className="border-t lg:border-t-0 lg:border-l border-[#2B2118]/15 pt-8 lg:pt-0 lg:pl-8">

                                    {/* Role */}
                                    <div className="mb-8">
                                        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#2B2118]/45 mb-2">
                                            My Role
                                        </p>

                                        <p className="text-sm font-semibold text-[#2B2118]">
                                            {selectedProject.details.role}
                                        </p>
                                    </div>

                                    {/* Technologies */}
                                    <div className="mb-8">
                                        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#2B2118]/45 mb-3">
                                            Technologies
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.details.technologies.map(
                                                (technology) => (
                                                    <span
                                                        key={technology}
                                                        className="px-2.5 py-1.5 border border-[#2B2118]/15 rounded-full font-mono text-[10px] text-[#2B2118]/65"
                                                    >
                                                        {technology}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    {/* Website */}
                                    <Link
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] font-semibold text-[#B5482A] hover:text-[#2B2118] transition-colors"
                                    >
                                        Visit Live Website
                                        <ArrowUpRight size={15} />
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
