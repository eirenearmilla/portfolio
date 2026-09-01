"use client";

import { GitHubCalendar } from "react-github-calendar";

export default function GithubActivity() {
    return (
        <section
            id="github"
            className="w-full border-t border-[#2B2118]/10 bg-[#F7EDE2]"
        >
            <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-14">

                {/* Header */}
                <div className="mb-10 flex items-end justify-between gap-6">
                    <div>
                        <div className="mb-4 flex items-center gap-3">
                            <span className="h-px w-8 bg-[#B5482A]" />

                            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#B5482A]">
                                GitHub
                            </span>
                        </div>

                        <h2 className="text-3xl font-bold tracking-tight text-[#2B2118] sm:text-4xl">
                            Building in public.
                        </h2>
                    </div>

                    {/* <a
                        href="https://github.com/infinitecheirene"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#2B2118]/60 transition-colors hover:text-[#B5482A] sm:flex"
                    >
                        View GitHub →
                    </a> */}
                </div>

                {/* Contribution Calendar */}
                <div className="w-full overflow-x-auto border border-[#2B2118]/10 bg-white/20 p-5 sm:p-8">
                    <div className="flex min-w-[300px] lg:min-w-[760px] justify-center text-2xl font-bold text-[#2B2118]">
                        <GitHubCalendar
                            username="infinitecheirene"
                            colorScheme="light"
                            blockSize={12}
                            blockMargin={4}
                            fontSize={12}
                            blockRadius={2}
                            showWeekdayLabels
                            showMonthLabels
                        />
                    </div>
                </div>

                {/* Mobile GitHub Link */}
                {/* <a
                    href="https://github.com/YOUR_USERNAME"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center font-mono text-xs uppercase tracking-wider text-[#2B2118]/60 transition-colors hover:text-[#B5482A] sm:hidden"
                >
                    View GitHub →
                </a> */}
            </div>
        </section>
    );
}