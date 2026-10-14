"use client";

import React from "react";
import { useState } from "react";
import {
  CheckCircle2,
  Building2,
  FileCheck2,
  PackageCheck,
  Sparkles,
  ShieldCheck,
  Award,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const faqData = [
    {
      id: 1,
      question:
        "Who is the best hotel kitchen equipment manufacturer in Delhi?",
      answer:
        "Royal Equipments is one of the leading hotel kitchen equipment manufacturers in Delhi, operating since 2001. Based in Dwarka Mor, New Delhi, the company runs a 15,000 sq. ft. manufacturing facility and supplies custom-built cooking, bakery, refrigeration, dishwashing and exhaust equipment to hotels, restaurants and commercial kitchens across India.",
    },
    {
      id: 2,
      question:
        "What types of hotel kitchen equipment does Royal Equipments manufacture?",
      answer:
        "Royal Equipments manufactures cooking ranges, bakery equipment, chapati machines, food preparation equipment, refrigeration systems, bar equipment, display counters, stainless steel tables, storage racks, trolleys, dishwashing machines, and exhaust and gas pipeline systems. This makes it a single source for complete hotel and commercial kitchen setups.",
    },
    {
      id: 3,
      question: "Can hotel kitchen equipment be customized to fit my kitchen?",
      answer:
        "Yes. Royal Equipments fabricates hotel kitchen equipment to client-specific requirements, so dimensions, layouts and configurations are tailored to your kitchen space, menu and daily workload. All products are made from premium stainless steel sheets by an in-house team of designers and engineers.",
    },
    {
      id: 4,
      question:
        "Does Royal Equipments supply hotel kitchen equipment outside Delhi?",
      answer:
        "Yes. Royal Equipments supplies hotel kitchen equipment across Delhi NCR and other states in India through its distribution network. Orders are shipped by road for timely delivery to hotels, restaurants, cafés, bakeries and institutional kitchens.",
    },
    {
      id: 5,
      question: "How do I get a quote from Royal Equipments?",
      answer:
        "To get a quote, contact Royal Equipments through the Contact Us page or visit its office at Plot No. A1, Suraj Vihar, near Dwarka Mor Metro Station, New Delhi – 110078.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(0); // First FAQ open by default

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Structured Data (JSON-LD) for Google SEO
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
  return (
    <>
      <Breadcrumb title={"about us"} />

      <div className="min-h-screen bg-[#f7f8fc] text-[#222] font-sans antialiased selection:bg-[#2E3393] selection:text-white overflow-x-hidden">
        <main className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 space-y-12 lg:space-y-16">
          {/* =========================================================
              1. ABOUT ROYAL EQUIPMENTS
          ========================================================= */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_15px_50px_rgba(46,51,147,0.08)]"
          >
            {/* Background glowing shapes (using simple opacity for zero lag) */}
            <div className="absolute -top-16 -left-16 w-56 h-56 rounded-full bg-[#2E3393]/5 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-[#2E3393]/5 blur-2xl pointer-events-none" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 p-6 sm:p-8 lg:p-12 items-center">
              {/* LEFT CONTENT */}
              <div className="lg:col-span-7 space-y-6 text-[17px] lg:text-[18px] text-[#333] leading-relaxed font-normal">
                <div>
                  <span className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.18em] font-bold text-[#2E3393] mb-3">
                    <span className="w-8 h-[2px] bg-[#2E3393]" />
                    <Sparkles className="w-4 h-4 text-[#2E3393]" />
                    About Us
                  </span>

                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111] leading-tight">
                    About Royal Equipments - Best Hotel Kitchen Equipment
                    Manufacturers in Delhi
                  </h1>

                  <div className="mt-4 h-[3px] w-24 bg-[#2E3393] rounded-full" />
                </div>

                <div className="rounded-2xl bg-[#F8F9FC] border border-[#E5E7EB] p-6 shadow-sm">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#111] mb-3 flex items-center gap-2">
                    <Award className="w-6 h-6 text-[#2E3393]" />
                    Empowering Commercial Kitchens with Innovation and
                    Excellence
                  </h2>

                  <p>
                    Established in 2001,{" "}
                    <strong className="font-bold text-[#111]">
                      Royal Equipment – A Unit of Kuche India Elevation Pvt.
                      Ltd.
                    </strong>{" "}
                    is a leading manufacturer, trader, and supplier of{" "}
                    <span className="text-[#2E3393] font-medium">
                      hotel kitchen equipment Manufacturer in Delhi
                    </span>
                    , India. We specialize in delivering high-quality commercial
                    kitchen solutions, including cooking ranges, bakery
                    equipment, food processors, refrigeration systems, exhaust
                    systems, dishwashing machines, hand trolleys, ice cube
                    machines, and more.
                  </p>
                </div>

                <p>
                  Recognized as industry trendsetters, we are among the trusted{" "}
                  <em className="italic">
                    Hotel Kitchen Equipment Manufacturers
                  </em>
                  , committed to excellence, durability, and Innovation. Every
                  product is crafted with precision by our skilled designers and
                  engineers, who transform premium metal sheets{" "}
                  <span className="underline decoration-[#2E3393]/30">
                    into
                  </span>{" "}
                  fully functional, high-performance kitchen tools. With a
                  strong focus on quality and customer satisfaction,{" "}
                  <strong className="font-bold text-[#111]">
                    Royal Equipments
                  </strong>{" "}
                  continues to set benchmarks in the commercial{" "}
                  <span className="underline decoration-[#2E3393]/30">
                    kitchen
                  </span>{" "}
                  equipment sector across{" "}
                  <span className="underline decoration-[#2E3393]/30">
                    India
                  </span>
                  .
                </p>

                <p>
                  We have successfully catered to the expectations of our
                  customers and have gained their trust over time as one of the
                  reliable{" "}
                  <strong className="font-bold text-[#111]">
                    Hotel Kitchen Equipment Manufacturers
                  </strong>{" "}
                  in the industry. The user-friendly and innovative range of our
                  commercial kitchen equipment is the result of the dedicated
                  efforts of our highly efficient team. To achieve a high level
                  of client satisfaction, these products are fabricated in line
                  with{" "}
                  <span className="underline decoration-[#2E3393]/30">
                    client-specific
                  </span>{" "}
                  requirements while ensuring assured quality standards. With
                  the strong support of our wide distribution{" "}
                  <span className="underline decoration-[#2E3393]/30">
                    network
                  </span>
                  , we supply these products well on time. Our ethical business
                  practices, client-centric approach, and competitive pricing
                  have helped us build a strong and loyal client base in the
                  market.
                </p>
              </div>

              {/* RIGHT IMAGE */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="lg:col-span-5"
              >
                <div className="relative group rounded-3xl overflow-hidden bg-[#F8F9FC] border border-slate-200 p-3 shadow-xl shadow-[#2E3393]/15">
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-[#2E3393] rounded-tl-2xl z-10 pointer-events-none" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-[#2E3393] rounded-br-2xl z-10 pointer-events-none" />

                  <Image
                    src="/about/p1.webp"
                    alt="Commercial Kitchen Equipment Setup"
                    width={1200}
                    height={900}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="relative w-full h-auto object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* =========================================================
              2. BASIC INFORMATION
          ========================================================= */}
          <section>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
              <div>
                <span className="text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-[#2E3393]">
                  Company Details
                </span>

                <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#111] tracking-tight">
                  Basic Information
                </h2>
              </div>

              <div className="hidden sm:flex items-center gap-2">
                <span className="w-12 h-1 rounded-full bg-[#2E3393]" />
                <span className="w-3 h-1 rounded-full bg-[#2E3393]/30" />
              </div>
            </div>

            <div className="rounded-[28px] overflow-hidden border border-slate-200 bg-white shadow-[0_15px_50px_rgba(46,51,147,0.07)]">
              <div className="divide-y divide-slate-100">
                {[
                  ["Nature of Business", "Manufacture and Trader"],
                  ["Company CEO", "Sushil Kumar"],
                  [
                    "Registered Address",
                    "Plot no. A1, suraj vihar, opposite NSIT college, near Dwarka Mor metro station, New Delhi -110078",
                  ],
                  [
                    "Industry",
                    "Manufacturing, Trading, Importer and Exporter of Kitchen Equipment such as Cooking Range, Bakery Range, and Food Processor, etc.",
                  ],
                  ["Total Number of Employees", "26 to 50 People"],
                  ["Year of Establishment", "2001"],
                  ["Legal Status of Firm", "Individual – Proprietor"],
                  ["Promoter", "Mr. Sushil Kumar"],
                  ["Annual Turnover", "Rs. 10 – 25 Crore"],
                ].map(([label, value], index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.03,
                      ease: "easeOut",
                    }}
                    className="group grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-5 px-6 sm:px-8 py-4 sm:py-5 hover:bg-[#f8f9fc] transition-colors duration-200"
                  >
                    <div className="md:col-span-4 flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#2E3393]" />
                      <span className="font-bold text-[#111]">{label}</span>
                    </div>

                    <div className="md:col-span-8 text-[#444] leading-relaxed">
                      {value}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* =========================================================
              3. INFRASTRUCTURE / STATUTORY / PACKAGING
          ========================================================= */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Infrastructure Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-[28px] bg-white border border-slate-200 p-6 sm:p-8 shadow-[0_12px_40px_rgba(46,51,147,0.06)] transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2E3393]/5 rounded-bl-[90px]" />

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-[#2E3393] text-white flex items-center justify-center shadow-lg shadow-[#2E3393]/25">
                  <Building2 className="w-7 h-7" />
                </div>

                <h2 className="mt-6 text-2xl font-bold text-[#111]">
                  Infrastructure
                </h2>

                <div className="mt-3 h-1 w-14 rounded-full bg-[#2E3393]" />

                <div className="mt-6 space-y-4 text-[16px] lg:text-[17px]">
                  <div className="border-b border-slate-100 pb-4">
                    <p className="font-bold text-[#111]">Location Type</p>
                    <p className="mt-1 text-[#444]">URBAN</p>
                  </div>

                  <div className="border-b border-slate-100 pb-4">
                    <p className="font-bold text-[#111]">
                      Building Infrastructure
                    </p>
                    <p className="mt-1 text-[#444]">Permanent</p>
                  </div>

                  <div className="border-b border-slate-100 pb-4">
                    <p className="font-bold text-[#111]">Size of Premises</p>
                    <p className="mt-1 text-[#444]">15000 sq. Ft</p>
                  </div>

                  <div>
                    <p className="font-bold text-[#111]">Space Around</p>
                    <p className="mt-1 text-[#444]">Front porch</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Statutory Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-[28px] bg-white border border-slate-200 p-6 sm:p-8 shadow-[0_12px_40px_rgba(46,51,147,0.06)] transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2E3393]/5 rounded-bl-[90px]" />

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-[#2E3393] text-white flex items-center justify-center shadow-lg shadow-[#2E3393]/25">
                  <FileCheck2 className="w-7 h-7" />
                </div>

                <h2 className="mt-6 text-2xl font-bold text-[#111]">
                  Statutory Profile
                </h2>

                <div className="mt-3 h-1 w-14 rounded-full bg-[#2E3393]" />

                <div className="mt-6 space-y-4 text-[16px] lg:text-[17px]">
                  <div className="border-b border-slate-100 pb-4">
                    <p className="font-bold text-[#111]">
                      Import Export Code (IEC)
                    </p>
                    <p className="mt-1 text-[#444]">05120*****</p>
                  </div>

                  <div>
                    <p className="font-bold text-[#111]">GST No.</p>
                    <p className="mt-1 text-[#444]">07AIOPK9030E1Z8</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Packaging Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-[28px] bg-white border border-slate-200 p-6 sm:p-8 shadow-[0_12px_40px_rgba(46,51,147,0.06)] transition-all duration-300 md:col-span-2 lg:col-span-1"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2E3393]/5 rounded-bl-[90px]" />

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-[#2E3393] text-white flex items-center justify-center shadow-lg shadow-[#2E3393]/25">
                  <PackageCheck className="w-7 h-7" />
                </div>

                <h2 className="mt-6 text-2xl font-bold text-[#111]">
                  Packaging/Payment and Shipment Details
                </h2>

                <div className="mt-3 h-1 w-14 rounded-full bg-[#2E3393]" />

                <div className="mt-6 space-y-4 text-[16px] lg:text-[17px]">
                  <div className="border-b border-slate-100 pb-4">
                    <p className="font-bold text-[#111]">Payment Mode</p>
                    <p className="mt-1 text-[#444]">
                      Cash, DD, RTGS, Bank Transfer
                    </p>
                  </div>

                  <div>
                    <p className="font-bold text-[#111]">Shipment Mode</p>
                    <p className="mt-1 text-[#444]">By Road</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* =========================================================
              4. INFRASTRUCTURE WORKSPACE
          ========================================================= */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative overflow-hidden rounded-3xl bg-[#F8F9FC] border border-slate-200 p-6 sm:p-8 lg:p-12 shadow-sm"
          >
            <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-[#2E3393]/5" />
            <div className="absolute -bottom-24 -left-20 w-52 h-52 rounded-full bg-[#2E3393]/5" />

            <div className="relative text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs sm:text-sm uppercase tracking-[0.18em] font-bold text-[#2E3393]">
                Our Workspace
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111]">
                Infrastructure
              </h2>

              <div className="h-[3px] w-20 bg-[#2E3393] rounded-full mx-auto" />

              <p className="text-[17px] lg:text-lg text-[#333] leading-relaxed pt-2">
                Infrastructure plays an important role in the success of an
                organization. In our case, we are backed by a spacious workspace
                that is equipped with a varied range of efficient and powerful
                machines & tools, which play a vital role in attaining the exact
                desired quality. All the machines and systems are handled by a
                team that is responsible for performing various up gradations,
                needed from time-to-time.
              </p>
            </div>

            <div className="relative mt-8 max-w-xl mx-auto rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-md">
              <h3 className="text-xl font-bold text-[#111] mb-5 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#2E3393]" />
                Following are the sections of our infrastructure:
              </h3>

              <ul className="space-y-3.5 text-[17px] lg:text-lg text-[#333]">
                {[
                  "Manufacture",
                  "Quality control",
                  "Administrative",
                  "Sales & marketing",
                  "Warehouse & packaging",
                ].map((sectionName, index) => (
                  <motion.li
                    key={sectionName}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                      ease: "easeOut",
                    }}
                    className="flex items-center gap-3 group cursor-default"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#2E3393] flex-shrink-0 group-hover:scale-110 transition-transform" />
                    {sectionName}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* =========================================================
              5. MSME
          ========================================================= */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="overflow-hidden rounded-[32px] bg-white border border-slate-200 shadow-[0_15px_50px_rgba(46,51,147,0.07)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-6 p-6 sm:p-10 lg:p-12 flex items-center">
                <div>
                  <span className="inline-block text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-[#2E3393]">
                    Manufacturing
                  </span>

                  <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#111] leading-tight">
                    Infrastructure & Manufacturing Facilities
                  </h2>

                  <div className="mt-5 h-1 w-16 rounded-full bg-[#2E3393]" />

                  <p className="mt-6 text-[16px] lg:text-lg text-[#444] leading-relaxed">
                    An <strong className="font-bold text-[#111]">MSME</strong>{" "}
                    (Micro, Small and Medium Enterprise) is{" "}
                    <strong className="font-bold text-[#111]">defined</strong>{" "}
                    by RBI/GOI differently for the Manufacturing and the
                    Services Sector, as follows: Manufacturing Sector.
                    Manufacturing sector refers to enterprises engaged in
                    manufacture or production, processing or preservation of
                    goods.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6 bg-[#f5f6fa] p-6 sm:p-10 flex items-center justify-center">
                <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200 bg-white p-4 shadow-xl">
                  <Image
                    src="/about/p2.webp"
                    alt="MSME Certificate /about/p2.webp"
                    width={1200}
                    height={900}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="w-full h-auto max-h-[560px] object-contain mx-auto"
                  />
                </div>
              </div>
            </div>
          </motion.section>

          {/* =========================================================
              6. ISO CERTIFICATION
          ========================================================= */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="overflow-hidden rounded-[32px] bg-white border border-slate-200 shadow-[0_15px_50px_rgba(46,51,147,0.07)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-6 order-2 lg:order-1 bg-[#f5f6fa] p-6 sm:p-10 flex items-center justify-center">
                <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200 bg-white p-4 shadow-xl">
                  <Image
                    src="/about/p3.webp"
                    alt="ISO Certification /about/p3.webp"
                    width={1200}
                    height={900}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="w-full h-auto max-h-[560px] object-contain mx-auto"
                  />
                </div>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2 p-6 sm:p-10 lg:p-12 flex items-center">
                <div>
                  <span className="inline-block text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-[#2E3393]">
                    Certification
                  </span>

                  <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#111]">
                    ISO Certification
                  </h2>

                  <div className="mt-5 h-1 w-16 rounded-full bg-[#2E3393]" />

                  <ul className="mt-6 space-y-3.5 text-[16px] lg:text-lg text-[#333]">
                    {[
                      "Certificate Type: ISO 9001:2008",
                      "Issue Date: 24-Jun-2014",
                      "Expiry Date: 23-Jun-2017",
                    ].map((certText, index) => (
                      <motion.li
                        key={certText}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.08,
                          ease: "easeOut",
                        }}
                        className="flex items-start gap-3 rounded-2xl bg-[#f8f9fc] border border-slate-100 px-5 py-3.5 shadow-sm"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#2E3393] flex-shrink-0 mt-0.5" />
                        <span>{certText}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* =========================================================
              7. OUR TEAM & COMPANY ALBUM
          ========================================================= */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-[#2E3393]">
                A Few Words About
              </span>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111]">
                Our Team
              </h2>

              <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#2E3393]" />

              <p className="mt-6 text-[16px] lg:text-lg text-[#444] leading-relaxed">
                Our company has recruited a team of experienced, well-trained
                and skilled designers, engineers, technicians, quality
                controllers, warehouse & packaging experts, administrative staff
                members, sales & marketing professionals. Our team members work
                in full co-ordination with each other and make sure that all the
                products are manufactured as per the industry guidelines. To
                enhance the knowledge and skills of our team members, we carry
                out several trainings, workshops and seminars, on a regular
                basis.
              </p>
            </motion.div>

            {/* COMPANY ALBUM */}
            <div className="mt-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-slate-200" />
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111]">
                  Company Album
                </h3>
                <div className="h-px flex-1 bg-slate-200" />
              </div>

              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* IMAGE 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="group relative rounded-[28px] overflow-hidden bg-white border border-slate-200 p-3 shadow-[0_15px_45px_rgba(46,51,147,0.08)]"
                >
                  <div className="relative h-[260px] sm:h-[320px] lg:h-[380px] overflow-hidden rounded-[20px] bg-[#f8f9fc]">
                    <Image
                      src="/about/p5.webp"
                      alt="Company Album p5.webp"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                </motion.div>

                {/* IMAGE 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                  className="group relative rounded-[28px] overflow-hidden bg-white border border-slate-200 p-3 shadow-[0_15px_45px_rgba(46,51,147,0.08)]"
                >
                  <div className="relative h-[260px] sm:h-[320px] lg:h-[380px] overflow-hidden rounded-[20px] bg-[#f8f9fc]">
                    <Image
                      src="/about/p4.webp"
                      alt="Company Album p4.webp"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
        {/* Google SEO Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />

        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider font-semibold text-[#2F3191] bg-[#2F3191]/10 border border-[#2F3191]/20 py-1.5 px-4 rounded-full mb-3 shadow-xs transition-all hover:bg-[#2F3191]/15">
              <span className="w-2 h-2 rounded-full bg-[#2F3191] animate-pulse"></span>
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Start Your Hotel Kitchen Setup with Royal Equipments
            </h2>
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-4">
            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl border border-slate-200/80 shadow-sm overflow-hidden transition-all duration-200 hover:border-slate-300"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between text-left p-5 sm:p-6 text-slate-900 font-semibold text-base sm:text-lg focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="pr-4 leading-snug">{faq.question}</span>
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-600 transition-transform duration-300">
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-amber-600" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
