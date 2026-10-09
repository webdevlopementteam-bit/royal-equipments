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
      title: "Premium Build Quality",
      desc: "Made from food-grade, durable materials that meet industry standards",
    },
    {
      title: "Energy Efficient",
      desc: "Our ovens are designed to deliver maximum output with minimum power consumption",
    },
    {
      title: "Easy Maintenance",
      desc: "Simple cleaning and low-maintenance design for busy commercial kitchens",
    },
    {
      title: "Custom Solutions",
      desc: "We understand every bakery is different; we offer tailored equipment options",
    },
    {
      title: "After-Sales Support",
      desc: "Our team is always ready to assist with installation, training, and servicing",
    },
  ];

  const faqs = [
    {
      q: "Q1. Which type of oven is best for a commercial bakery in Delhi?",
      a: (
        <>
          It depends on your production volume. A{" "}
          <strong>Single Deck Oven</strong> is great for small bakeries, while a{" "}
          <strong>Triple Deck Oven</strong> suits high-volume operations. Royal
          Equipments, a leading <strong>Bakery Equipments Manufacturer</strong>{" "}
          in Delhi, can help you choose the right one based on your specific
          needs.
        </>
      ),
    },
    {
      q: "Q2. What is the difference between a Pizza Oven and a Conveyor Pizza Oven?",
      a: (
        <>
          A standard Pizza Oven requires manual loading and monitoring, making
          it suitable for smaller output. A <strong>Conveyor Pizza Oven</strong>{" "}
          automates the baking process through a moving belt, delivering uniform
          results at higher speed — ideal for fast food chains and busy
          restaurants.
        </>
      ),
    },
    {
      q: "Q3. Does Royal Equipments supply bakery equipment outside Delhi?",
      a: (
        <>
          Yes! While we are a trusted{" "}
          <strong>Bakery Equipments Supplier in Delhi</strong>, we also deliver
          and install equipment across NCR and North India. Contact us to check
          availability in your region.
        </>
      ),
    },
    {
      q: "Q4. What is a Two Deck Oven with Proofer and who needs it?",
      a: (
        <>
          A <strong>Two Deck Oven with Proofer</strong> combines baking and
          dough fermentation in one unit. It’s ideal for bakeries that make
          bread, buns, or fermented pastries and want a space-saving, all-in-one
          solution without buying separate equipment.
        </>
      ),
    },
    {
      q: "Q5. How do I maintain commercial bakery ovens for long-term performance?",
      a: (
        <>
          Regular cleaning of heating elements, checking door seals, and
          periodic professional servicing are key. All equipment from Royal
          Equipments comes with maintenance guidelines and after-sales support
          to ensure long-lasting, trouble-free performance.
        </>
      ),
    },
  ];

  return (
    <>
      <div className="bg-white pb-4 md:pb-10">
        <ProductBreadcrumb currentProduct={"Bakery Equipments Manufacturer"} />
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
              Bakery Equipments Manufacturer in Delhi – Royal Equipments
            </h1>
            <p className="mb-6">
              If you’re looking for reliable, high-performance bakery equipment
              for your commercial kitchen or food business,{" "}
              <strong>Royal Equipments</strong> is the name you can trust. As a
              leading{" "}
              <Link
                href="/contact-us"
                className="text-blue-600 font-bold no:underline"
              >
                Bakery Equipments Manufacturer
              </Link>{" "}
              in Delhi, we don’t just sell machines — we deliver complete baking
              solutions that help your business grow, produce consistently, and
              serve better.
            </p>
          </motion.div>

          {/* Built for Bakers */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-8 mb-4">
              Built for Bakers, Designed for Performance
            </h2>
            <p className="mb-6">
              Behind every great bakery is great equipment. Slow machines,
              uneven baking, or frequent breakdowns can cost you time, money,
              and customers. That’s why at Royal Equipments, every product we
              manufacture is engineered for durability, efficiency, and ease of
              use — whether you run a small artisan bakery or a large-scale
              commercial production unit.
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
            <p className="mb-6">
              As a trusted{" "}
              <Link href="/" className="text-blue-600 font-bold no:underline">
                Bakery Equipments Supplier in Delhi
              </Link>
              , we offer a carefully curated range of professional-grade baking
              ovens and equipment:
            </p>
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
              As an established{" "}
              <strong>Bakery Equipments Manufacturer in Delhi</strong>, here’s
              what sets us apart:
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
                    <strong>{point.title}</strong> – {point.desc}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Serving Businesses Across Delhi */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-10 mb-3">
              Serving Businesses Across Delhi and Beyond
            </h2>
            <p className="mb-8">
              From Connaught Place to Dwarka, Laxmi Nagar to Rohini — Royal
              Equipments has supplied and installed bakery machinery for
              hundreds of happy clients across Delhi. As a reliable{" "}
              <strong>Bakery Equipments Supplier in Delhi</strong>, we work with
              bakeries, hotels, restaurants, cloud kitchens, and food production
              units of all sizes.
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
              Ready to Upgrade Your Bakery?
            </h2>
            <p className="mb-4">
              Don’t let outdated equipment slow your business down. Partner with
              Royal Equipments — your trusted{" "}
              <strong>Bakery Equipments Manufacturer in Delhi</strong> — and
              take your baking operations to the next level.
            </p>

            <div className="space-y-3 mb-10">
              <p className="flex items-center space-x-2 font-medium">
                <span role="img" aria-label="phone" className="text-lg">
                  📞
                </span>
                <span>
                  <Link
                    href="/contact-us"
                    className="text-blue-600 font-bold no:underline"
                  >
                    Contact us today
                  </Link>{" "}
                  to get a free consultation and customized quote for your
                  bakery setup.
                </span>
              </p>

              <p className="flex items-center space-x-2 text-blue-600 font-semibold pt-2">
                <span
                  role="img"
                  aria-label="pointing right"
                  className="text-lg"
                >
                  👉
                </span>
                <Link href="/our-products" className="no:underline">
                  Explore Our Products
                </Link>
                <span className="text-gray-400 font-normal">|</span>
                <Link
                  href="https://www.royalequipments.in/"
                  className="no:underline"
                >
                  Visit Royal Equipments
                </Link>
              </p>
            </div>
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
              Frequently Asked Questions
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
