"use client";
import ProductBreadcrumb from "@/components/ProductBreadcrumb";
import React from "react";
import { motion } from "framer-motion";
import ImageGrid from "@/components/ImageGrid";
import { preparationEquipments } from "@/data/data";

export default function Preparation() {
  return (
    <>
      <div className="bg-white pb-4 md:pb-8">
        <ProductBreadcrumb currentProduct={"Preparation Equipments"} />

        <section className="max-w-6xl mx-auto px-4 py-12 text-center bg-white">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Preparation Equipment for Commercial Kitchens
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-700 text-[17px] md:text-lg leading-relaxed mb-4"
          >
            Welcome to Royal Equipments where functionality meets innovation. We
            offer a comprehensive range of{" "}
            <span className="font-bold">Preparation Equipment</span> built to
            meet the demands of busy commercial kitchens, including restaurants,
            hotels, catering units, and cloud kitchens.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-700 text-[17px] md:text-lg leading-relaxed mb-4"
          >
            Our{" "}
            <span className="font-bold">
              Preparation Equipment, Commercial Kitchen Machines
            </span>{" "}
            is designed to simplify food preparation tasks, save time, and
            ensure consistent results. Whether you're grinding spices, chopping
            vegetables, or mixing batters, we provide reliable machines that
            boost kitchen efficiency and maintain hygiene standards.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-700 text-[17px] md:text-lg leading-relaxed"
          >
            Crafted from{" "}
            <span className="font-bold">food-grade stainless steel</span>, our
            machines are durable, safe, and easy to maintain. Whether you're
            setting up a new kitchen or upgrading your existing one, our
            preparation equipment delivers performance you can trust.
          </motion.p>
        </section>
        <ImageGrid data={preparationEquipments} />
      </div>
    </>
  );
}
