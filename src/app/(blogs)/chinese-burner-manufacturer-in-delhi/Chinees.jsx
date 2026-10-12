import { UserRound } from "lucide-react";
import Link from "next/link";

export default function ChineseBurnerPage() {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-[#171717] text-[17px] lg:text-[19px] leading-relaxed bg-white">
        {/* Title */}
        <header className="relative overflow-hidden rounded-2xl border border-[#2F3192]/15 bg-gradient-to-br from-[#2F3192]/[0.08] via-white to-white p-5 sm:p-8 lg:p-10 mb-8 shadow-sm">
          <div className="absolute top-0 left-0 h-full w-1.5 bg-[#2F3192]" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#2F3192]/10 px-3 py-1 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#2F3192] mb-4">
              Commercial Kitchen Equipment
            </span>

            <h1 className="text-3xl sm:text-4xl  font-bold text-[#2F3192] leading-tight tracking-tight mb-6">
              Chinese Burner Manufacturer in Delhi – High Quality Commercial
              Burners | Royal Equipments
            </h1>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-600 font-medium uppercase tracking-wider">
              <Link
                href="/"
                className="flex items-center gap-2 text-[#2F3192] font-bold no-underline hover:text-[#232570] transition-colors"
              >
                <span className="w-8 h-8 rounded-full bg-[#2F3192] text-white flex items-center justify-center shadow-md">
                  <UserRound className="w-4 h-4" />
                </span>
                ROYAL EQUIPMENTS
              </Link>

              <span className="text-[#2F3192]/50">•</span>

              <time dateTime="2026-09-26">May 16, 2026</time>

              <span className="text-[#2F3192]/50">•</span>

              <Link
                href="/category/blog?type=blog"
                className="bg-[#2F3192] text-white px-4 py-1.5 rounded-full text-xs font-bold no-underline hover:bg-[#232570] transition-colors"
              >
                BLOG
              </Link>
            </div>
          </div>
        </header>

        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2F3192] mt-8 mb-4 pb-3 border-b-2 border-[#2F3192]/15">
            Introduction
          </h2>

          <p className="mb-8 text-slate-700">
            Chinese burners are widely used in commercial kitchens for fast and
            efficient cooking. If you are searching for a reliable{" "}
            <Link
              href="/our-products"
              className="text-blue-600 font-bold no-underline hover:text-[#232570] transition-colors"
            >
              Chinese Burner Manufacturer in Delhi
            </Link>
            , Royal Equipments offers high-quality commercial burners designed
            for restaurants, hotels, and food businesses. Our burners are
            manufactured from durable materials and engineered with modern
            technology to deliver high flame output, long life, and reliable
            performance in busy kitchen environments.
          </p>
        </section>

        {/* What is a Chinese Burner? */}
        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2F3192] mt-8 mb-4 pb-3 border-b-2 border-[#2F3192]/15">
            What is a Chinese Burner?
          </h2>

          <div className="rounded-xl border border-[#2F3192]/10 bg-[#2F3192]/[0.035] p-5 sm:p-6">
            <p className="text-slate-700">
              A Chinese burner is a{" "}
              <strong className="text-[#2F3192]">
                high-flame commercial gas burner
              </strong>{" "}
              mainly used in restaurants, hotels, and food stalls for wok
              cooking. It produces intense heat, allowing chefs to cook food
              quickly and efficiently. Because of its strong flame and durable
              design, it is considered an essential piece of equipment in
              professional commercial kitchens.
            </p>
          </div>
        </section>

        {/* Key Features of Chinese Burners */}
        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2F3192] mt-8 mb-6 pb-3 border-b-2 border-[#2F3192]/15">
            Key Features of Chinese Burners
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              "Heavy-duty stainless steel body",
              "High flame output for fast cooking",
              "Gas-efficient burner design",
              "Easy cleaning and maintenance",
              "Durable construction for long-term use",
            ].map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 rounded-xl border border-[#2F3192]/10 bg-white p-4 shadow-sm transition-all duration-300 hover:border-[#2F3192]/40 hover:shadow-md"
              >
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2F3192] text-sm font-bold text-white">
                  ✓
                </span>
                <span className="text-slate-700">{feature}</span>
              </li>
            ))}
          </ul>

          <p className="mb-8 text-slate-700">
            These features make Chinese burners ideal for continuous use in
            restaurants and other commercial food preparation environments.
          </p>
        </section>

        {/* Where Chinese Burners Are Used */}
        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2F3192] mt-8 mb-4 pb-3 border-b-2 border-[#2F3192]/15">
            Where Chinese Burners Are Used
          </h2>

          <p className="mb-4 text-slate-700">
            Chinese burners are commonly used in different food businesses, such
            as:
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              "Restaurants",
              "Hotels",
              "Street food stalls",
              "Commercial kitchens",
              "Catering services",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-lg bg-[#2F3192]/[0.045] px-4 py-3 text-slate-700 transition-colors hover:bg-[#2F3192]/10"
              >
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#2F3192]" />
                {item}
              </li>
            ))}
          </ul>

          <p className="mb-8 text-slate-700">
            They are perfect for dishes that require high heat and quick
            cooking.
          </p>
        </section>

        {/* Advantages of Using Chinese Burners */}
        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2F3192] mt-8 mb-6 pb-3 border-b-2 border-[#2F3192]/15">
            Advantages of Using Chinese Burners
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              "Faster cooking process",
              "High flame efficiency",
              "Strong and durable design",
              "Low maintenance requirements",
              "Suitable for heavy commercial use",
            ].map((advantage) => (
              <li
                key={advantage}
                className="flex items-start gap-3 rounded-xl border border-[#2F3192]/10 p-4 transition-all duration-300 hover:border-[#2F3192]/40 hover:bg-[#2F3192]/[0.035]"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#2F3192] text-white font-bold">
                  ✓
                </span>
                <span className="text-slate-700">{advantage}</span>
              </li>
            ))}
          </ul>

          <p className="mb-8 text-slate-700">
            These benefits help chefs and food businesses maintain speed,
            efficiency, and consistent cooking quality.
          </p>
        </section>

        {/* Why Choose Royal Equipments */}
        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2F3192] mt-8 mb-4 pb-3 border-b-2 border-[#2F3192]/15">
            Why Choose Royal Equipments
          </h2>

          <p className="mb-6 text-slate-700">
            <Link
              href="/"
              className="text-blue-600 font-bold no-underline hover:text-[#232570] transition-colors"
            >
              Royal Equipments
            </Link>{" "}
            is a trusted Chinese Burner Manufacturer in Delhi known for
            delivering high-quality commercial kitchen equipment. Our products
            are designed to meet the demands of modern restaurants and food
            businesses.
          </p>

          <div className="rounded-2xl border border-[#2F3192]/15 bg-gradient-to-br from-[#2F3192]/[0.07] to-white p-5 sm:p-7 mb-6">
            <p className="mb-5 font-bold text-xl text-[#2F3192]">
              Reasons to choose us:
            </p>

            <ul className="space-y-4">
              {[
                "More than 10 years of manufacturing experience",
                "High-quality commercial kitchen equipment",
                "Durable and performance-focused products",
                "Competitive and affordable pricing",
                "Trusted by restaurants and food businesses",
              ].map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2F3192] text-white text-sm font-bold">
                    ✓
                  </span>
                  <span className="text-slate-700">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mb-6 text-slate-700">
            Our goal is to provide reliable kitchen equipment that improves
            efficiency and long-term performance.
          </p>

          <p className="mb-8 text-slate-700">
            If you are looking for a reliable Chinese Burner Manufacturer in
            Delhi, Royal Equipments offers durable and high-performance burners
            designed for professional kitchens. Contact us today to get the best
            quality burners at competitive prices.
          </p>
        </section>

        {/* Frequently Asked Questions */}
        <section className="mt-12">
          <div className="mb-6">
            <span className="text-sm font-bold uppercase tracking-widest text-[#2F3192]">
              FAQs
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#2F3192] mt-2">
              Frequently Asked Questions
            </h2>

            <div className="mt-4 h-1 w-20 rounded-full bg-[#2F3192]" />
          </div>

          <div className="space-y-4 mb-8">
            <div className="rounded-xl border border-[#2F3192]/15 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:border-[#2F3192]/40 hover:shadow-md">
              <h3 className="font-bold text-lg lg:text-xl text-[#2F3192] mb-2">
                Q1. What is a Chinese burner?
              </h3>
              <p className="text-slate-700">
                A Chinese burner is a high-flame commercial gas burner used
                mainly for wok cooking in restaurants and commercial kitchens.
              </p>
            </div>

            <div className="rounded-xl border border-[#2F3192]/15 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:border-[#2F3192]/40 hover:shadow-md">
              <h3 className="font-bold text-lg lg:text-xl text-[#2F3192] mb-2">
                Q2. Where are Chinese burners commonly used?
              </h3>
              <p className="text-slate-700">
                Chinese burners are commonly used in hotels, restaurants, street
                food stalls, and catering kitchens.
              </p>
            </div>

            <div className="rounded-xl border border-[#2F3192]/15 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:border-[#2F3192]/40 hover:shadow-md">
              <h3 className="font-bold text-lg lg:text-xl text-[#2F3192] mb-2">
                Q3. What is the price of a Chinese burner?
              </h3>
              <p className="text-slate-700">
                The price of a Chinese burner depends on the size, material
                quality, and manufacturing specifications.
              </p>
            </div>

            <div className="rounded-xl border border-[#2F3192]/15 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:border-[#2F3192]/40 hover:shadow-md">
              <h3 className="font-bold text-lg lg:text-xl text-[#2F3192] mb-2">
                Q4. What are the main advantages of a Chinese burner?
              </h3>
              <p className="text-slate-700">
                The main advantages include high flame output, faster cooking
                speed, strong durability, and suitability for commercial kitchen
                operations.
              </p>
            </div>

            <div className="rounded-xl border border-[#2F3192]/15 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:border-[#2F3192]/40 hover:shadow-md">
              <h3 className="font-bold text-lg lg:text-xl text-[#2F3192] mb-2">
                Q5. Who is the best Chinese burner manufacturer in Delhi?
              </h3>
              <p className="text-slate-700">
                Royal Equipments is known for providing high-quality Chinese
                burners designed for restaurants, hotels, and commercial
                kitchens.
              </p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
