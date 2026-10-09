"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ProductBreadcrumb from "@/components/ProductBreadcrumb";
import ImageGrid from "@/components/ImageGrid";
import { exhaustSystem } from "@/data/data";

// Animation Variants for Framer Motion
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function Exhaust() {
  const whyChooseUsPoints = [
    "High-quality materials and robust construction",
    "Efficient smoke and heat removal",
    "Energy-efficient and low-maintenance designs",
    "Custom fabrication based on kitchen layout",
    "Competitive pricing with reliable support",
  ];

  const applicationsList = [
    "Restaurants and commercial kitchens",
    "Hotels and banquet kitchens",
    "Cloud kitchens and food courts",
    "Industrial canteens and catering units",
    "Bakeries and food processing units",
  ];

  const faqs = [
    {
      q: "1. Why choose Royal Equipments among Exhaust Hood Manufacturers in Delhi?",
      a: "Royal Equipments offers durable, efficient exhaust hood systems with customized designs and reliable after-sales support.",
    },
    {
      q: "2. What types of exhaust hoods do you manufacture?",
      a: "We manufacture exhaust hood island types along with complete ventilation systems including blowers, fans, and ducting.",
    },
    {
      q: "3. Do you provide complete kitchen ventilation solutions?",
      a: "Yes, we offer air curtains, exhaust fans, fresh air centrifugal blower units, and GI ducting systems as a complete solution.",
    },
    {
      q: "4. Can exhaust hood systems be customized?",
      a: "Yes, we provide custom-made exhaust hoods and ducting systems based on kitchen layout and cooking requirements.",
    },
    {
      q: "5. Do you provide installation support in Delhi?",
      a: "Yes, Royal Equipments provides installation guidance and service support across Delhi and nearby regions.",
    },
  ];

  return (
    <>
      <div className="bg-white pb-4 md:pb-10">
        <ProductBreadcrumb
          currentProduct={
            "Exhaust / Fresh / Air / Gas Pipe Line & Ducting System"
          }
        />

        {/* Image Grid Component */}
        <ImageGrid data={exhaustSystem} />

        {/* Content Section Placed Directly After ImageGrid */}
        <section className="max-w-5xl mx-auto px-4 py-8 text-[17px] lg:text-[18px] text-gray-800 leading-relaxed font-sans">
          {/* Main Title & Intro */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h1 className="text-3xl sm:text-3xl font-bold text-gray-900 mb-6">
              Exhaust Hood Manufacturers in Delhi – Royal Equipments
            </h1>
            <p className="mb-4">
              A well-ventilated kitchen is essential for safety, comfort, and
              hygiene. Excess heat, smoke, oil fumes, and odors can quickly make
              a commercial kitchen uncomfortable and unsafe. Royal Equipments is
              one of the trusted{" "}
              <Link
                href="/contact-us"
                className="text-blue-600 font-bold  italic"
              >
                Exhaust Hood Manufacturers in Delhi
              </Link>
              , providing complete kitchen ventilation solutions designed for
              high-performance and long-term use.
            </p>
            <p className="mb-6">
              We specialize in manufacturing and supplying advanced exhaust
              systems that help maintain a clean, cool, and efficient kitchen
              environment for restaurants, hotels, cloud kitchens, and
              industrial food units.
            </p>
          </motion.div>

          {/* Reliable Exhaust Hood Manufacturing */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-8 mb-4">
              Reliable Exhaust Hood Manufacturing Company in Delhi
            </h2>
            <p className="mb-4">
              As an experienced name among{" "}
              <strong>Exhaust Hood Manufacturers in Delhi</strong>, Royal
              Equipments focuses on quality engineering and practical design.
              Our exhaust hoods are manufactured using high-grade materials and
              are built to handle heavy cooking loads common in Indian kitchens.
            </p>
            <p className="mb-6">
              Our solutions not only remove smoke and heat effectively but also
              improve air circulation, making the workspace more comfortable for
              kitchen staff.
            </p>
          </motion.div>

          {/* Complete Kitchen Ventilation Product Range */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-8 mb-4">
              Complete Kitchen Ventilation Product Range
            </h2>
            <p className="mb-6">
              Royal Equipments offers a complete range of kitchen ventilation
              and air management products, including:
            </p>

            <div className="space-y-4 mb-6">
              <p>
                <strong>Air Curtain</strong> — Prevents outside dust, insects,
                and hot air from entering the kitchen while maintaining indoor
                air quality.
              </p>
              <p>
                <strong>Exhaust Hood Island Type</strong> — Ideal for island
                cooking stations, efficiently capturing smoke and fumes from all
                sides.
              </p>
              <p>
                <strong>Exhaust Fan</strong> — Helps in fast removal of hot air
                and odors, ensuring proper airflow in enclosed kitchen areas.
              </p>
              <p>
                <strong>Fresh Air Centrifugal Blower Unit</strong> — Supplies
                fresh air into the kitchen, balancing exhaust air and improving
                overall ventilation.
              </p>
              <p>
                <strong>GI Ducting System</strong> — Designed for smooth and
                safe air flow, ensuring efficient transfer of smoke and fumes
                outside the kitchen.
              </p>
            </div>

            <p className="mb-8">
              All products are designed to work together as a complete
              ventilation system, improving kitchen efficiency and safety.
            </p>
          </motion.div>

          {/* Why Choose Royal Equipments */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-10 mb-4">
              Why Choose Royal Equipments?
            </h2>
            <p className="mb-4">
              Being a reputed name among Exhaust Hood Manufacturers in Delhi,{" "}
              <Link
                href="https://www.royalequipments.in/"
                className="text-blue-600 font-bold  italic"
              >
                Royal Equipments
              </Link>{" "}
              is known for dependable products and customer-focused solutions.
              Here’s why clients trust us:
            </p>

            <motion.ul
              className="space-y-2 mb-6 pl-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {whyChooseUsPoints.map((point, index) => (
                <motion.li
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start space-x-2"
                >
                  <span className="font-bold text-gray-900">✓</span>
                  <span>{point}</span>
                </motion.li>
              ))}
            </motion.ul>

            <p className="mb-8">
              Our team understands real kitchen challenges and designs solutions
              that deliver consistent performance even during peak hours.
            </p>
          </motion.div>

          {/* Applications of Our Exhaust Systems */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-10 mb-4">
              Applications of Our Exhaust Systems
            </h2>
            <p className="mb-4">
              Our exhaust hoods and ventilation systems are widely used in:
            </p>

            <motion.ul
              className="list-disc pl-6 space-y-2 mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {applicationsList.map((app, index) => (
                <motion.li key={index} variants={fadeInUp}>
                  {app}
                </motion.li>
              ))}
            </motion.ul>

            <p className="mb-8">
              Whether it’s a small kitchen or a large cooking area, Royal
              Equipments provides ventilation systems that meet every
              requirement.
            </p>
          </motion.div>

          {/* Customized Exhaust Hood Solutions in Delhi */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-10 mb-4">
              Customized Exhaust Hood Solutions in Delhi
            </h2>
            <p className="mb-10">
              Every kitchen layout is unique. As one of the professional{" "}
              <strong>Exhaust Hood Manufacturers in Delhi</strong>, Royal
              Equipments offers customized exhaust hood and ducting solutions
              based on cooking load, kitchen size, and equipment placement. Our
              team helps plan and design a system that ensures maximum
              efficiency and compliance with safety standards.
            </p>
          </motion.div>

          {/* FAQs Section */}
          <motion.div
            className="mt-12 pt-8 border-t border-gray-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              FAQs
            </h2>

            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="space-y-2"
                >
                  <h3 className="font-bold text-gray-900 text-lg lg:text-xl">
                    {faq.q}
                  </h3>
                  <p className="text-gray-700">{faq.a}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>
      </div>
    </>
  );
}
