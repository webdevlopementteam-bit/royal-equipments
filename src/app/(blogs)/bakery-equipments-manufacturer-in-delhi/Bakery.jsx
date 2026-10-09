import Image from "next/image";
import Link from "next/link";

export default function BakeryEquipmentBlog() {
  return (
    <div className="min-h-screen bg-white px-4 py-8 font-sans text-gray-800 sm:px-6 sm:py-12 lg:px-8">
      <article className="mx-auto max-w-5xl text-[17px] leading-relaxed lg:text-[19px]">
        {/* Header Section */}
        <header className="mb-10 overflow-hidden rounded-2xl border border-[#2F3192]/10 bg-gradient-to-br from-blue-50 via-white to-indigo-50 shadow-sm">
          <div className="h-2 bg-[#2F3192]" />

          <div className="space-y-5 p-5 sm:p-8 lg:p-10">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2F3192] sm:text-sm">
              <span className="rounded-full bg-[#2F3192]/10 px-3 py-1.5">
                Bakery Equipment Guide
              </span>
              <span className="text-[#2F3192]/50">•</span>
              <time dateTime="2026-09-26">May 21, 2026</time>
            </div>

            <h1 className="text-3xl font-bold leading-tight tracking-tight text-[#2F3192] sm:text-4xl ">
              How to Choose the Right Bakery Equipments Manufacturer in 2026: A
              Complete Guide
            </h1>

            <div className="flex flex-wrap items-center gap-3 border-t border-[#2F3192]/10 pt-5 text-xs font-medium uppercase tracking-wider text-slate-500 sm:text-sm">
              <Link
                href="/"
                className="flex items-center gap-2 font-semibold text-[#2F3192] no-underline transition-colors hover:text-indigo-900"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2F3192] text-xs font-bold text-white shadow-sm sm:h-9 sm:w-9">
                  RE
                </span>
                ROYAL EQUIPMENTS
              </Link>

              <span className="text-[#2F3192]/40">•</span>

              <Link
                href="/category/blog?type=blog"
                className="rounded-full border border-[#2F3192]/15 bg-white px-4 py-1.5 text-[#2F3192] no-underline transition-colors hover:bg-[#2F3192] hover:text-white"
              >
                Blog
              </Link>
            </div>
          </div>
        </header>

        {/* Intro Paragraphs */}
        <div className="space-y-6">
          <p>
            Starting or upgrading a bakery is exciting, but one mistake can cost
            lakhs — choosing the wrong{" "}
            <Link
              href="/contact-us"
              className="font-semibold text-[#2F3192] no-underline transition-colors hover:text-indigo-900"
            >
              bakery equipments manufacturer in Delhi
            </Link>
            . The right machines decide your product quality, daily output, and
            even your electricity bill.
          </p>

          <p>
            In 2026, the bakery industry in India is growing fast. New cloud
            kitchens, cafes, and home bakers are entering the market every day.
            But many of them struggle because they pick low-quality ovens or
            mixers that break down within months.
          </p>

          <p>
            This guide will help you understand what to look for in a bakery
            equipment maker, which machines you actually need, and how to avoid
            common buying mistakes. We will also share insights from{" "}
            <strong>Royal Equipments</strong>, a New Delhi-based manufacturer
            with 25 years of experience in this field.
          </p>
        </div>

        {/* Image 1 */}
        <div className="my-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="group overflow-hidden rounded-2xl border border-[#2F3192]/10 bg-white p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <Image
              src="/blog/bakery-equipments-manufacturer-in-delhi/p1.png"
              alt="Bakery Equipment Ovens"
              width={700}
              height={400}
              sizes="(max-width: 640px) 100vw, 50vw"
              className="h-auto w-full rounded-xl object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>

          <div className="group overflow-hidden rounded-2xl border border-[#2F3192]/10 bg-white p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <Image
              src="/blog/bakery-equipments-manufacturer-in-delhi/p2.png"
              alt="Bakery Equipment Ovens"
              width={700}
              height={400}
              sizes="(max-width: 640px) 100vw, 50vw"
              className="h-auto w-full rounded-xl object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Section: What Does a Bakery Equipments Manufacturer Actually Do? */}
        <section className="mt-12 space-y-6">
          <h2 className="border-l-4 border-[#2F3192] pl-4 pt-1 text-2xl font-bold leading-tight text-[#2F3192] sm:text-3xl">
            What Does a Bakery Equipments Manufacturer in Delhi Actually Do?
          </h2>

          <p>
            A bakery equipment manufacturer designs and builds machines used in
            commercial baking. These include ovens, mixers, proofers, sheeters,
            and slicers.
          </p>

          <p>A good manufacturer does three things well:</p>

          <ol className="space-y-3">
            <li className="flex items-start gap-3 rounded-xl border border-[#2F3192]/10 bg-blue-50/50 p-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#2F3192] text-sm font-bold text-white">
                1
              </span>
              <div>
                <strong className="text-[#2F3192]">
                  Builds machines that last
                </strong>{" "}
                — using strong materials like stainless steel
              </div>
            </li>

            <li className="flex items-start gap-3 rounded-xl border border-[#2F3192]/10 bg-blue-50/50 p-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#2F3192] text-sm font-bold text-white">
                2
              </span>
              <div>
                <strong className="text-[#2F3192]">
                  Offers after-sales service
                </strong>{" "}
                — quick repairs, spare parts, and training
              </div>
            </li>

            <li className="flex items-start gap-3 rounded-xl border border-[#2F3192]/10 bg-blue-50/50 p-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#2F3192] text-sm font-bold text-white">
                3
              </span>
              <div>
                <strong className="text-[#2F3192]">Understands baking</strong> —
                not just engineering, but how bakers actually work
              </div>
            </li>
          </ol>

          <p>
            Without all three, even the cheapest machine becomes expensive in
            the long run.
          </p>
        </section>

        {/* Section: 7 Things to Check Before Buying Bakery Equipment */}
        <section className="mt-12 space-y-6">
          <h2 className="border-l-4 border-[#2F3192] pl-4 pt-1 text-2xl font-bold leading-tight text-[#2F3192] sm:text-3xl">
            7 Things to Check Before Buying Bakery Equipment
          </h2>

          <p>Before you place an order, check these points carefully:</p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-[#2F3192]/10 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="mb-2 font-bold text-[#2F3192]">
                1. Build Quality and Material
              </h3>
              <p>
                Always check the steel grade.{" "}
                <strong>SS 304 stainless steel</strong> is food-safe and
                rust-proof. Cheaper machines use lower grades that rust within a
                year.
              </p>
            </div>

            <div className="rounded-xl border border-[#2F3192]/10 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="mb-2 font-bold text-[#2F3192]">
                2. Heating System
              </h3>
              <p>
                For ovens, even heat is everything. Ask about heating elements,
                insulation, and temperature control accuracy.
              </p>
            </div>

            <div className="rounded-xl border border-[#2F3192]/10 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="mb-2 font-bold text-[#2F3192]">
                3. Energy Efficiency
              </h3>
              <p>
                Bakery machines run for 10–14 hours a day. A machine that saves
                even 10% power can save you ₹50,000+ every year.
              </p>
            </div>

            <div className="rounded-xl border border-[#2F3192]/10 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="mb-2 font-bold text-[#2F3192]">
                4. Capacity vs Space
              </h3>
              <p>
                Don’t buy a machine bigger than your bakery needs. Match the
                capacity to your daily production.
              </p>
            </div>

            <div className="rounded-xl border border-[#2F3192]/10 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="mb-2 font-bold text-[#2F3192]">
                5. Warranty and Service
              </h3>
              <p>
                A real manufacturer gives you a written warranty and has service
                engineers nearby.
              </p>
            </div>

            <div className="rounded-xl border border-[#2F3192]/10 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="mb-2 font-bold text-[#2F3192]">
                6. Spare Parts Availability
              </h3>
              <p>
                Imported machines often have parts that take weeks to arrive.
                Indian-made machines from trusted brands are easier to maintain.
              </p>
            </div>

            <div className="rounded-xl border border-[#2F3192]/10 bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:col-span-2">
              <h3 className="mb-2 font-bold text-[#2F3192]">
                7. Customization Options
              </h3>
              <p>
                Every bakery is different. The right manufacturer should adjust
                size, voltage, and features to your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Section: The Difference Most Buyers Notice Too Late */}
        <section className="mt-12 space-y-6">
          <h2 className="border-l-4 border-[#2F3192] pl-4 pt-1 text-2xl font-bold leading-tight text-[#2F3192] sm:text-3xl">
            The Difference Most Buyers Notice Too Late
          </h2>

          <p>
            One of the biggest mistakes first-time bakery owners make is
            assuming that all bakery machines work the same if the
            specifications look similar. On paper, two ovens may offer the same
            tray capacity, two mixers may show the same motor power, and two
            proofers may look nearly identical. But real bakery operations often
            tell a completely different story.
          </p>

          <p>
            The actual difference appears after months of daily use—when
            production increases, staff changes, workloads become heavier, and
            machines are expected to perform without interruption.
          </p>

          <p>
            This is where the right{" "}
            <Link
              href="/bakery-equipments-manufacturer"
              className="font-semibold text-[#2F3192] no-underline transition-colors hover:text-indigo-900"
            >
              bakery equipments manufacturer in Delhi
            </Link>{" "}
            makes a real difference.
          </p>

          <p>
            A well-experienced manufacturer focuses not only on building the
            machine, but also on how that machine performs inside a real
            bakery—during early morning production, during peak festive demand,
            and during long working hours.
          </p>

          <p>
            That is why smart bakery owners in 2026 are no longer comparing
            machines by price alone. They are comparing reliability, service
            response, production consistency, and long-term operating cost
            before making a final investment.
          </p>
        </section>

        {/* Image 2 */}
        <div className="my-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-[#2F3192]/10 bg-white p-2 shadow-sm">
            <Image
              src="/blog/bakery-equipments-manufacturer-in-delhi/p3.png"
              alt="Bakery Machinery Display"
              width={700}
              height={400}
              sizes="(max-width: 640px) 100vw, 50vw"
              className="h-auto w-full rounded-xl object-contain"
            />
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#2F3192]/10 bg-white p-2 shadow-sm">
            <Image
              src="/blog/bakery-equipments-manufacturer-in-delhi/p4.png"
              alt="Bakery Machinery Display"
              width={700}
              height={400}
              sizes="(max-width: 640px) 100vw, 50vw"
              className="h-auto w-full rounded-xl object-contain"
            />
          </div>
        </div>

        {/* Section: Most Used Bakery Machines and What They Do */}
        <section className="mt-12 space-y-6">
          <h2 className="border-l-4 border-[#2F3192] pl-4 pt-1 text-2xl font-bold leading-tight text-[#2F3192] sm:text-3xl">
            Most Used Bakery Machines and What They Do
          </h2>

          <p>Here is a quick guide to the main machines every bakery needs:</p>

          {/* Table */}
          <div className="my-6 overflow-x-auto rounded-xl border border-[#2F3192]/15 shadow-sm">
            <table className="w-full min-w-[600px] border-collapse text-left">
              <thead>
                <tr className="bg-[#2F3192] text-white">
                  <th className="border border-white/15 p-4 font-semibold">
                    Machine
                  </th>
                  <th className="border border-white/15 p-4 font-semibold">
                    Used For
                  </th>
                  <th className="border border-white/15 p-4 font-semibold">
                    Best For
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="bg-white transition-colors hover:bg-blue-50">
                  <td className="border border-[#2F3192]/10 p-4 font-semibold text-[#2F3192]">
                    Deck Oven
                  </td>
                  <td className="border border-[#2F3192]/10 p-4">
                    Bread, pizza, cookies
                  </td>
                  <td className="border border-[#2F3192]/10 p-4">
                    Retail bakeries
                  </td>
                </tr>

                <tr className="bg-blue-50/60 transition-colors hover:bg-blue-100/60">
                  <td className="border border-[#2F3192]/10 p-4 font-semibold text-[#2F3192]">
                    Rotary Rack Oven
                  </td>
                  <td className="border border-[#2F3192]/10 p-4">
                    High-volume baking
                  </td>
                  <td className="border border-[#2F3192]/10 p-4">
                    Large bakeries, factories
                  </td>
                </tr>

                <tr className="bg-white transition-colors hover:bg-blue-50">
                  <td className="border border-[#2F3192]/10 p-4 font-semibold text-[#2F3192]">
                    Planetary Mixer
                  </td>
                  <td className="border border-[#2F3192]/10 p-4">
                    Cakes, creams, batter
                  </td>
                  <td className="border border-[#2F3192]/10 p-4">
                    Cake shops, pastry shops
                  </td>
                </tr>

                <tr className="bg-blue-50/60 transition-colors hover:bg-blue-100/60">
                  <td className="border border-[#2F3192]/10 p-4 font-semibold text-[#2F3192]">
                    Spiral Mixer
                  </td>
                  <td className="border border-[#2F3192]/10 p-4">
                    Bread dough
                  </td>
                  <td className="border border-[#2F3192]/10 p-4">
                    Bread bakeries
                  </td>
                </tr>

                <tr className="bg-white transition-colors hover:bg-blue-50">
                  <td className="border border-[#2F3192]/10 p-4 font-semibold text-[#2F3192]">
                    Dough Sheeter
                  </td>
                  <td className="border border-[#2F3192]/10 p-4">
                    Puff pastry, croissants
                  </td>
                  <td className="border border-[#2F3192]/10 p-4">
                    Patisseries
                  </td>
                </tr>

                <tr className="bg-blue-50/60 transition-colors hover:bg-blue-100/60">
                  <td className="border border-[#2F3192]/10 p-4 font-semibold text-[#2F3192]">
                    Proofer
                  </td>
                  <td className="border border-[#2F3192]/10 p-4">
                    Dough fermentation
                  </td>
                  <td className="border border-[#2F3192]/10 p-4">
                    All bakeries
                  </td>
                </tr>

                <tr className="bg-white transition-colors hover:bg-blue-50">
                  <td className="border border-[#2F3192]/10 p-4 font-semibold text-[#2F3192]">
                    Bread Slicer
                  </td>
                  <td className="border border-[#2F3192]/10 p-4">
                    Slicing loaves
                  </td>
                  <td className="border border-[#2F3192]/10 p-4">
                    Bakeries selling packed bread
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section: Common Mistakes Bakers Make While Buying Equipment */}
        <section className="mt-12 space-y-6">
          <h2 className="border-l-4 border-[#2F3192] pl-4 pt-1 text-2xl font-bold leading-tight text-[#2F3192] sm:text-3xl">
            Common Mistakes Bakers Make While Buying Equipment
          </h2>

          <p>
            After working with thousands of bakery owners, we have seen these
            mistakes again and again:
          </p>

          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#2F3192]" />
              <span>
                <strong className="text-[#2F3192]">Buying only on price</strong>{" "}
                — cheap machines cost more in repairs
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#2F3192]" />
              <span>
                <strong className="text-[#2F3192]">
                  Ignoring power requirements
                </strong>{" "}
                — many bakeries face voltage issues
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#2F3192]" />
              <span>
                <strong className="text-[#2F3192]">
                  Skipping demo and training
                </strong>{" "}
                — new staff can’t operate properly
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#2F3192]" />
              <span>
                <strong className="text-[#2F3192]">
                  Not checking ventilation needs
                </strong>{" "}
                — ovens need proper exhaust
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#2F3192]" />
              <span>
                <strong className="text-[#2F3192]">
                  Buying without future planning
                </strong>{" "}
                — your bakery will grow, plan for it
              </span>
            </li>
          </ul>

          <p>Avoiding these mistakes can save you both money and stress.</p>
        </section>

        {/* Section: How the Bakery Equipment Industry Is Changing in 2026 */}
        <section className="mt-12 space-y-6">
          <h2 className="border-l-4 border-[#2F3192] pl-4 pt-1 text-2xl font-bold leading-tight text-[#2F3192] sm:text-3xl">
            How the Bakery Equipment Industry Is Changing in 2026
          </h2>

          <p>
            The Indian bakery market is expected to cross ₹1 lakh crore by 2027.
            With this growth, equipment is also changing:
          </p>

          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <li className="rounded-xl border border-[#2F3192]/10 bg-blue-50/50 p-4">
              <strong className="text-[#2F3192]">Energy-saving ovens</strong>{" "}
              are replacing traditional ones
            </li>
            <li className="rounded-xl border border-[#2F3192]/10 bg-blue-50/50 p-4">
              <strong className="text-[#2F3192]">Digital control panels</strong>{" "}
              are now standard
            </li>
            <li className="rounded-xl border border-[#2F3192]/10 bg-blue-50/50 p-4">
              <strong className="text-[#2F3192]">Compact machines</strong> are
              popular for cloud kitchens
            </li>
            <li className="rounded-xl border border-[#2F3192]/10 bg-blue-50/50 p-4">
              <strong className="text-[#2F3192]">Automatic mixers</strong> are
              reducing labor costs
            </li>
            <li className="rounded-xl border border-[#2F3192]/10 bg-blue-50/50 p-4 sm:col-span-2">
              <strong className="text-[#2F3192]">Eco-friendly designs</strong>{" "}
              are in demand
            </li>
          </ul>

          <p>
            If you are buying new equipment in 2026, choose machines that match
            these trends. They will stay relevant for years.
          </p>
        </section>

        {/* Section: About Royal Equipments */}
        <section className="mt-12 space-y-6">
          <h2 className="border-l-4 border-[#2F3192] pl-4 pt-1 text-2xl font-bold leading-tight text-[#2F3192] sm:text-3xl">
            About Royal Equipments
          </h2>

          <p>
            <Link
              href="/"
              className="font-bold text-[#2F3192] no-underline transition-colors hover:text-indigo-900"
            >
              Royal Equipments
            </Link>{" "}
            is a New Delhi-based bakery machine manufacturer serving the
            industry for over <strong>25 years</strong>. We started as a small
            workshop and today supply machines across India and abroad.
          </p>

          <p>
            Our focus is simple — build strong, reliable, and energy-efficient
            machines that real bakers can depend on. From small home bakers to
            large food factories, our products are used by businesses of every
            size.
          </p>

          <p>
            We design each machine based on real bakery needs, not just textbook
            engineering.
          </p>
        </section>

        {/* Image 3 */}
        <div className="my-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-[#2F3192]/10 bg-white p-2 shadow-sm">
            <Image
              src="/blog/bakery-equipments-manufacturer-in-delhi/p5.png"
              alt="Royal Equipments Commercial Ovens"
              width={700}
              height={400}
              sizes="(max-width: 640px) 100vw, 50vw"
              className="h-auto w-full rounded-xl object-contain"
            />
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#2F3192]/10 bg-white p-2 shadow-sm">
            <Image
              src="/blog/bakery-equipments-manufacturer-in-delhi/p6.webp"
              alt="Royal Equipments Commercial Ovens"
              width={700}
              height={400}
              sizes="(max-width: 640px) 100vw, 50vw"
              className="h-auto w-full rounded-xl object-contain"
            />
          </div>
        </div>

        {/* Section: Why Bakers Trust Royal Equipments */}
        <section className="mt-12 space-y-6">
          <h2 className="border-l-4 border-[#2F3192] pl-4 pt-1 text-2xl font-bold leading-tight text-[#2F3192] sm:text-3xl">
            Why Bakers Trust Royal Equipments
          </h2>

          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <li className="rounded-xl border border-[#2F3192]/10 bg-white p-4 shadow-sm">
              <strong className="text-[#2F3192]">25 years</strong> of industry
              experience
            </li>
            <li className="rounded-xl border border-[#2F3192]/10 bg-white p-4 shadow-sm">
              <strong className="text-[#2F3192]">In-house manufacturing</strong>{" "}
              in New Delhi
            </li>
            <li className="rounded-xl border border-[#2F3192]/10 bg-white p-4 shadow-sm">
              <strong className="text-[#2F3192]">Custom machines</strong> for
              any bakery size
            </li>
            <li className="rounded-xl border border-[#2F3192]/10 bg-white p-4 shadow-sm">
              <strong className="text-[#2F3192]">Pan-India delivery</strong> and
              export support
            </li>
            <li className="rounded-xl border border-[#2F3192]/10 bg-white p-4 shadow-sm">
              <strong className="text-[#2F3192]">After-sales service</strong>{" "}
              with quick response
            </li>
            <li className="rounded-xl border border-[#2F3192]/10 bg-white p-4 shadow-sm">
              Used by{" "}
              <strong className="text-[#2F3192]">
                bakeries, hotels, cafes, and cloud kitchens
              </strong>{" "}
              across India
            </li>
          </ul>

          <p>
            We don’t just sell machines. We help you set up a bakery that runs
            smoothly for years.
          </p>
        </section>

        {/* Section: Industries That Use Our Bakery Equipment */}
        <section className="mt-12 space-y-6">
          <h2 className="border-l-4 border-[#2F3192] pl-4 pt-1 text-2xl font-bold leading-tight text-[#2F3192] sm:text-3xl">
            Industries That Use Our Bakery Equipment
          </h2>

          <p>Our machines are trusted by many sectors:</p>

          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <li className="rounded-lg bg-blue-50/70 px-4 py-3">
              Retail bakeries and cake shops
            </li>
            <li className="rounded-lg bg-blue-50/70 px-4 py-3">
              Hotels and restaurants
            </li>
            <li className="rounded-lg bg-blue-50/70 px-4 py-3">
              Cafes and coffee chains
            </li>
            <li className="rounded-lg bg-blue-50/70 px-4 py-3">
              Cloud kitchens and home bakers
            </li>
            <li className="rounded-lg bg-blue-50/70 px-4 py-3">
              Food processing factories
            </li>
            <li className="rounded-lg bg-blue-50/70 px-4 py-3">
              Hospitals, hostels, and canteens
            </li>
          </ul>
        </section>

        {/* FAQs */}
        <section className="mt-12 space-y-6">
          <h2 className="border-l-4 border-[#2F3192] pl-4 pt-1 text-2xl font-bold leading-tight text-[#2F3192] sm:text-3xl">
            Frequently Asked Questions (FAQs)
          </h2>

          <div className="space-y-4">
            <div className="rounded-xl border border-[#2F3192]/10 bg-white p-5 shadow-sm sm:p-6">
              <h3 className="mb-3 font-bold text-[#2F3192]">
                Q1. How do I choose the right bakery equipments manufacturer in
                Delhi?
              </h3>
              <p>
                Look at three things — build quality, after-sales service, and
                industry experience. Always ask for a factory visit or product
                demo before buying.
              </p>
            </div>

            <div className="rounded-xl border border-[#2F3192]/10 bg-white p-5 shadow-sm sm:p-6">
              <h3 className="mb-3 font-bold text-[#2F3192]">
                Q2. What is the cost of setting up a small bakery in India?
              </h3>
              <p>
                A small bakery setup with basic equipment can start from ₹3–5
                lakhs. A medium setup may cost ₹8–15 lakhs depending on machine
                choices.
              </p>
            </div>

            <div className="rounded-xl border border-[#2F3192]/10 bg-white p-5 shadow-sm sm:p-6">
              <h3 className="mb-3 font-bold text-[#2F3192]">
                Q3. Which bakery oven is best for beginners?
              </h3>
              <p>
                A single-deck oven with 1–2 trays is best for new bakers. It is
                easy to use, energy-efficient, and works for most basic items.
              </p>
            </div>

            <div className="rounded-xl border border-[#2F3192]/10 bg-white p-5 shadow-sm sm:p-6">
              <h3 className="mb-3 font-bold text-[#2F3192]">
                Q4. How long do commercial bakery machines last?
              </h3>
              <p>
                Good quality machines from trusted manufacturers last 10–15
                years with regular maintenance.
              </p>
            </div>

            <div className="rounded-xl border border-[#2F3192]/10 bg-white p-5 shadow-sm sm:p-6">
              <h3 className="mb-3 font-bold text-[#2F3192]">
                Q5. Are Indian-made bakery machines better than imported ones?
              </h3>
              <p>
                For most Indian bakeries, locally made machines are better
                because of easy service, available spare parts, and lower cost.
              </p>
            </div>

            <div className="rounded-xl border border-[#2F3192]/10 bg-white p-5 shadow-sm sm:p-6">
              <h3 className="mb-3 font-bold text-[#2F3192]">
                Q6. Does Royal Equipments offer installation and training?
              </h3>
              <p>
                Yes. We provide full installation, staff training, and
                after-sales support across India.
              </p>
            </div>

            <div className="rounded-xl border border-[#2F3192]/10 bg-white p-5 shadow-sm sm:p-6">
              <h3 className="mb-3 font-bold text-[#2F3192]">
                Q7. Can I get a custom-made bakery machine?
              </h3>
              <p>
                Yes. Royal Equipments builds custom machines based on your
                bakery size, capacity, and power supply.
              </p>
            </div>

            <div className="rounded-xl border border-[#2F3192]/10 bg-white p-5 shadow-sm sm:p-6">
              <h3 className="mb-3 font-bold text-[#2F3192]">
                Q8. Do you deliver bakery equipment outside Delhi?
              </h3>
              <p>
                Yes. We deliver across India and also export to many countries.
              </p>
            </div>

            <div className="rounded-xl border border-[#2F3192]/10 bg-white p-5 shadow-sm sm:p-6">
              <h3 className="mb-3 font-bold text-[#2F3192]">
                Q9. How much electricity does a commercial oven use?
              </h3>
              <p>
                It depends on size and type. A standard 3-deck oven uses around
                18–24 kW. Modern energy-efficient models use 15–20% less power.
              </p>
            </div>

            <div className="rounded-xl border border-[#2F3192]/10 bg-white p-5 shadow-sm sm:p-6">
              <h3 className="mb-3 font-bold text-[#2F3192]">
                Q10. What is the warranty on Royal Equipments machines?
              </h3>
              <p>
                Most of our machines come with a standard 1-year warranty.
                Extended warranty options are also available.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mt-12 overflow-hidden rounded-2xl border border-[#2F3192]/10 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          <div className="h-1.5 bg-[#2F3192]" />

          <div className="space-y-6 p-5 sm:p-8 lg:p-10">
            <h2 className="text-2xl font-bold leading-tight text-[#2F3192] sm:text-3xl">
              Conclusion
            </h2>

            <p>
              Choosing the right{" "}
              <Link
                href="/contact-us"
                className="font-semibold text-[#2F3192] no-underline transition-colors hover:text-indigo-900"
              >
                bakery equipments manufacturer in Delhi
              </Link>{" "}
              can change the future of your bakery. The right machines mean
              better products, lower costs, and steady growth for years.
            </p>

            <p>
              Always check build quality, warranty, and after-sales service
              before buying. Pick a manufacturer with real experience and strong
              local support.
            </p>

            <p>
              If you are in New Delhi or anywhere in India,{" "}
              <strong>Royal Equipments</strong> is here to help. With 25 years
              of experience, we build reliable baking machines for bakeries of
              every size.
            </p>

            <p className="rounded-xl border border-[#2F3192]/10 bg-white p-4 font-semibold text-[#2F3192] sm:p-5">
              Your bakery deserves the best — choose wisely, and grow without
              worry.
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}
