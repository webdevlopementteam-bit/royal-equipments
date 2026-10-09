"use client";
import ProductBreadcrumb from "@/components/ProductBreadcrumb";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ImageGrid from "@/components/ImageGrid";
import { waterCoolerManufacturer } from "@/data/data";

export default function Water() {
  return (
    <>
      <div className="bg-white pb-4 md:pb-10">
        <ProductBreadcrumb currentProduct={"Water Cooler & Dispensers"} />

        <ImageGrid data={waterCoolerManufacturer} />

        <section className="max-w-6xl mx-auto px-4 py-12 text-left bg-white">
          {/* Main Title & Intro */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Water Cooler Manufacturer in Delhi – Royal Equipments
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-gray-700 text-[17px] lg:text-[20px] leading-relaxed mb-6"
          >
            When it comes to choosing a reliable{" "}
            <Link
              href="/contact-us"
              className="italic text-blue-600 font-medium "
            >
              water cooler manufacturer in Delhi
            </Link>
            , quality, durability, and performance matter the most.{" "}
            <strong>Royal Equipments</strong> is a trusted name in the industry,
            known for manufacturing high-quality water coolers that deliver
            efficient cooling even in extreme Indian weather conditions. With
            years of experience and a strong focus on customer satisfaction, we
            cater to residential, commercial, and industrial cooling
            requirements across Delhi and nearby regions.
          </motion.p>

          {/* Trusted Water Cooler Manufacturing Company in Delhi */}
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4"
          >
            Trusted Water Cooler Manufacturing Company in Delhi
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-gray-700 text-[17px] lg:text-[20px] leading-relaxed mb-6"
          >
            At <strong>Royal Equipments</strong>, we design and manufacture
            water coolers using premium-grade materials and advanced technology.
            Our products are built to last, energy-efficient, and easy to
            maintain. Whether you need a water cooler for a school, office,
            factory, hospital, or public space, we offer solutions that fit
            every requirement and budget.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-gray-700 text-[17px] lg:text-[20px] leading-relaxed mb-6"
          >
            As a reputed{" "}
            <Link href="/" className="italic text-blue-600 font-medium ">
              water cooler manufacturer in Delhi
            </Link>
            , we understand the diverse needs of customers. That’s why our water
            coolers are available in different capacities, models, and
            configurations to ensure uninterrupted supply of chilled drinking
            water.
          </motion.p>

          {/* Wide Range of Water Coolers */}
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4"
          >
            Wide Range of Water Coolers
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-gray-700 text-[17px] lg:text-[20px] leading-relaxed mb-4"
          >
            Royal Equipments manufactures a complete range of water coolers,
            including:
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="list-disc list-inside text-gray-700 text-[17px] lg:text-[20px] space-y-2 mb-6 ml-4"
          >
            <li>Stainless steel water coolers</li>
            <li>Storage water coolers</li>
            <li>Industrial water coolers</li>
            <li>Commercial water coolers</li>
            <li>Customized water cooling solutions</li>
          </motion.ul>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-gray-700 text-[17px] lg:text-[20px] leading-relaxed mb-10"
          >
            All our water coolers are made using corrosion-resistant stainless
            steel bodies, powerful compressors, and high-efficiency cooling
            systems. This ensures fast cooling, low power consumption, and
            hygienic water storage.
          </motion.p>

          {/* Why Choose Royal Equipments? */}
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4"
          >
            Why Choose Royal Equipments?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-gray-700 text-[17px] lg:text-[20px] leading-relaxed mb-4"
          >
            Being a leading{" "}
            <Link
              href="/contact-us"
              className="italic text-blue-600 font-medium "
            >
              water cooler manufacturer in Delhi
            </Link>
            , Royal Equipments focuses on quality, reliability, and long-term
            performance. Here’s why customers trust us:
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-gray-700 text-[17px] lg:text-[20px] space-y-2 mb-6 ml-4"
          >
            <li>✓ High-quality raw materials and components</li>
            <li>✓ Energy-efficient and eco-friendly designs</li>
            <li>✓ Competitive pricing without compromising quality</li>
            <li>✓ Custom manufacturing as per client requirements</li>
            <li>✓ Strong after-sales service and technical support</li>
          </motion.ul>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-gray-700 text-[17px] lg:text-[20px] leading-relaxed mb-10"
          >
            Our manufacturing unit follows strict quality control standards,
            ensuring that every water cooler meets industry norms and customer
            expectations.
          </motion.p>

          {/* Applications of Our Water Coolers */}
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4"
          >
            Applications of Our Water Coolers
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-gray-700 text-[17px] lg:text-[20px] leading-relaxed mb-4"
          >
            Our water coolers are widely used in:
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="list-disc list-inside text-gray-700 text-[17px] lg:text-[20px] space-y-2 mb-6 ml-4"
          >
            <li>Offices and corporate buildings</li>
            <li>Schools and colleges</li>
            <li>Hospitals and healthcare centers</li>
            <li>Factories and industrial units</li>
            <li>Railway stations, malls, and public places</li>
          </motion.ul>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-gray-700 text-[17px] lg:text-[20px] leading-relaxed mb-10"
          >
            No matter the application, Royal Equipments delivers reliable
            cooling solutions designed for continuous usage.
          </motion.p>

          {/* Customized Water Cooler Solutions */}
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4"
          >
            Customized Water Cooler Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-gray-700 text-[17px] lg:text-[20px] leading-relaxed mb-10"
          >
            Every space has different cooling needs. As an experienced{" "}
            <Link
              href="/contact-us"
              className="italic text-blue-600 font-medium "
            >
              water cooler manufacturer in Delhi
            </Link>
            , Royal Equipments offers customized solutions based on storage
            capacity, cooling requirement, space availability, and usage
            pattern. Our expert team works closely with clients to recommend the
            right model for maximum efficiency and cost savings.
          </motion.p>

          {/* FAQs */}
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6"
          >
            FAQs
          </motion.h2>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
            >
              <h3 className="font-bold text-gray-900 text-[18px] lg:text-[21px] mb-2">
                1. Why should I choose Royal Equipments as a water cooler
                manufacturer in Delhi?
              </h3>
              <p className="text-gray-700 text-[17px] lg:text-[20px] leading-relaxed">
                Royal Equipments offers durable, energy-efficient water coolers
                with reliable after-sales support, making us a trusted choice in
                Delhi.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.05 }}
            >
              <h3 className="font-bold text-gray-900 text-[18px] lg:text-[21px] mb-2">
                2. What types of water coolers does Royal Equipments
                manufacture?
              </h3>
              <p className="text-gray-700 text-[17px] lg:text-[20px] leading-relaxed">
                We manufacture stainless steel, commercial, industrial, storage,
                and customized water coolers for various applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.1 }}
            >
              <h3 className="font-bold text-gray-900 text-[18px] lg:text-[21px] mb-2">
                3. Are Royal Equipments water coolers energy efficient?
              </h3>
              <p className="text-gray-700 text-[17px] lg:text-[20px] leading-relaxed">
                Yes, our water coolers are designed with high-efficiency
                compressors that provide fast cooling with low power
                consumption.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.15 }}
            >
              <h3 className="font-bold text-gray-900 text-[18px] lg:text-[21px] mb-2">
                4. Do you provide customized water coolers?
              </h3>
              <p className="text-gray-700 text-[17px] lg:text-[20px] leading-relaxed">
                Yes, we offer customized water cooler solutions based on
                capacity, space, and specific customer requirements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.2 }}
            >
              <h3 className="font-bold text-gray-900 text-[18px] lg:text-[21px] mb-2">
                5. Do you provide installation and service support?
              </h3>
              <p className="text-gray-700 text-[17px] lg:text-[20px] leading-relaxed">
                Yes, Royal Equipments provides installation guidance and
                after-sales service support across Delhi and nearby areas.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
