"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ImageGrid({ data = [] }) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 my-6">
      {data.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: idx * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="group bg-white rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col cursor-default transform hover:-translate-y-2 hover:border-[#2F3192]">
            {/* Image Container */}
            <div className="relative h-48 xs:h-52 sm:h-64 bg-white overflow-hidden">
              <motion.div
                initial={{ scale: 0.98 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  delay: idx * 0.06,
                }}
                className="relative w-full h-full overflow-hidden group"
              >
                {/* Image */}
                {item?.path ? (
                  <Image
                    src={item.path}
                    alt={item?.name || "Product"}
                    fill
                    sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={75}
                    className="object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : null}

                {/* Center-expanding cross lines overlay */}
                <div className="absolute inset-0 bg-black/15 origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-out z-10 pointer-events-none" />

                <div className="absolute inset-0 bg-black/15 origin-center scale-y-0 group-hover:scale-y-100 transition-transform duration-400 ease-out z-10 pointer-events-none" />

                {/* Center Glow Accent */}
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white/30 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none" />
              </motion.div>
            </div>

            {/* Product Name */}
            <div className="bg-[#080949] text-white py-3 px-3 sm:py-3.5 sm:px-4 text-center group-hover:bg-[#2F3192] transition-colors duration-300 border-t border-slate-900 flex items-center justify-center min-h-[50px] sm:min-h-[50px]">
              <Link
                href={"/contact-us"}
                className="font-medium text-xs xs:text-sm sm:text-base tracking-wide text-white leading-tight"
              >
                {item?.name || "Product"}
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
