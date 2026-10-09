"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CheckCircle, ArrowRight, Home, MessageCircle } from "lucide-react";

export default function ThankYouPage() {
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    const submitted = sessionStorage.getItem("contactFormSubmitted");

    if (submitted === "true") {
      setIsAllowed(true);
      sessionStorage.removeItem("contactFormSubmitted");
    } else {
      window.location.replace("/contact");
    }
  }, []);

  if (!isAllowed) return null;

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4 py-12">
      <div className="w-full max-w-2xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(47,49,146,0.10)]">
        <div className="relative overflow-hidden bg-[#2F3192] px-6 py-12 text-center text-white sm:px-10 sm:py-14">
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border-[20px] border-white/10" />
          <div className="absolute -bottom-16 -left-10 h-36 w-36 rounded-full bg-white/5" />

          <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10">
            <CheckCircle size={46} strokeWidth={1.6} />
          </div>

          <p className="relative mt-6 text-sm font-medium uppercase tracking-[0.2em] text-white/75">
            Message Submitted
          </p>

          <h1 className="relative mt-3 text-3xl font-semibold sm:text-4xl">
            Thank You!
          </h1>

          <p className="relative mx-auto mt-4 max-w-lg text-[16px] leading-relaxed text-white/85">
            Your enquiry has been submitted successfully. We appreciate your
            interest and our team will get back to you as soon as possible.
          </p>
        </div>

        <div className="px-6 py-9 text-center sm:px-10 sm:py-10">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2F3192]/5 text-[#2F3192]">
            <MessageCircle size={28} strokeWidth={1.7} />
          </div>

          <h2 className="mt-5 text-xl font-semibold text-[#2F3192]">
            We Appreciate Your Enquiry
          </h2>

          <p className="mx-auto mt-3 max-w-md text-[16px] leading-relaxed text-slate-600">
            Thank you for reaching out to us. Your message is important to us,
            and we look forward to assisting you with your requirements.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2F3192] px-6 py-3.5 text-[15px] font-medium text-white shadow-md shadow-[#2F3192]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#242675]"
            >
              <Home size={18} />
              Back to Home
            </Link>

            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#2F3192]/20 bg-white px-6 py-3.5 text-[15px] font-medium text-[#2F3192] transition-all duration-300 hover:border-[#2F3192] hover:bg-[#2F3192]/5"
            >
              Contact Us Again
              <ArrowRight size={18} />
            </Link>
          </div>

          <p className="mt-8 text-[14px] text-slate-500">
            Thank you for choosing Royale Equipments.
          </p>
        </div>
      </div>
    </main>
  );
}
