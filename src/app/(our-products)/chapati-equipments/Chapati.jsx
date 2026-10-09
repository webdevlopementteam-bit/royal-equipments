"use client";
import ProductBreadcrumb from "@/components/ProductBreadcrumb";
import React from "react";
import { motion } from "framer-motion";
import ImageGrid from "@/components/ImageGrid";
import { chapatiEquipments } from "@/data/data";

export default function Chapati() {
  return (
    <>
      <div className="bg-white pb-4 md:pb-10">
        <ProductBreadcrumb currentProduct={"Chapati Equipments"} />

        <section className="max-w-6xl mx-auto px-4 py-12 text-center bg-white">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Commercial Chapati Equipment in Delhi
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-700 text-[17px] lg:text-[20px] leading-relaxed mb-4"
          >
            At <strong>Royal Equipments</strong>, we bring you a superior range
            of <strong>commercial chapati equipment in Delhi</strong>, designed
            to meet the high demands of commercial kitchens, restaurants,
            hotels, industrial canteens, and catering services. Our machines are
            built to deliver speed, uniformity, and hygiene – ensuring each
            chapati is perfectly cooked, soft, and consistent.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-700 text-[17px] lg:text-[20px] leading-relaxed mb-4"
          >
            We understand the challenges of large-scale chapati production.
            That’s why our chapati equipment is engineered to reduce manual
            effort, increase daily output, and maintain consistent quality with
            minimal labor. Constructed from food-grade stainless steel (SS 304),
            our machines are durable, easy to clean, and designed for long-term
            performance.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-700 text-[17px] lg:text-[20px] leading-relaxed mb-4"
          >
            Whether you’re starting a new kitchen or upgrading an existing
            setup, Royal Equipments offers reliable, energy-efficient solutions
            tailored to your specific needs. Our chapati machines are trusted by
            foodservice professionals across India for their productivity,
            safety, and ease of use.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-gray-700 text-[17px] lg:text-[20px] leading-relaxed"
          >
            With decades of experience in commercial kitchen solutions, we are
            committed to delivering value through innovative design,
            high-quality materials, and responsive service.
          </motion.p>
        </section>
        <ImageGrid data={chapatiEquipments} />
      </div>
    </>
  );
}
