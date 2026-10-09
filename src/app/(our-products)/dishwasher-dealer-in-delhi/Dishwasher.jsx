"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ProductBreadcrumb from "@/components/ProductBreadcrumb";
import ImageGrid from "@/components/ImageGrid";
import { dishwasherDealerDelhi } from "@/data/data";

// Framer Motion Animation Variants
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

export default function DishwasherPage() {
  const whoUsesList = [
    "Restaurants, cafés, and QSR chains",
    "Hotels and banquet halls",
    "Cloud kitchens and catering units",
    "Hospitals and institutional kitchens",
    "Food courts and industrial canteens",
  ];

  const whyTrustList = [
    "Heavy-duty commercial dishwashers built for real Indian kitchen loads",
    "Complete washing-area setup under one roof",
    "304-grade stainless steel — food-safe and durable",
    "Custom sizes and layouts for any kitchen footprint",
    "Honest pricing with dependable after-sales support",
    "Installation guidance and service across Delhi NCR",
  ];

  const faqs = [
    {
      q: "What does a commercial dishwasher dealer in Delhi do?",
      a: "A commercial dishwasher dealer in Delhi supplies, installs, and services dishwashing equipment for restaurants, hotels, and institutional kitchens. Royal Equipments goes a step further by also providing complete stainless steel washing-area setups — including landing tables, pot sinks, three-sink units, and pot racks — so your entire dishwashing workflow comes from a single supplier.",
    },
    {
      q: "How much does a commercial dishwasher cost in Delhi?",
      a: "Commercial dishwasher prices in Delhi typically range from around ₹80,000 for compact under-counter models to over ₹5 lakh for hood-type and conveyor systems. The final cost depends on capacity, cycle speed, brand, and add-ons like rinse boosters or detergent dispensers. Contact Royal Equipments for a quote based on your kitchen's actual load.",
    },
    {
      q: "Which dishwasher is best for a restaurant kitchen?",
      a: "For most Indian restaurants, a hood-type (pass-through) commercial dishwasher is the best choice. It handles 60–80 racks per hour, fits standard kitchen layouts, and works well for plates, glasses, and lighter utensils. Heavy pots and kadais should be washed separately in a dedicated pot wash sink.",
    },
    {
      q: "What stainless steel accessories are needed with a commercial dishwasher?",
      a: "A complete commercial dishwashing setup needs a dirty dish landing table, a pot wash sink for heavy utensils, SS grating for drainage, and a pot rack for clean storage. Larger kitchens also use a three-sink unit for wash–rinse–sanitize compliance. Royal Equipments supplies all of these together as a single package.",
    },
    {
      q: "Does Royal Equipments provide installation and service support in Delhi?",
      a: "Yes. Royal Equipments provides installation guidance, on-site setup support, and after-sales service across Delhi NCR. Our team helps with placement, plumbing connections, electrical requirements, and basic operator training so your dishwasher performs correctly from day one.",
    },
    {
      q: "Can I get a customized dishwashing area for my kitchen?",
      a: "Yes. Royal Equipments designs customized dishwashing layouts based on your kitchen size, utensil volume, and staff workflow. We fabricate stainless steel tables, sinks, and storage units in custom dimensions so everything fits your space exactly — no awkward gaps or wasted area.",
    },
    {
      q: "Are Royal Equipments' stainless steel products food-safe?",
      a: "Yes. All Royal Equipments stainless steel products are made from food-grade SS (typically 304 grade), which is rust-resistant, non-reactive with food, and easy to sanitize. This makes them completely safe for direct contact with utensils, cooked food, and the washing chemicals used in commercial kitchens.",
    },
    {
      q: "Are these dishwashers suitable for Indian commercial kitchens?",
      a: "Yes, absolutely. Royal Equipments supplies dishwashers specifically chosen for Indian kitchen conditions — high oil content, masala residue, and heavy daily utensil loads. The machines come with strong wash cycles, durable pumps, and the option to pair with pre-rinse units to handle Indian cooking the right way.",
    },
  ];

  return (
    <div className="bg-white pb-4 md:pb-10">
      {/* Breadcrumb Header */}
      <ProductBreadcrumb currentProduct={"Dishwasher & Washing Equipments"} />

      {/* Image Grid Component */}
      <ImageGrid data={dishwasherDealerDelhi} />

      {/* Content Section Placed Directly After ImageGrid */}
      <section className="max-w-5xl mx-auto px-4 py-8 text-[17px] lg:text-[18px] text-gray-800 leading-relaxed font-sans">
        {/* Main Header & Intro */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Dishwasher Dealer in Delhi – Royal Equipments
          </h1>
          <p className="mb-4">
            Running a commercial kitchen? You already know the truth: clean
            utensils on time = happy customers, smooth service, and zero hygiene
            complaints. That’s where a reliable{" "}
            <Link
              href="/contact-us"
              className="text-blue-600 font-bold no:underline"
            >
              dishwasher dealer in Delhi
            </Link>{" "}
            makes all the difference.
          </p>
          <p className="mb-6">
            At Royal Equipments, we don’t just sell commercial dishwashers — we
            design complete washing-area setups for{" "}
            <strong>
              restaurants, hotels, hospitals, cloud kitchens, and catering
              businesses across Delhi NCR
            </strong>
            . Faster cycles, lower water bills, and a workflow that actually
            makes sense.
          </p>
        </motion.div>

        {/* Why Royal Equipments */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-8 mb-4">
            Why Royal Equipments is a Trusted Dishwasher Dealer in Delhi
          </h2>
          <p className="mb-4">
            Commercial kitchens push equipment hard. Hundreds of plates, heavy
            pots, oily kadais, back-to-back service hours — your dishwasher
            needs to keep up without breaking down. We supply high-performance
            commercial dishwashers built for exactly this kind of pressure.
          </p>
          <p className="mb-6">
            Small café or 200-cover banquet kitchen — we’ll help you pick the
            right capacity, footprint, and cycle speed for your space and daily
            load.
          </p>
        </motion.div>

        {/* Complete Dishwashing Area Solutions */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-8 mb-4">
            Complete Dishwashing Area Solutions — Not Just the Machine
          </h2>
          <p className="mb-6">
            A dishwasher alone doesn’t solve your kitchen flow problem. The real
            magic happens when dirty{" "}
            <strong>
              dishes move smoothly from collection → washing → sanitizing →
              storage
            </strong>
            . That’s why we offer the full stainless steel ecosystem around the
            dishwasher.
          </p>

          <div className="space-y-4 mb-6">
            <p>
              <strong>Dirty Dish Landing Table</strong> — Where soiled utensils
              land before washing. Keeps your wash area organized and prevents
              pile-ups during peak hours.
            </p>
            <p>
              <strong>Pot Wash Sink</strong> — Built for the heavy stuff. Large
              kadais, biryani handis, tandoor accessories — items your
              dishwasher can’t take.
            </p>
            <p>
              <strong>Sink With Table</strong> — A two-in-one setup combining
              washing space and a working surface. Perfect for tight kitchen
              layouts.
            </p>
            <p>
              <strong>Three Sink Unit</strong> — The classic wash–rinse–sanitize
              system used in hotels and institutional kitchens. Meets hygiene
              standards every time.
            </p>
            <p>
              <strong>SS Grating (Stainless Steel Grating)</strong> — Proper
              drainage, non-slip surface, and easy cleaning. Essential for any
              wet kitchen zone.
            </p>
            <p>
              <strong>Pot Rack</strong> — Organized drying and storage for clean
              pots, pans, and large utensils.
            </p>
          </div>

          <p className="mb-8">
            Every product is built from food-grade stainless steel —
            rust-resistant, easy to wipe down, and made to handle years of daily
            kitchen use.
          </p>
        </motion.div>

        {/* Who Uses Our Dishwasher Solutions */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-10 mb-4">
            Who Uses Our Dishwasher Solutions?
          </h2>
          <p className="mb-4">
            You’ll find{" "}
            <Link href="/" className="text-blue-600 font-bold no:underline">
              Royal Equipments
            </Link>{" "}
            setups in:
          </p>

          <motion.ul
            className="list-disc pl-6 space-y-2 mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {whoUsesList.map((item, index) => (
              <motion.li key={index} variants={fadeInUp}>
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <p className="mb-8">
            Basically, anywhere utensil load is high and downtime isn’t an
            option.
          </p>
        </motion.div>

        {/* Customized Setup */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-10 mb-4">
            Customized Setup for Your Kitchen Layout
          </h2>
          <p className="mb-8">
            No two kitchens are the same. A cloud kitchen in Pitampura runs very
            differently from a banquet kitchen in South Delhi. We visit,
            measure, understand your workflow, and design a dishwashing area
            that fits your space — not a copy-paste solution.
          </p>
        </motion.div>

        {/* Why Kitchens Across Delhi Trust Royal Equipments */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-10 mb-4">
            Why Kitchens Across Delhi Trust Royal Equipments
          </h2>

          <motion.ul
            className="list-disc pl-6 space-y-2 mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {whyTrustList.map((item, index) => (
              <motion.li key={index} variants={fadeInUp}>
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <p className="font-bold text-gray-900 mb-10">
            We’ve worked with enough kitchens to know what actually performs in
            real service — not just what looks good in a brochure.
          </p>
        </motion.div>

        {/* Frequently Asked Questions */}
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
              <motion.div key={index} variants={fadeInUp} className="space-y-2">
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
  );
}
