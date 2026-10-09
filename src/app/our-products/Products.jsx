"use client";
import React, { useState } from "react";
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  PhoneCall,
  Layers,
} from "lucide-react";
import { equipments } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ProductBreadcrumb from "@/components/ProductBreadcrumb";

const faqs = [
  {
    q: "Q1. What types of equipment do canteen equipment manufacturers provide?",
    a: "Canteen equipment manufacturers like Royal Equipments provide a complete range of commercial kitchen solutions including refrigeration units, display counters, stainless steel tables, washing equipment, storage and trolley equipment, water coolers, bakery ovens, and ventilation and ducting systems — everything needed to run a fully functional canteen.",
  },
  {
    q: "Q2. How do I choose the right canteen equipment manufacturer in Delhi?",
    a: "Look for a manufacturer with proven experience, a wide product range, customization options, and strong after-sales support. Royal Equipments checks all these boxes — we work closely with clients to understand their canteen size, daily volume, and specific requirements before recommending the right equipment setup.",
  },
  {
    q: "Q3. Can canteen equipment be customized based on kitchen size and capacity?",
    a: "Yes, absolutely. At Royal Equipments, we offer fully customized canteen equipment solutions. Whether you run a small office canteen or a large institutional kitchen serving thousands of meals daily, we design and manufacture equipment that fits your exact space, workflow, and budget.",
  },
  {
    q: "Q4. What industries or institutions need canteen equipment?",
    a: "Canteen equipment is essential for schools, colleges, corporate offices, hospitals, factories, government institutions, hostels, and IT parks — any place where large numbers of people need to be served meals regularly. Royal Equipments has experience supplying equipment across all these sectors.",
  },
  {
    q: "Q5. How long does commercial canteen equipment last?",
    a: "With proper use and regular maintenance, high-quality commercial canteen equipment can last 10 to 15 years or more. Royal Equipments manufactures equipment using premium-grade materials and provides after-sales servicing to ensure your investment delivers long-term, trouble-free performance.",
  },
];

export default function RoyalEquipmentsProducts() {
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#2F3192] selection:text-white">
      {/* Hero Section */}
      <ProductBreadcrumb />

      {/* Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-white">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <div className="inline-block pb-1 border-b-2 border-[#2F3192] mb-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-widest text-slate-900">
              Categories
            </h2>
          </div>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Explore our extensive lineup of commercial kitchen and canteen
            equipment engineered for excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {equipments.map((item, idx) => (
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
              <Link
                href={`/${item.slug}`}
                className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col cursor-pointer transform hover:-translate-y-2 hover:border-[#2F3192]"
              >
                <div className="relative h-56 sm:h-64 bg-white overflow-hidden">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: idx * 0.08 + 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={item.path}
                      alt={item.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={100}
                      className="object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Center-expanding cross lines that fill the card with light shadow on hover */}
                    <div className="absolute inset-0 bg-black/15 origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-out z-10 pointer-events-none" />
                    <div className="absolute inset-0 bg-black/15 origin-center scale-y-0 group-hover:scale-y-100 transition-transform duration-400 ease-out z-10 pointer-events-none" />

                    {/* Center Glow Accent */}
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white/30 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none" />
                  </motion.div>
                </div>

                <div className="bg-[#080949] text-white py-3.5 px-4 text-center group-hover:bg-[#2F3192] transition-colors duration-300 border-t border-slate-900 flex items-center justify-center min-h-[45px]">
                  <h3 className="font-medium text-sm sm:text-base tracking-wide text-white leading-tight">
                    {item.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Information & Features Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Canteen Equipment Manufacturers – Royal Equipments
            </h2>
            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
              A well-equipped canteen is the backbone of any school, office,
              hospital, or factory. When hundreds of people depend on your
              canteen every single day, you simply cannot afford equipment that
              breaks down, underperforms, or creates hygiene issues. That is
              exactly why so many businesses across Delhi trust{" "}
              <strong className="text-slate-900 font-bold">
                Royal Equipments
              </strong>{" "}
              — one of the most reliable{" "}
              <span className="text-[#2F3192] font-semibold">
                Canteen Equipment Manufacturers
              </span>{" "}
              in the region.
            </p>
            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
              We do not just manufacture equipment. We help you build a canteen
              that runs smoothly, serves efficiently, and meets the highest
              standards of hygiene and safety.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#2F3192] text-white rounded-xl font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Who We Are
              </h3>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Royal Equipments is a Delhi-based commercial kitchen and canteen
              equipment manufacturing company with years of proven experience.
              We have worked with canteens across schools, colleges, corporate
              offices, hospitals, factories, and government institutions — and
              we understand that each setup comes with its own unique
              challenges.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Our approach is simple: listen to what you need, and then build
              equipment that fits your space, your volume, and your budget —
              without cutting corners on quality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#2F3192] text-white rounded-xl">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Our Product Range
              </h3>
            </div>
            <p className="text-slate-700 leading-relaxed">
              As trusted{" "}
              <Link
                href={"/contact-us"}
                className="text-[#2F3192] hover:text-blue-600 font-semibold"
              >
                Canteen Equipment Manufacturers in Delhi
              </Link>
              , we manufacture and supply a complete range of canteen and
              commercial kitchen equipment:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                {
                  title: "Refrigeration Equipment",
                  desc: "Safe and efficient food storage for high-volume canteens",
                },
                {
                  title: "Water Cooler and Dispensers",
                  desc: "Continuous, hygienic drinking water supply for staff and students",
                },
                {
                  title: "Bar Equipments",
                  desc: "Professional bar setups for institutional and commercial use",
                },
                {
                  title: "Display Counters",
                  desc: "Functional counters for food and beverage presentation",
                },
                {
                  title: "Stainless Steel Tables",
                  desc: "Durable, hygienic work surfaces for food preparation",
                },
                {
                  title: "Storage Equipments",
                  desc: "Practical storage solutions for organized material handling",
                },
                {
                  title: "Trolley Equipments",
                  desc: "Easy movement of food, utensils, and supplies across the kitchen",
                },
                {
                  title: "Service Equipments",
                  desc: "Designed for smooth, fast, and efficient serving operations",
                },
                {
                  title: "Bakery Equipments",
                  desc: "Complete in-house baking solutions for canteens with bakery needs",
                },
                {
                  title: "Imported Equipments",
                  desc: "Premium international-grade machinery for specialized requirements",
                },
                {
                  title: "Washing Equipments",
                  desc: "Heavy-duty utensil and equipment cleaning solutions",
                },
                {
                  title:
                    "Exhaust / Fresh Air / Gas Pipeline and Ducting Systems",
                  desc: "Complete ventilation and gas line solutions for a safe kitchen environment",
                },
              ].map((prod, idx) => (
                <li
                  key={idx}
                  className="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-3 shadow-sm hover:border-[#2F3192] transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#2F3192] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block text-sm sm:text-base">
                      {prod.title}
                    </strong>
                    <span className="text-xs sm:text-sm text-slate-600">
                      {prod.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-slate-700 italic pt-2">
              Every product we manufacture is built to handle long working
              hours, heavy daily usage, and the demands that only a busy canteen
              can bring.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 bg-[#080949] text-slate-100 p-8 rounded-3xl shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#2F3192] text-white rounded-xl">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Why Canteens Across Delhi Choose Royal Equipments
              </h3>
            </div>
            <p className="text-slate-300">
              There are many{" "}
              <strong className="text-white">
                Canteen Equipment Manufacturers
              </strong>{" "}
              available — but here is what makes Royal Equipments a preferred
              choice:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "High-Grade Materials",
                  desc: "We use only food-safe, durable materials that meet industry standards.",
                },
                {
                  title: "Customized Solutions",
                  desc: "No two canteens are the same; we design setups based on your size, capacity, and workflow.",
                },
                {
                  title: "Competitive Pricing",
                  desc: "We believe good quality equipment should be affordable too.",
                },
                {
                  title: "Timely Delivery and Installation",
                  desc: "We deliver on time and handle the complete installation so you are ready to operate without any hassle.",
                },
                {
                  title: "Reliable After-Sales Support",
                  desc: "Our team is always available for maintenance, servicing, and any support you need after purchase.",
                },
                {
                  title: "Industry Compliance",
                  desc: "All our equipment meets hygiene, safety, and quality standards.",
                },
              ].map((reason, idx) => (
                <div
                  key={idx}
                  className="bg-[#2F3192]/20 border border-slate-700 p-4 rounded-2xl"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-white" />
                    <h4 className="font-bold text-white text-sm sm:text-base">
                      {reason.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 pl-4">
                    {reason.desc}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-slate-300 text-sm pt-2">
              We work closely with every client — from the first conversation to
              final installation — to make sure the equipment we deliver is
              exactly what your canteen needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Canteens We Serve
            </h3>
            <p className="text-slate-700">
              As experienced{" "}
              <Link
                href={"/contact-us"}
                className="text-[#2F3192] font-bold hover:text-blue-600"
              >
                Canteen Equipment Manufacturers in Delhi
              </Link>
              , we proudly serve a wide range of sectors including:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                "Schools and Colleges",
                "Corporate Offices and IT Parks",
                "Hospitals and Healthcare Facilities",
                "Factories and Industrial Units",
                "Government Institutions and Hostels",
              ].map((sector, idx) => (
                <li
                  key={idx}
                  className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-center gap-3 font-medium text-slate-800 shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#2F3192] shrink-0" />
                  <span className="text-sm">{sector}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-700 pt-2 font-medium">
              No matter the size or scale of your canteen, we have the right
              equipment and the right expertise to get you up and running.
            </p>
          </motion.div>

          <div className="bg-[#2F3192] text-white p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl font-black tracking-tight">
                Let’s Set Up Your Canteen the Right Way
              </h3>
              <p className="text-slate-100 text-sm sm:text-base max-w-xl font-medium">
                If you are planning a new canteen setup or looking to upgrade
                your existing one, Royal Equipments is here to help. Contact us
                today for a free consultation and a customized quote based on
                your specific requirements.
              </p>
            </div>
            <a
              href={"tel:919310010882"}
              className="bg-white text-[#2F3192] font-bold px-6 py-3.5 rounded-xl shadow-lg hover:bg-slate-100 hover:scale-105 transition-all shrink-0 flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#2F3192]" />
              Get Free Consultation
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 border-t border-slate-200 text-sm font-semibold">
            <Link
              href="/products"
              className="text-[#2F3192]  flex items-center gap-1"
            >
              Explore Our Products <ArrowRight className="w-4 h-4" />
            </Link>
            <span className="text-slate-300">|</span>
            <Link
              href="/contact-us"
              className="text-[#2F3192]  flex items-center gap-1"
            >
              Contact Royal Equipments <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-100 py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 text-[#2F3192] font-semibold mb-2">
              <HelpCircle className="w-5 h-5 text-[#2F3192]" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full text-left p-5 sm:p-6 font-bold text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-base sm:text-lg">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#2F3192] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="px-5 sm:px-6 pb-6 text-slate-700 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/50"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
