"use client";
import ProductBreadcrumb from "@/components/ProductBreadcrumb";
import React from "react";
import { cakePastryDisplayCounters } from "@/data/data";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const counterTypes = [
  {
    name: "Cold display counter",
    text: "Has a cooling system inside. Best for milk sweets like rasmalai, rasgulla, kalakand, milk cake and sandesh, which spoil fast at room temperature.",
  },
  {
    name: "Normal (dry) display counter",
    text: "No cooling. Good for dry sweets like kaju katli, soan papdi, ladoo and namkeen.",
  },
  {
    name: "Hot and cold counter",
    text: "One part stays cool and one part stays warm. Useful if you sell sweets along with hot snacks like samosa or kachori.",
  },
  {
    name: "Curved glass counter",
    text: "The front glass is bent, so customers get a wide, clear view. Popular in premium shops.",
  },
  {
    name: "Straight glass counter",
    text: "Flat front glass. Saves space and is easy to clean.",
  },
  {
    name: "Corian top counter",
    text: "A smooth, premium-looking top that is easy to wipe.",
  },
  {
    name: "L-shape and corner counters",
    text: "Fit into shop corners and give more display area on the same floor.",
  },
];

const sizeOptions = [
  { option: "Length", choices: "4 ft, 5 ft, 6 ft or custom" },
  { option: "Shelves", choices: "2, 3 or 4 levels" },
  { option: "Type", choices: "Cold, normal, or hot and cold" },
  { option: "Body", choices: "Stainless steel (SS 202 or SS 304)" },
  { option: "Top", choices: "Stainless steel, granite or Corian" },
  { option: "Front glass", choices: "Curved or straight toughened glass" },
  { option: "Lighting", choices: "LED lights on each shelf" },
  { option: "Price", choices: "Quoted on size, type and steel grade" },
];

const chooseQuestions = [
  {
    q: "What do you sell most?",
    a: "If most of your sweets are milk-based, choose a cold counter. If they are mostly dry, a normal counter saves money and electricity.",
  },
  {
    q: "How much space do you have?",
    a: "Measure the length of your shop front. Leave enough room behind the counter for staff to move.",
  },
  {
    q: "Which steel do you need?",
    a: "SS 304 resists rust better and suits cold counters and wet areas. SS 202 costs less and works well for dry counters.",
  },
  {
    q: "How many varieties do you show?",
    a: "More items need more shelves or a longer counter.",
  },
  {
    q: "What is your budget?",
    a: "Share it with us and we will suggest the best option within it.",
  },
];

const whyChoose = [
  {
    title: "In business since 2001",
    text: "We have over 25 years of experience in commercial kitchen and display equipment.",
  },
  {
    title: "We make it ourselves",
    text: "As a sweet display counter manufacturer, not just a trader, we can change the size, shelves, glass and finish for you.",
  },
  {
    title: "Complete service",
    text: "Site visit, design, manufacturing, delivery and installation, all from one team.",
  },
  {
    title: "One supplier for your whole shop",
    text: "We also make cake and pastry display counters, refrigeration and bakery equipment.",
  },
  {
    title: "Warranty",
    text: "Every counter comes with a warranty. Ask our team for the details of your model.",
  },
  {
    title: "Delivery time",
    text: "We share a clear delivery date along with your quote.",
  },
  {
    title: "After-sales support",
    text: "Our team helps with service and repairs after installation.",
  },
];

const workSteps = [
  {
    title: "Talk to us",
    text: "Call or WhatsApp us with your shop size and the sweets you sell.",
  },
  {
    title: "Design and quote",
    text: "We share a simple drawing and a clear price.",
  },
  {
    title: "Manufacturing",
    text: "We build your counter in our unit and check its quality before dispatch.",
  },
  {
    title: "Delivery and installation",
    text: "Our team delivers the counter and sets it up at your shop.",
  },
  {
    title: "Support",
    text: "We stay in touch for service and spare parts.",
  },
];

const faqs = [
  {
    q: "Who is a good sweet display counter manufacturer in Delhi?",
    a: "Royal Equipments is a sweet display counter manufacturer in Delhi, working since 2001. It makes cold, normal, and hot and cold sweet counters in custom sizes. The company handles design, manufacturing, delivery and installation from its unit near Dwarka Mor, New Delhi.",
  },
  {
    q: "What is the price of a sweet display counter in Delhi?",
    a: "The price of a sweet display counter in Delhi depends on its size, type and material. Cold counters cost more than normal counters, and SS 304 costs more than SS 202. Royal Equipments gives an exact quote once it knows your shop size, counter type and steel grade.",
  },
  {
    q: "Which sweet counter is best for milk sweets?",
    a: "A cold display counter is best for milk sweets like rasmalai, rasgulla and kalakand. It keeps them cool and fresh for longer. For dry sweets like kaju katli and ladoo, a normal counter without cooling is enough.",
  },
  {
    q: "What size of sweet display counter should I buy?",
    a: "The most common sizes are 4, 5 and 6 feet long, with 2 to 4 shelves. Choose the size based on your shop front length and how many sweet varieties you sell. Royal Equipments also makes custom sizes and L-shape counters for corners.",
  },
  {
    q: "How long does it take to make and deliver a sweet display counter?",
    a: "Delivery time depends on the size and design of the counter. Royal Equipments shares a clear delivery date with the quote, once the design is final. Custom designs may take a little longer.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const WHATSAPP_URL = "https://wa.me/919310010882";

// Cake-only products that should not appear on the sweet counter page
const hiddenProducts = [
  "Curved Display Counter",
  "Curved Display Counter With Corien",
  "Vertical Cake Showcase",
];

const sweetCounters = cakePastryDisplayCounters.filter(
  (item) => !hiddenProducts.includes(item.name),
);

export default function Sweet() {
  return (
    <div className="bg-white">
      {/* Google SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-white pb-4 md:pb-10">
        <ProductBreadcrumb currentProduct={"Sweet Display Counters"} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 my-6">
          {sweetCounters.map((item, idx) => (
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
              <div className="group bg-white rounded-xl sm:rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col cursor-default transform hover:-translate-y-2 hover:border-[#2F3192]">
                {/* Image Container */}
                <div className="relative h-48 xs:h-52 sm:h-64 bg-white overflow-hidden">
                  <motion.div
                    initial={{ scale: 0.98 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.9,
                      delay: idx * 0.06,
                    }}
                    className="relative w-full h-full overflow-hidden group"
                  >
                    {/* Image */}
                    {item?.path ? (
                      <Image
                        src={item.path}
                        alt={item?.name || "Product"}
                        fill
                        sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        quality={75}
                        className="object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    ) : null}

                    {/* Center-expanding cross lines overlay */}
                    <div className="absolute inset-0 bg-black/15 origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-out z-10 pointer-events-none" />

                    <div className="absolute inset-0 bg-black/15 origin-center scale-y-0 group-hover:scale-y-100 transition-transform duration-400 ease-out z-10 pointer-events-none" />

                    {/* Center Glow Accent */}
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white/30 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none" />
                  </motion.div>
                </div>

                {/* Product Name */}
                <div className="bg-[#080949] text-white py-3 px-3 sm:py-3.5 sm:px-4 text-center group-hover:bg-[#2F3192] transition-colors duration-300 border-t border-slate-900 flex items-center justify-center min-h-[50px] sm:min-h-[50px]">
                  <div className="font-medium text-xs xs:text-sm sm:text-base tracking-wide text-white leading-tight">
                    {item?.name || "Product"}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <section className="max-w-4xl mx-auto px-4 py-12 text-gray-800 ">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Sweet Display Counter Manufacturer in Delhi - Royal Equipments
        </h1>

        <p className="text-[17px] md:text-[19px] leading-relaxed mb-6">
          <strong>Royal Equipments</strong> is a{" "}
          <Link
            href="/contact-us/"
            className="text-blue-600 hover:text-blue-950 font-semibold transition-colors"
          >
            sweet display counter manufacturer in Delhi
          </Link>
          . Since 2001, we have made display counters for sweet shops, bakeries,
          restaurants and hotels. Our office is near Dwarka Mor Metro Station,
          New Delhi. We design, build, deliver and install every counter
          ourselves.
        </p>

        <p className="text-[17px] md:text-[19px] leading-relaxed mb-8">
          A good sweet counter does two jobs. It keeps your sweets fresh and
          safe from dust and flies. It also makes them look good, so customers
          buy more. We build counters that do both, in the size and style your
          shop needs.
        </p>

        {/* Types */}
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          Types of Sweet Display Counters We Make
        </h2>
        <p className="text-[17px] md:text-[19px] leading-relaxed mb-4">
          Every sweet shop sells different items. As a{" "}
          <strong>sweet display counter manufacturer</strong>, we make a counter
          for each need.
        </p>
        <ul className="list-disc pl-6 text-[17px] md:text-[19px] leading-relaxed space-y-2 mb-8">
          {counterTypes.map((type) => (
            <li key={type.name}>
              <strong>{type.name}:</strong> {type.text}
            </li>
          ))}
        </ul>

        {/* Sizes and Options */}
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          Sizes and Options
        </h2>
        <p className="text-[17px] md:text-[19px] leading-relaxed mb-4">
          Common lengths are 4, 5 and 6 feet. We can also join sections for a
          longer counter or make a custom size that fits your shop exactly.
        </p>
        <div className="overflow-x-auto mb-8 rounded-lg border border-gray-200">
          <table className="w-full text-left text-[16px] md:text-[18px]">
            <thead className="bg-[#080949] text-white">
              <tr>
                <th className="px-4 py-3 font-semibold">Option</th>
                <th className="px-4 py-3 font-semibold">Choices</th>
              </tr>
            </thead>
            <tbody>
              {sizeOptions.map((row) => (
                <tr
                  key={row.option}
                  className="border-t border-gray-200 even:bg-gray-50"
                >
                  <td className="px-4 py-3 font-semibold text-gray-900">
                    {row.option}
                  </td>
                  <td className="px-4 py-3">{row.choices}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* How to Choose */}
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          How to Choose the Right Sweet Counter
        </h2>
        <p className="text-[17px] md:text-[19px] leading-relaxed mb-4">
          Ask yourself these five questions before you buy:
        </p>
        <ol className="list-decimal pl-6 text-[17px] md:text-[19px] leading-relaxed space-y-2 mb-8">
          {chooseQuestions.map((item) => (
            <li key={item.q}>
              <strong>{item.q}</strong> {item.a}
            </li>
          ))}
        </ol>

        {/* Why Choose Royal Equipments */}
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          Why Choose Royal Equipments
        </h2>
        <ul className="list-disc pl-6 text-[17px] md:text-[19px] leading-relaxed space-y-2 mb-8">
          {whyChoose.map((item) => (
            <li key={item.title}>
              <strong>{item.title}:</strong> {item.text}
            </li>
          ))}
        </ul>

        {/* How We Work */}
        <h2 className="text-2xl font-bold mb-4 text-gray-900">How We Work</h2>
        <ol className="list-decimal pl-6 text-[17px] md:text-[19px] leading-relaxed space-y-2 mb-8">
          {workSteps.map((step) => (
            <li key={step.title}>
              <strong>{step.title}:</strong> {step.text}
            </li>
          ))}
        </ol>

        {/* Areas We Serve */}
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          Areas We Serve
        </h2>
        <p className="text-[17px] md:text-[19px] leading-relaxed mb-8">
          As a <strong>Sweet Display Counter Manufacturer in Delhi</strong>, we
          supply counters across Delhi NCR, including Dwarka, Rohini, Karol
          Bagh, Lajpat Nagar, Saket and Connaught Place. Call us to check
          delivery to your area.
        </p>

        {/* Get a Free Quote */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Get a Free Quote
          </h2>
          <p className="text-[17px] md:text-[19px] leading-relaxed mb-5">
            Looking for a trusted sweet display counter manufacturer? Call
            Royal Equipments at{" "}
            <a
              href="tel:+919310010882"
              className="text-blue-600 hover:text-blue-950 font-semibold transition-colors"
            >
              +91 9310010882
            </a>
            , or send us your shop size and sweet list on{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-950 font-semibold transition-colors"
            >
              WhatsApp
            </a>
            . We will suggest the right counter and share a quote.
          </p>
          <Link
            href="/contact-us/"
            className="inline-block bg-[#2F3192] hover:bg-[#080949] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get a Quote
          </Link>
        </div>

        {/* FAQ Section */}
        <h2 className="text-2xl font-bold mb-6 text-gray-900">FAQs</h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={faq.q}>
              <h3 className="text-xl font-semibold mb-2 text-gray-950">
                {index + 1}. {faq.q}
              </h3>
              <p className="text-[17px] md:text-[19px] leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
