"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const phrases = ["Web Developer", "Web Designer", "UI/UX Designer"];

export default function HeroSection() {
    const [text, setText] = useState("");

    useEffect(() => {
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let timeoutId: ReturnType<typeof setTimeout>;

        function type() {
            const currentPhrase = phrases[phraseIndex];
            const visibleText = currentPhrase.substring(0, charIndex);
            setText(visibleText);

            let delay = 60;

            if (!isDeleting && charIndex < currentPhrase.length) {
                charIndex++;
                delay = 60;
            } else if (isDeleting && charIndex > 0) {
                charIndex--;
                delay = 30;
            } else {
                if (!isDeleting) {
                    isDeleting = true;
                    delay = 1000;
                } else {
                    isDeleting = false;
                    phraseIndex = (phraseIndex + 1) % phrases.length;
                    delay = 300;
                }
            }

            timeoutId = setTimeout(type, delay);
        }

        type();

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
            {/* HERO SECTION */}
            <section className="w-full max-w-4xl lg:max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pt-14 md:pt-34 lg:pt-46 py-14 lg:py-28" >
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-3">

                    <div className="order-2 md:order-1 text-center md:text-left pt-10 md:pt-0">
                        <p className="mb-4 flex items-center justify-center md:justify-start gap-2 font-mono text-md lg:text-lg uppercase tracking-[0.15em] text-[#2B2118]">
                            Hello, I&apos;m Eirene Grace Armilla
                        </p>

                        <h1 className="text-4xl lg:text-6xl font-bold text-[#2B2118] leading-[1.05]">
                            <span className="inline-flex items-center text-[#B5482A]">
                                {text}
                                <span className="ml-2 w-[1px] h-10 bg-[#B5482A] animate-pulse" />
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl mx-auto md:mx-0 text-md lg:text-lg leading-relaxed text-[#2B2118]/80">
                            Designed, developed, and maintained responsive websites using clean, documented code,
                            while conducting QA testing, optimizing performance and ensuring cross-browser and mobile compatibility.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-3">
                            <a
                                href="#projects"
                                className="w-full sm:w-auto px-6 py-3 rounded-md bg-[#B5482A]/90 text-[#F7EDE2] text-md font-mono font-medium text-center hover:bg-[#B5482A]/70 transition-colors duration-200"
                            >
                                View My Work
                            </a>

                            <a
                                href="#contact"
                                className="w-full sm:w-auto px-6 py-3 rounded-md border border-[#2B2118]/25 text-[#2B2118] text-md font-mono font-medium text-center hover:border-[#B5482A] hover:text-[#B5482A] transition-colors duration-200"
                            >
                                Get In Touch
                            </a>
                        </div>
                    </div>

                    {/* Profile Image */}
                    <div className="order-1 md:order-2 flex justify-center pt-18 md:pt-0">
                        <div className="relative">
                            <div className="absolute -inset-3 border border-[#3D5A47]/40 rounded-sm -z-10 translate-x-3 translate-y-3" />
                            <AnimatePresence>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.5 }}
                                    className="relative w-64 h-76 md:w-80 md:h-[60vh] lg:w-[50vh] lg:h-[60vh] overflow-hidden border-4 border-[#2B2118] rounded-3xl shadow-xl shadow-[#2B2118]/15"
                                >
                                    <Image
                                        src="/GradPic.jpg"
                                        alt="Profile picture of Eirene Grace Armilla"
                                        fill
                                        priority
                                        className="object-cover rounded-xl"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <span className="absolute -bottom-4 -left-4 bg-[#2B2118] text-[#F7EDE2] font-mono text-[11px] px-3 py-1.5 rounded-sm tracking-wide">
                            IT.web dev()
                        </span>
                    </div>
                </div>
        </section >
        </>
    )
}