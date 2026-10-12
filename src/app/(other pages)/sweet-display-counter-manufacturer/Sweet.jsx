"use client";
import ProductBreadcrumb from "@/components/ProductBreadcrumb";
import React from "react";
import { cakePastryDisplayCounters } from "@/data/data";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Sweet() {
  return (
    <div className="bg-white">
      <div className="bg-white pb-4 md:pb-10">
        <ProductBreadcrumb currentProduct={"Sweet Display Counters"} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 my-6">
          {cakePastryDisplayCounters.map((item, idx) => (
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
          Sweet Display Counter Manufacturer in Delhi
        </h1>

        {/* Paragraph 1 */}
        <p className="text-[17px] md:text-[19px] leading-relaxed mb-6">
          A <strong>Sweet Display Counter</strong> is an essential piece of
          equipment for sweet shops, bakeries, confectionery stores, and dessert
          outlets. It helps businesses display a wide variety of sweets in an
          attractive, organized, and hygienic way. A well-designed display
          counter not only improves the presentation of sweets but also helps
          maintain their freshness for longer periods.
        </p>

        {/* Paragraph 2 with Link */}
        <p className="text-[17px] md:text-[19px] leading-relaxed mb-6">
          If you are searching for a reliable{" "}
          <Link
            href="https://www.royalequipments.in/contact-us/"
            className="text-blue-600 hover:text-blue-950 font-semibold transition-colors"
          >
            Sweet Display Counter Manufacturer
          </Link>
          , it is important to choose a company that focuses on quality,
          durability, and modern design. A high-quality display counter enhances
          the look of your shop and attracts customers by showcasing sweets in
          the best possible way.
        </p>

        {/* Paragraph 3 */}
        <p className="text-[17px] md:text-[19px] leading-relaxed mb-8">
          Royal Equipments is a trusted{" "}
          <strong>Sweet Display Counter Manufacturer in Delhi</strong>, known
          for providing high-quality counters designed for sweet shops and
          bakery businesses. The company manufactures durable and stylish
          display counters that help businesses present their products
          professionally while maintaining proper hygiene and storage
          conditions.
        </p>

        {/* Subheading: Why Sweet Display Counters Are Important */}
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          Why Sweet Display Counters Are Important for Sweet Shops
        </h2>
        <p className="text-[17px] md:text-[19px] leading-relaxed mb-6">
          In the food industry, presentation plays a major role in influencing
          customer choices. When sweets are displayed neatly in a glass display
          counter with proper lighting, they look more attractive and tempting
          to customers.
        </p>
        <p className="text-[17px] md:text-[19px] leading-relaxed mb-8">
          A sweet display counter also protects sweets from dust, insects, and
          contamination. Many modern counters are equipped with refrigeration
          systems that maintain the ideal temperature for storing sweets safely.
          This helps shop owners keep their products fresh and maintain quality
          throughout the day.
        </p>

        {/* Subheading: Features */}
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          Features of High-Quality Sweet Display Counters
        </h2>
        <p className="text-[17px] md:text-[19px] leading-relaxed mb-6">
          A professional <strong>Sweet Display Counter Manufacturer</strong>{" "}
          focuses on designing counters with features that make them suitable
          for commercial use.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-gray-950">
          Strong and Durable Build
        </h3>
        <p className="text-[17px] md:text-[19px] leading-relaxed mb-6">
          Sweet display counters are usually made with stainless steel and
          toughened glass. This ensures durability, corrosion resistance, and
          easy cleaning.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-gray-950">
          Efficient Cooling System
        </h3>
        <p className="text-[17px] md:text-[19px] leading-relaxed mb-6">
          Refrigerated sweet display counters maintain the right temperature,
          which helps preserve the taste and freshness of sweets.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-gray-950">
          Attractive Design
        </h3>
        <p className="text-[17px] md:text-[19px] leading-relaxed mb-6">
          Modern display counters come with stylish designs that improve the
          overall appearance of sweet shops and bakeries.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-gray-950">
          LED Lighting
        </h3>
        <p className="text-[17px] md:text-[19px] leading-relaxed mb-6">
          Bright LED lights enhance the visibility of sweets and make them look
          more appealing to customers.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-gray-950">
          Multiple Storage Shelves
        </h3>
        <p className="text-[17px] md:text-[19px] leading-relaxed mb-8">
          These counters provide multiple levels of storage so shop owners can
          display different varieties of sweets in an organized manner.
        </p>

        {/* Applications */}
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          Applications of Sweet Display Counters
        </h2>
        <p className="text-[17px] md:text-[19px] leading-relaxed mb-4">
          Sweet display counters are widely used in many food businesses,
          including:
        </p>
        <ul className="list-disc pl-6 text-[17px] md:text-[19px] space-y-2 mb-6">
          <li>Sweet Shops</li>
          <li>Bakeries</li>
          <li>Confectionery Stores</li>
          <li>Restaurants</li>
          <li>Cafeterias</li>
          <li>Supermarkets</li>
        </ul>
        <p className="text-[17px] md:text-[19px] leading-relaxed mb-8">
          They help maintain hygiene, improve product visibility, and create a
          professional environment that encourages customers to make purchases.
        </p>

        {/* Why Choose Royal Equipments */}
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          Why Choose Royal Equipments?
        </h2>
        <p className="text-[17px] md:text-[19px] leading-relaxed mb-6">
          <Link
            href="https://www.royalequipments.in/contact-us/"
            className="text-blue-600 hover:text-blue-950 font-semibold transition-colors"
          >
            Choosing the right Sweet Display Counter Manufacturer in Delhi
          </Link>{" "}
          is important for ensuring long-lasting performance and reliability.
          Royal Equipments manufactures high-quality display counters using
          advanced technology and premium materials.
        </p>
        <p className="text-[17px] md:text-[19px] leading-relaxed mb-6">
          Their counters are designed to meet the needs of modern sweet shops by
          providing strong construction, efficient cooling systems, and
          attractive designs. The company also offers customization options so
          businesses can choose the size and design that best suits their shop
          layout.
        </p>
        <p className="text-[17px] md:text-[19px] leading-relaxed mb-8">
          With a focus on quality, durability, and customer satisfaction, Royal
          Equipments has become a trusted choice for businesses looking for
          reliable sweet display counters. Investing in a high-quality sweet
          display counter helps improve product presentation, maintain hygiene,
          and attract more customers to your shop.
        </p>

        {/* FAQ Section */}
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-950">
              1. What is a sweet display counter used for?
            </h3>
            <p className="text-[17px] md:text-[19px] leading-relaxed">
              A sweet display counter is used in sweet shops and bakeries to
              display and store sweets hygienically while keeping them fresh and
              attractive for customers.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-950">
              2. What are the benefits of using a refrigerated sweet display
              counter?
            </h3>
            <p className="text-[17px] md:text-[19px] leading-relaxed">
              A refrigerated counter helps maintain proper temperature, which
              keeps sweets fresh for a longer time and prevents spoilage.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-950">
              3. What materials are used in sweet display counters?
            </h3>
            <p className="text-[17px] md:text-[19px] leading-relaxed">
              Most sweet display counters are made using stainless steel bodies
              with toughened glass panels for durability, hygiene, and clear
              visibility.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-950">
              4. How do I choose the best sweet display counter for my shop?
            </h3>
            <p className="text-[17px] md:text-[19px] leading-relaxed">
              You should consider factors like size, storage capacity, cooling
              system, energy efficiency, and design before choosing a display
              counter.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-950">
              5. Who is a reliable Sweet Display Counter Manufacturer in Delhi?
            </h3>
            <p className="text-[17px] md:text-[19px] leading-relaxed">
              Royal Equipments is known for manufacturing high-quality sweet
              display counters designed for durability, attractive display, and
              efficient cooling.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
