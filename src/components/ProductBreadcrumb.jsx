"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Home, ChevronRight } from "lucide-react";
import Link from "next/link";

function ProductBreadcrumb({ currentProduct }) {
  return (
    <section className="relative min-h-[220px] sm:min-h-[240px] md:min-h-[260px] lg:min-h-[380px] overflow-hidden bg-slate-950 text-white flex items-center border-0">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 flex opacity-75">
          <div className="relative h-full w-full shrink-0 lg:w-1/2">
            <Image
              src="/products/product/top.webp"
              alt=""
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top object-left"
            />
          </div>

          <div className="relative hidden h-full w-1/2 shrink-0 lg:block">
            <Image
              src="/products/product/top.webp"
              alt=""
              fill
              sizes="50vw"
              className="object-cover object-top object-left"
            />
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/90 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-br from-[#2F3192]/40 via-transparent to-white/10" />
      </div>

      <div className="absolute top-0 left-0 w-48 h-48 sm:w-60 sm:h-60 bg-[#2F3192]/25 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 bg-white/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 md:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-1.5 mb-2.5 sm:mb-3">
            <span className="w-6 sm:w-8 h-[2px] bg-white" />

            <span className="text-white uppercase tracking-[0.18em] sm:tracking-[0.25em] text-[10px] sm:text-xs md:text-sm font-semibold">
              Royal Equipment
            </span>

            <span className="w-6 sm:w-8 h-[2px] bg-white" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-4xl  font-extrabold tracking-tight leading-[1.05] text-white drop-shadow-2xl">
            {currentProduct ? currentProduct : "Our Products"}
          </h2>

          <div className="mt-3 sm:mt-4 mb-4 sm:mb-5 flex items-center gap-1.5">
            <span className="w-10 sm:w-14 h-1 rounded-full bg-white" />
            <span className="w-3 sm:w-4 h-1 rounded-full bg-[#2F3192]" />
            <span className="w-1.5 sm:w-2 h-1 rounded-full bg-white/50" />
          </div>

          <nav
            aria-label="Breadcrumb"
            className="inline-flex items-center rounded-full border border-white/15 bg-white/10 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 shadow-xl max-w-full"
          >
            {/* Home */}
            <Link
              href="/"
              className="flex items-center gap-1.5 text-xs sm:text-sm md:text-base text-slate-200 hover:text-amber-400 transition-colors"
            >
              <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 shrink-0" />
              <span>Home</span>
            </Link>

            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 mx-1.5 sm:mx-2 text-slate-500 shrink-0" />

            {/* Products */}
            <Link
              href="/our-products"
              className="text-xs font-bold sm:text-sm md:text-base text-amber-500 hover:text-amber-400 transition-colors shrink-0"
            >
              Products
            </Link>

            {/* Optional Product */}
            {currentProduct && (
              <>
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 mx-1.5 sm:mx-2 text-slate-500 shrink-0" />

                <span className="text-xs sm:text-sm md:text-base text-[#080949] font-semibold truncate max-w-[150px] sm:max-w-[220px]">
                  {currentProduct}
                </span>
              </>
            )}
          </nav>
        </motion.div>
      </div>

      <div className="absolute bottom-[-1px] left-0 right-0 z-10 pointer-events-none ">
        <svg
          viewBox="0 0 1440 80"
          className="w-full h-auto text-slate-50 fill-slate-50"
          preserveAspectRatio="none"
        >
          <path d="M0,80 L0,55 C240,10 480,10 720,40 C960,70 1200,70 1440,25 L1440,80 Z" />
        </svg>
      </div>
    </section>
  );
}

export default ProductBreadcrumb;
