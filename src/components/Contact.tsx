"use client";

import {
    ArrowUpRight,
    Mail,
    MapPin,
    Phone,
} from "lucide-react";

import {
    FaFacebook,
    FaGithub,
    FaLinkedinIn,
} from "react-icons/fa";

const contactDetails = [
    {
        icon: Mail,
        label: "Email",
        value: "eirenegrc.armilla@email.com",
        href: "mailto:eirenegrc.armilla@email.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+63 928 144 6745",
        href: "tel:+639281446745",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Makati City, Philippines",
        href: "#",
    },
];

const socialLinks = [
    {
        label: "Facebook",
        icon: FaFacebook,
        href: "https://www.facebook.com/eirene.armilla",
    },
    {
        label: "LinkedIn",
        icon: FaLinkedinIn,
        href: "https://www.linkedin.com/in/eirene-armilla/",
    },
    {
        label: "GitHub",
        icon: FaGithub,
        href: "https://github.com/infinitecheirene",
    },
];

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="w-full border-t border-[#2B2118]/10 bg-[#F7EDE2]"
        >
            <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-14 lg:py-20">

                {/* Main Content */}
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

                    {/* Left */}
                    <div>
                        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#B5482A]">
                            04 / Contact
                        </p>

                        <h2 className="max-w-3xl text-5xl font-bold leading-[0.95] tracking-[-0.05em] text-[#2B2118] sm:text-6xl lg:text-7xl">
                            Building Digital{" "}
                            <span className="text-[#B5482A]">
                                Experiences.
                            </span>
                        </h2>

                        <p className="mt-8 max-w-md font-serif text-base leading-7 text-[#2B2118]/55 sm:text-lg">
                            Have a project, idea, or opportunity in mind?
                            Let&apos;s connect and create something meaningful
                            together.
                        </p>

                        {/* Social Links */}
                        <div className="mt-8 flex items-center gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;

                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2B2118]/15 text-[#2B2118] transition-all duration-300 hover:border-[#B5482A]/40 hover:bg-[#B5482A] hover:text-white"
                                    >
                                        <Icon
                                            size={17}
                                            strokeWidth={1.5}
                                        />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right - Contact Details */}
                    <div className="w-full lg:justify-self-end lg:max-w-md">
                        <div className="divide-y divide-[#2B2118]/10 border-y border-[#2B2118]/10">
                            {contactDetails.map((contact) => {
                                const Icon = contact.icon;

                                return (
                                    <a
                                        key={contact.label}
                                        href={contact.href}
                                        className="group flex items-center justify-between gap-5 py-6"
                                    >
                                        {/* Info */}
                                        <div className="flex min-w-0 items-center gap-4">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#2B2118]/15 text-[#B5482A] transition-all duration-300 group-hover:border-[#B5482A]/40 group-hover:bg-[#B5482A] group-hover:text-white">
                                                <Icon
                                                    size={16}
                                                    strokeWidth={1.5}
                                                />
                                            </div>

                                            <div className="min-w-0">
                                                <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.15em] text-[#2B2118]/40">
                                                    {contact.label}
                                                </p>

                                                <p className="truncate text-sm font-medium text-[#2B2118] sm:text-base">
                                                    {contact.value}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Arrow */}
                                        <ArrowUpRight
                                            size={17}
                                            strokeWidth={1.5}
                                            className="shrink-0 text-[#2B2118]/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#B5482A]"
                                        />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-16 flex flex-col gap-3 border-t border-[#2B2118]/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#2B2118]/40">
                        Available for freelance &amp; collaborations
                    </p>

                    <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#B5482A]">
                        Let&apos;s build something →
                    </p>
                </div>
            </div>
        </section>
    );
}