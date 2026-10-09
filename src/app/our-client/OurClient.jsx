"use client";

import Breadcrumb from "@/components/Breadcrumb";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { clients } from "@/data/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function OurClient() {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <Breadcrumb title={"Our Client"} />

      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mx-20">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex items-center justify-center p-4 sm:p-5 md:p-4 lg:p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 h-32 sm:h-36 md:h-32 lg:h-40"
            >
              <div className="relative w-full h-20 sm:h-24 md:h-20 lg:h-28 flex items-center justify-center">
                <Image
                  src={client.path}
                  alt={`Client Logo ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}

export default OurClient;
