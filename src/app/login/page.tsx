"use client";

import Link from "next/link";
import { ArrowLeft, LogIn } from "lucide-react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        credentials: "include",
        body: JSON.stringify({ email: email.trim(), password }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        setError(data?.message ?? "That email and password combination is not recognised.");
        setIsLoading(false);
        return;
      }

      window.localStorage.setItem("ae-admin-session", "active");
      router.push("/admin");
    } catch {
      setError("Unable to connect to the sign-in service. Please try again.");
      setIsLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F7EDE2] px-4 py-8 text-[#2B2118] sm:px-6">
      <div className="w-full max-w-md overflow-hidden border border-[#2B2118]/15 bg-[#efe0d1] shadow-2xl shadow-[#2B2118]/10">
        <div className="p-6 sm:p-8 md:p-10">
          {/* Back */}
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[#2B2118]/70 transition-colors hover:text-[#B5482A] sm:mb-12"
          >
            <ArrowLeft size={14} />
            Back to portfolio
          </Link>

          {/* Header */}
          <div className="mb-8">
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Sign in
            </h1>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <label className="block">
              <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.12em] text-[#2B2118]/65">
                Email address
              </span>

              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className="h-12 w-full border border-[#2B2118]/20 bg-[#F7EDE2] px-4 font-mono text-sm text-[#2B2118] outline-none transition placeholder:text-[#2B2118]/30 focus:border-[#B5482A] focus:ring-1 focus:ring-[#B5482A]/20"
              />
            </label>

            {/* Password */}
            <label className="block">
              <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.12em] text-[#2B2118]/65">
                Password
              </span>

              <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                required
                autoComplete="current-password"
                placeholder="Enter your password"
                className="h-12 w-full border border-[#2B2118]/20 bg-[#F7EDE2] px-4 font-mono text-sm text-[#2B2118] outline-none transition placeholder:text-[#2B2118]/30 focus:border-[#B5482A] focus:ring-1 focus:ring-[#B5482A]/20"
              />
            </label>

            {/* Error */}
            {error && (
              <p
                role="alert"
                className="border-l-2 border-[#B5482A] bg-[#B5482A]/10 px-3 py-2.5 font-mono text-xs leading-relaxed text-[#8d321f]"
              >
                {error}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="flex h-12 w-full items-center justify-center gap-2 bg-[#B5482A] px-5 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#F7EDE2] transition hover:bg-[#96391f] active:scale-[0.99] disabled:cursor-wait disabled:opacity-60"
            >
              {isLoading ? "Logging In..." : "Log In"}
              <LogIn size={15} />
            </button>
          </form>

          <p className="mt-7 text-center font-mono text-[11px] text-[#2B2118]/55">
            Need an account?{" "}
            <Link href="/signup" className="text-[#B5482A] hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}