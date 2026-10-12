'use client'
import { equipments } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ProductBreadcrumb from "@/components/ProductBreadcrumb";

export default function ProductsNoida() {
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
      <section className="max-w-6xl mx-auto px-4 py-8 text-gray-800 space-y-6">
        {/* Main Title */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
          Hotel Kitchen Equipments Manufacturer & Supplier in Noida
        </h1>

        {/* Intro Paragraph */}
        <p className="text-[17px] md:text-[19px] text-gray-700 leading-relaxed">
          At{" "}
          <Link href="/contact-us" className="text-[#0077b6]  font-semibold">
            Royal Equipments
          </Link>
          , we are a leading Hotel Kitchen Equipments Manufacturer in Noida,
          providing an extensive variety of superior commercial kitchen
          solutions. Our products are made for the needs of catering businesses,
          hotels, and restaurants while providing efficiency, reliability, and
          superior performance.
        </p>

        {/* Subheading 1 */}
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 pt-2">
          Premium Hotel Kitchen Equipment
        </h2>

        <p className="text-[17px] md:text-[19px] text-gray-700">
          As a trusted Hotel Kitchen Equipments Supplier in Noida, we provide a
          diverse selection of kitchen essentials, including:
        </p>

        {/* Bullet Points */}
        <ul className="list-disc pl-5 space-y-2 text-gray-700 text-[17px] md:text-[19px]">
          <li>
            <strong className="text-gray-900">
              Commercial Cooking Equipment
            </strong>{" "}
            – High-performance stoves, ovens, and grills.
          </li>
          <li>
            <strong className="text-gray-900">Refrigeration Solutions</strong> –
            Industrial refrigerators and freezers for optimal food storage.
          </li>
          <li>
            <strong className="text-gray-900">Food Preparation Tools</strong> –
            Mixers, slicers, and blenders for seamless kitchen operations.
          </li>
          <li>
            <strong className="text-gray-900">Dishwashing Units</strong> –
            Advanced dishwashers for hygiene and efficiency.
          </li>
          <li>
            <strong className="text-gray-900">Storage & Shelving</strong> –
            Sturdy and space-saving storage solutions.
          </li>
        </ul>

        {/* Subheading 2 */}
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 pt-2">
          Why Choose Royal Equipments?
        </h2>

        {/* Description Paragraphs */}
        <p className="text-[17px] md:text-[19px] text-gray-700 leading-relaxed">
          With years of experience and a{" "}
          <strong className="text-gray-900">
            Hotel Kitchen Equipments Manufacturer in Noida
          </strong>
          , We place a high value on quality, creativity, and longevity. Our
          products guarantee a perfect cooking experience for experienced chefs
          and kitchen staff while also increasing kitchen efficiency.
        </p>

        <p className="text-[17px] md:text-[19px] text-gray-700 leading-relaxed">
          Check our large collection at Royal Equipments and upgrade your
          commercial kitchen with top-tier solutions!
        </p>
      </section>
    </div>
  );
}
