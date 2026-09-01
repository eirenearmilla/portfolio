"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
    { name: "About", href: "/about" },
    { name: "Project", href: "/projects" },
    { name: "Contact", href: "/contact" },
    { name: "Admin", href: "/login" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (pathname === "/login" || pathname.startsWith("/admin")) {
        return null;
    }

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <div
                className={`mx-auto transition-all duration-500 ease-out ${
                    scrolled ? "max-w-4xl px-4 pt-3" : "max-w-none px-0 pt-0"
                }`}
            >
                <div
                    className={`flex items-center justify-between transition-all duration-500 ease-out  ${
                        scrolled
                            ? "h-16 rounded-full border border-[#2B2118]/10 bg-[#DDBEA8]/40 px-6 shadow-lg shadow-[#2B2118]/10 backdrop-blur-xl"
                            : "h-20 rounded-none border-b border-[#2B2118]/10 px-6 sm:px-10 bg-[#DDBEA8]/70 shadow-sm"
                    }`}
                >
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <span className="font-mono text-[15px] text-[#B5482A] transition-transform duration-300 group-hover:-translate-x-0.5">
                            &lt;
                        </span>
                        <h1 className="font-mono text-lg font-semibold tracking-tight text-[#2B2118]">
                            Eirene Grace
                        </h1>
                        <span className="font-mono text-[15px] text-[#B5482A] transition-transform duration-300 group-hover:translate-x-0.5">
                            /&gt;
                        </span>
                    </Link>

                    {/* Desktop */}
                    <nav className="hidden items-center gap-1 lg:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="group relative rounded-full px-4 py-2 font-mono text-md tracking-wide text-[#2B2118]  transition-colors duration-300 hover:text-[#2B2118] uppercase font-semibold"
                            >
                                {link.name}
                                <span className="absolute inset-x-4 -bottom-0.5 h-px scale-x-0 bg-[#B5482A] transition-transform duration-300 origin-left group-hover:scale-x-100" />
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                        className="rounded-full bg-[#2B2118]/5 p-2 text-[#2B2118] transition hover:bg-[#2B2118]/10 lg:hidden"
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`overflow-hidden transition-all duration-300 lg:hidden ${
                        isOpen ? "mt-3 max-h-[420px]" : "max-h-0"
                    } ${scrolled ? "" : "px-6 sm:px-10"}`}
                >
                    <div className="rounded-2xl border border-[#2B2118]/10 bg-[#F7EDE2] p-4 shadow-xl shadow-[#2B2118]/10">
                        <div className="space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center rounded-xl px-4 py-3 font-mono text-md text-[#2B2118]/80 transition hover:bg-[#3D5A47]/8 hover:text-[#2B2118]"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}