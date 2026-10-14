"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const workCategories = [
  {
    title: "Bakery Equipments",
    image: "/home/our-work/b1.webp",
    href: "/our-products/bakery-equipments-manufacturer",
  },
  {
    title: "Chapati Equipments",
    image: "/home/our-work/b2.webp",
    href: "/our-products/chapati-equipments",
  },
  {
    title: "Cooking Equipments",
    image: "/home/our-work/b3.webp",
    href: "/our-products/cooking-equipments",
  },
  {
    title: "Refrigeration",
    image: "/home/our-work/b4.webp",
    href: "/our-products/refrigeration",
  },
];

export default function OurWorkSection() {
  return (
    <section className="relative w-full py-10 lg:py-15 overflow-hidden ">
      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-14">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
            Our Work: A Portfolio of Proven Success
          </h2>
          <p className="text-slate-200 text-base sm:text-lg font-bold">
            Our Specialized Equipment Categories
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {workCategories.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-6 shadow-2xl flex flex-col justify-between border border-white/20 transition-all duration-300 group"
            >
              {/* Product Image Area */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] mb-6 flex items-center justify-center p-3 sm:p-4 bg-slate-50 rounded-2xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover p-2  transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>

              {/* Title & Button Area */}
              <div>
                <h3 className="text-slate-900 text-lg sm:text-xl font-bold mb-5 min-h-[56px] flex items-center">
                  {item.title}
                </h3>

                <Link
                  href={item.href}
                  className="relative inline-flex items-center justify-center px-6 py-2.5 text-xs sm:text-sm font-semibold text-amber-600 border-2 border-amber-600 rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:text-white group/btn w-full hover:shadow-md hover:shadow-amber-600/30 active:scale-95"
                >
                  {/* Sliding Background Fill */}
                  <span className="absolute inset-0 w-full h-full bg-amber-600 -translate-x-full transition-transform duration-300 ease-out group-hover/btn:translate-x-0" />

                  {/* Button Label & Icon */}
                  <span className="relative z-10 flex items-center justify-center w-full">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
