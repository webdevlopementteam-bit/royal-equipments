"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function WelcomeSection() {
  return (
    <section className="w-full py-10 lg:py-15 bg-white overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-18">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content Area (Animated from Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-snug">
              Welcome to Royal Equipment – A Unit of Kuche India Elevation Pvt.
              Ltd.
            </h2>

            <p className="text-[17px] sm:text-lg leading-relaxed text-slate-600">
              Established in 2001, we are recognized as one of the{" "}
              <Link
                href="/contact-us"
                className="font-semibold text-blue-700 hover:text-blue-900 transition-colors"
              >
                Best Commercial Kitchen Equipment Manufacturers in Delhi
              </Link>
              . We specialize in designing, manufacturing, and supplying
              top-quality hotel and commercial kitchen equipment tailored to
              meet the needs of restaurants, hotels, and catering businesses.
            </p>

            <p className="text-[17px] sm:text-base leading-relaxed text-slate-600">
              Our expert team delivers innovative, durable, and energy-efficient
              solutions built with precision and care. From stainless steel
              kitchen equipment to custom-built units, we offer complete
              commercial kitchen solutions.
            </p>

            <p className="text-[17px] sm:text-base leading-relaxed text-slate-900 font-semibold pt-1">
              Choose <span className="text-[#2F3192]">Royal Equipment</span> –
              where quality meets performance for every professional kitchen.
            </p>

            {/* Read More Button */}
            <div className="pt-4">
              <Link
                href="/about-us"
                className="relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-amber-600 border-2 border-amber-600 rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:text-white group hover:shadow-lg hover:shadow-amber-600/30 active:scale-95"
              >
                <span className="absolute inset-0 w-full h-full bg-amber-600 -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0" />

                <span className="relative z-10 flex items-center">
                  READ MORE
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Right Image Area (Animated from Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] min-h-[300px] sm:min-h-[380px] lg:min-h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 group">
              <Image
                src="/home/royal.webp"
                alt="Commercial Kitchen Setup by Royal Equipment"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
