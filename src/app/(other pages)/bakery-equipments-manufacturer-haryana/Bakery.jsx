"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import ProductBreadcrumb from "@/components/ProductBreadcrumb";
import ImageGrid from "@/components/ImageGrid";
import { bakeryEquipments } from "@/data/data";

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
      staggerChildren: 0.1,
    },
  },
};

export default function Bakery() {
  const products = [
    {
      title: "Single Deck Oven",
      description:
        "Perfect for small to mid-size bakeries. Delivers consistent, even heat for breads, pastries, and cakes. Compact design, easy to operate, and built to last.",
    },
    {
      title: "Double Deck Oven",
      description:
        "Bake more in less time. The double deck oven is ideal for growing businesses that need higher output without compromising on quality or consistency.",
    },
    {
      title: "Triple Deck Oven",
      description:
        "Maximum baking capacity in a single unit. The triple deck oven is built for high-volume commercial bakeries and production kitchens where speed and efficiency are non-negotiable.",
    },
    {
      title: "Two Deck Oven with Proofer",
      description:
        "A smart combination of a double deck oven and a built-in proofing chamber. Perfect for bakeries that need precise dough fermentation along with baking — all in one compact unit.",
    },
    {
      title: "Pizza Oven",
      description:
        "Specially designed for pizzerias and multi-cuisine restaurants. Delivers the perfect crust with precise temperature control and even heat distribution.",
    },
    {
      title: "Conveyor Pizza Oven",
      description:
        "Ideal for high-speed pizza production. The conveyor system ensures every pizza is baked uniformly without manual monitoring — great for fast food chains and large restaurants.",
    },
  ];

  const whyChooseUs = [
    {
      title: "Improve production efficiency and workflow",
      desc: "Streamline your daily kitchen operations smoothly",
    },
    {
      title: "Deliver consistent baking performance",
      desc: "Maintain uniform taste, texture, and quality across every batch",
    },
    {
      title: "Reduce maintenance and operational costs",
      desc: "Reliable equipment engineered to minimize downtime and repairs",
    },
    {
      title: "Ensure easy cleaning and user-friendly operation",
      desc: "Designed for busy commercial kitchens requiring quick upkeep",
    },
    {
      title: "Provide long-lasting durability with premium-grade materials",
      desc: "Built to withstand rigorous day-to-day commercial usage",
    },
  ];

  const faqs = [
    {
      q: "1. Which is the best Bakery Equipments Manufacturer in Haryana?",
      a: (
        <>
          Royal Equipments is one of the trusted{" "}
          <strong>Bakery Equipments Manufacturers in Haryana</strong>, offering
          high-quality and durable bakery machines for commercial use.
        </>
      ),
    },
    {
      q: "2. What types of bakery equipment do you provide?",
      a: (
        <>
          We provide bakery ovens, dough mixers, planetary mixers, display
          counters, proofers, refrigeration units, and complete bakery setup
          solutions.
        </>
      ),
    },
    {
      q: "3. Do you offer customized bakery equipment solutions?",
      a: (
        <>
          Yes, we provide customized bakery equipment solutions based on your
          business requirements and production capacity.
        </>
      ),
    },
    {
      q: "4. Why is commercial bakery equipment important?",
      a: (
        <>
          Commercial bakery equipment improves production speed, maintains
          product quality, reduces manual work, and increases overall
          efficiency.
        </>
      ),
    },
    {
      q: "5. How can I contact Royal Equipments for bakery equipment?",
      a: (
        <>
          You can contact Royal Equipments directly for product details,
          pricing, and customized bakery equipment solutions for your business.
        </>
      ),
    },
  ];

  return (
    <>
      <div className="bg-white pb-4 md:pb-10">
        <ProductBreadcrumb
          currentProduct={"Bakery Equipments Manufacturer in Haryana"}
        />
        <ImageGrid data={bakeryEquipments} />

        {/* Dynamic Content Section */}
        <section className="max-w-5xl mx-auto px-4 py-8 text-[17px] lg:text-[18px] text-gray-800 leading-relaxed font-sans">
          {/* Main Title & Intro */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Bakery Equipments Manufacturer in Haryana
            </h1>
            <p className="mb-6">
              At Royal Equipments, we are a trusted name in providing
              high-quality bakery equipment designed to improve productivity,
              performance, and efficiency for bakeries, hotels, restaurants, and
              food businesses. As a leading{" "}
              <Link
                href={"/"}
                className="text-blue-600 hover:text-blue-900 font-bold"
              >
                Bakery Equipments Manufacturer in Haryana
              </Link>
              , we offer advanced and durable solutions that help businesses
              achieve smooth and hassle-free operations.
            </p>
          </motion.div>

          {/* Premium Bakery Equipment for Every Business */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-8 mb-4">
              Premium Bakery Equipment for Every Business
            </h2>
            <p className="mb-6">
              We manufacture and supply a wide range of bakery equipment
              including bakery ovens, dough mixers, proofers, display counters,
              planetary mixers, refrigeration units, and more. Every machine is
              designed using premium-quality materials to ensure long-lasting
              durability, energy efficiency, and superior performance.
            </p>
            <p className="mb-6">
              As a reliable{" "}
              <Link href={"/contact-us"} className="text-blue-600 font-bold">
                Bakery Equipments Supplier in Haryana
              </Link>
              , we focus on delivering equipment that meets modern industry
              standards while helping businesses maintain high production
              quality and hygiene.
            </p>
          </motion.div>

          {/* Products Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-8 mb-3">
              Our Bakery Equipment Products
            </h2>
          </motion.div>

          {/* Product Cards Grid with Staggered Framer Motion */}
          <motion.div
            className="space-y-6 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {products.map((item, index) => (
              <motion.div key={index} variants={fadeInUp} className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="inline-block w-2.5 h-2.5 bg-blue-500 transform rotate-45 shrink-0" />
                  <h3 className="font-bold text-lg lg:text-xl text-gray-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-700 pl-5">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-10 mb-3">
              Why Choose Royal Equipments?
            </h2>
            <p className="mb-4">
              As an experienced{" "}
              <strong>Bakery Equipments Manufacturer in Haryana</strong>, we
              provide innovative and efficient bakery solutions tailored to your
              business needs. Our equipment is specially designed to:
            </p>
            <motion.ul
              className="space-y-3 mb-8 pl-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {whyChooseUs.map((point, index) => (
                <motion.li
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start space-x-3"
                >
                  <div className="bg-emerald-500 text-white rounded p-0.5 mt-1 shrink-0">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span>
                    <strong>{point.title}</strong>
                  </span>
                </motion.li>
              ))}
            </motion.ul>
            <p className="mb-8">
              Our commitment to quality and customer satisfaction makes us a
              preferred choice for bakeries and commercial kitchens across
              Haryana.
            </p>
          </motion.div>

          {/* Trusted Bakery Equipments Supplier in Haryana */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-10 mb-3">
              Trusted Bakery Equipments Supplier in Haryana
            </h2>
            <p className="mb-6">
              Royal Equipments offers complete bakery setup solutions for small,
              medium, and large-scale businesses. From commercial bakery ovens
              to display counters and dough processing machines, we provide
              everything required to run a successful bakery operation .
            </p>
            <p className="mb-8">
              We understand the importance of reliable equipment in the food
              industry, which is why our products are manufactured with
              precision and tested for quality and safety.
            </p>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-10 mb-3">
              Order High-Quality Bakery Equipment Today
            </h2>
            <p className="mb-4">
              Upgrade your bakery business with modern and efficient machinery
              from{" "}
              <Link href="/" className="text-blue-600 font-bold">
                Royal Equipments
              </Link>
              . As a trusted Bakery Equipments Manufacturer and Supplier in
              Haryana, we provide customized solutions that match your
              production requirements and budget.
            </p>
            <p className="mb-10">
              Contact us today to explore our wide range of bakery equipment and
              take your bakery business to the next level.
            </p>
          </motion.div>

          {/* FAQ Section */}
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
                  <div className="text-gray-700">{faq.a}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>
      </div>
    </>
  );
}
