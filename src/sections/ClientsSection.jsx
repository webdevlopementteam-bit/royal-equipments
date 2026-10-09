"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { clients } from "@/data/data";

export default function ClientsSection() {
  const midIndex = Math.ceil(clients.length / 2);
  const topClients = clients.slice(0, midIndex);
  const bottomClients = clients.slice(midIndex);

  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-10  lg:py-15">
      {/* Background */}{" "}
      <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#2F3192]/10 blur-3xl" />{" "}
      <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-[#2F3192]/5 blur-3xl" />{" "}
      <div className="absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="relative z-10">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl px-4 text-center sm:px-6 lg:mb-16 lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#2F3192]/15 bg-white px-4 py-2 shadow-sm">
            <Sparkles className="h-4 w-4 text-[#2F3192]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#2F3192]">
              Trusted Partnerships
            </span>
          </div>

          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Trusted by <span className="text-[#2F3192]">Leading Brands</span>
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Royal Equipment — a division of Kuche India Elevation Pvt. Ltd. — is
            your trusted partner in high-performance commercial kitchen
            equipment.
          </p>
        </div>

        {/* Client Rows */}
        <div className="relative space-y-5 sm:space-y-6">
          {/* Left Fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-slate-50 to-transparent sm:w-24 lg:w-40" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-slate-50 to-transparent sm:w-24 lg:w-40" />

          {/* TOP ROW - LEFT */}
          <div className="client-marquee group">
            <div className="client-track client-track-left">
              {[...topClients, ...topClients].map((client, index) => (
                <div key={`top-${index}`} className="client-card">
                  <div className="relative h-10 w-full sm:h-full overflow-visible">
                    <Image
                      src={client.path}
                      alt={`Client Brand ${index + 1}`}
                      fill
                      sizes="230px"
                      className=" object-contain scale-[1.8] sm:scale-[1.25] transition-transform duration-300 group-hover:scale-[1.4] sm:group-hover:scale-[1.3]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM ROW - RIGHT */}
          <div className="client-marquee group">
            <div className="client-track client-track-right">
              {[...bottomClients, ...bottomClients].map((client, index) => (
                <div key={`bottom-${index}`} className="client-card">
                  <div className="relative h-10 w-full sm:h-full overflow-visible">
                    <Image
                      src={client.path}
                      alt={`Client Brand ${index + 1}`}
                      fill
                      sizes="230px"
                      className=" object-contain scale-[1.8] sm:scale-[1.25] transition-transform duration-300 group-hover:scale-[1.4] sm:group-hover:scale-[1.3]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mt-12 flex justify-center px-4 sm:mt-14">
          <Link
            href="/our-client"
            className="group inline-flex items-center gap-3 rounded-xl bg-[#2F3192] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#2F3192]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#26277d] active:translate-y-0"
          >
            <span>View All Clients</span>

            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/15 transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>
      {/* Continuous Marquee CSS */}
    </section>
  );
}
