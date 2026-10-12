"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="flex min-h-[50vh] items-center justify-center bg-slate-50 px-5 py-12">
      <div className="w-full max-w-md md:max-w-2xl text-center bg-white rounded-2xl p-8 sm:p-10 shadow-xl shadow-slate-200/60 border border-slate-100">
        {/* Modern Accent Badge */}
        <div className="mx-auto mb-4 inline-flex items-center rounded-full bg-[#2F3192]/10 px-3.5 py-1 text-xs font-semibold text-[#2F3192]">
          404 Error
        </div>

        {/* Big 404 Heading */}
        <h1 className="text-6xl font-black tracking-tight text-[#2F3192] sm:text-7xl">
          Oops!
        </h1>

        {/* Subtitle */}
        <h2 className="mt-3 text-xl font-bold text-slate-800 sm:text-2xl">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-2 text-sm leading-relaxed text-slate-500">
          The page you are looking for doesn't exist, was removed, or might be
          temporarily unavailable.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {/* Primary Button */}
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#2F3192] px-5 py-3 text-sm font-medium text-white shadow-md shadow-[#2F3192]/20 transition-all duration-200 hover:bg-[#242573] hover:shadow-lg active:scale-[0.98]"
          >
            <Home size={16} />
            Back to Home
          </Link>

          {/* Secondary Button */}
          <button
            onClick={() => router.back()}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-[#2F3192] hover:bg-slate-50 hover:text-[#2F3192] active:scale-[0.98]"
          >
            <ArrowLeft size={16} />
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
}
