"use client";

import Link from "next/link";
import { ArrowLeft, UserPlus } from "lucide-react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

type SignupErrors = Record<string, string[]>;

export default function SignupPage() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setError("");

        if (password !== passwordConfirmation) {
            setError("Passwords do not match.");
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch(`${API_URL}/api/signup`, {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({
                    name: name.trim(),
                    email: email.trim(),
                    password,
                    password_confirmation: passwordConfirmation,
                }),
            });

            if (!response.ok) {
                const data: { message?: string; errors?: SignupErrors } = await response.json().catch(() => ({}));
                const validationMessage = data.errors ? Object.values(data.errors)[0]?.[0] : undefined;
                setError(validationMessage ?? data.message ?? "We could not create your account.");
                setIsLoading(false);
                return;
            }

            router.push("/login?created=1");
        } catch {
            setError("Unable to connect to the sign-up service. Please try again.");
            setIsLoading(false);
        }
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-[#F7EDE2] px-4 py-8 text-[#2B2118] sm:px-6">
            <div className="w-full max-w-md overflow-hidden border border-[#2B2118]/15 bg-[#efe0d1] shadow-2xl shadow-[#2B2118]/10">
                <div className="p-6 sm:p-8 md:p-10">
                    <Link href="/" className="mb-10 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[#2B2118]/70 transition-colors hover:text-[#B5482A] sm:mb-12">
                        <ArrowLeft size={14} /> Back to portfolio
                    </Link>

                    <div className="mb-8">
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Create account</h1>
                        <p className="mt-3 font-serif text-base text-[#2B2118]/60">Set up access to your portfolio workspace.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <label className="block">
                            <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.12em] text-[#2B2118]/65">Full name</span>
                            <input value={name} onChange={(event) => setName(event.target.value)} type="text" required autoComplete="name" placeholder="Your name" className="h-12 w-full border border-[#2B2118]/20 bg-[#F7EDE2] px-4 font-mono text-sm text-[#2B2118] outline-none transition placeholder:text-[#2B2118]/30 focus:border-[#B5482A] focus:ring-1 focus:ring-[#B5482A]/20" />
                        </label>
                        <label className="block">
                            <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.12em] text-[#2B2118]/65">Email address</span>
                            <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" required autoComplete="email" placeholder="you@example.com" className="h-12 w-full border border-[#2B2118]/20 bg-[#F7EDE2] px-4 font-mono text-sm text-[#2B2118] outline-none transition placeholder:text-[#2B2118]/30 focus:border-[#B5482A] focus:ring-1 focus:ring-[#B5482A]/20" />
                        </label>
                        <label className="block">   
                            <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.12em] text-[#2B2118]/65">Password</span>
                            <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" required minLength={8} autoComplete="new-password" placeholder="At least 8 characters" className="h-12 w-full border border-[#2B2118]/20 bg-[#F7EDE2] px-4 font-mono text-sm text-[#2B2118] outline-none transition placeholder:text-[#2B2118]/30 focus:border-[#B5482A] focus:ring-1 focus:ring-[#B5482A]/20" />
                        </label>
                        <label className="block">
                            <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.12em] text-[#2B2118]/65">Confirm password</span>
                            <input value={passwordConfirmation} onChange={(event) => setPasswordConfirmation(event.target.value)} type="password" required minLength={8} autoComplete="new-password" placeholder="Repeat your password" className="h-12 w-full border border-[#2B2118]/20 bg-[#F7EDE2] px-4 font-mono text-sm text-[#2B2118] outline-none transition placeholder:text-[#2B2118]/30 focus:border-[#B5482A] focus:ring-1 focus:ring-[#B5482A]/20" />
                        </label>

                        {error && <p role="alert" className="border-l-2 border-[#B5482A] bg-[#B5482A]/10 px-3 py-2.5 font-mono text-xs leading-relaxed text-[#8d321f]">{error}</p>}

                        <button type="submit" disabled={isLoading} className="flex h-12 w-full items-center justify-center gap-2 bg-[#B5482A] px-5 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#F7EDE2] transition hover:bg-[#96391f] active:scale-[0.99] disabled:cursor-wait disabled:opacity-60">
                            {isLoading ? "Creating account..." : "Create account"} <UserPlus size={15} />
                        </button>
                    </form>

                    <p className="mt-7 text-center font-mono text-[11px] text-[#2B2118]/55">Already have an account? <Link href="/login" className="text-[#B5482A] hover:underline">Log in</Link></p>
                </div>
            </div>
        </main>
    );
}
