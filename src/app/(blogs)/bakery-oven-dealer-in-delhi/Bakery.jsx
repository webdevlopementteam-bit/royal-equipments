import { UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BakeryOvenGuide() {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-[#171717] text-[17px] lg:text-[19px] leading-relaxed bg-white">
        {/* Title */}
        <header className="relative overflow-hidden rounded-2xl border border-[#2F3192]/15 bg-gradient-to-br from-[#2F3192]/[0.08] via-white to-white p-5 sm:p-8 lg:p-10 mb-8 shadow-sm">
          <div className="absolute top-0 left-0 h-full w-1.5 bg-[#2F3192]" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#2F3192]/10 px-3 py-1 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#2F3192] mb-4">
              Bakery Equipment Buying Guide
            </span>

            <h1 className="text-3xl sm:text-4xl  font-bold text-[#2F3192] leading-tight tracking-tight mb-6">
              Best Bakery Oven Dealer in Delhi: The Complete 2026 Buyer’s Guide
            </h1>

            {/* Meta */}
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

        {/* Intro Subtitle */}
        <p className="italic mb-6 rounded-xl border-l-4 border-[#2F3192] bg-[#2F3192]/[0.045] px-5 py-4 text-slate-600">
          Written based on 25+ years of hands-on experience in Delhi’s
          commercial kitchen equipment industry.
        </p>

        {/* Paragraphs */}
        <p className="mb-6 text-slate-700">
          Buying a bakery oven is a big decision. One wrong choice can cost you
          lakhs of rupees, slow down your business, and give you daily headaches
          for years. If you are looking for a reliable{" "}
          <Link
            href="/contact-us"
            className="text-blue-600 font-semibold no-underline hover:text-[#232570] transition-colors"
          >
            bakery oven dealer in Delhi
          </Link>
          , this guide will help you make the right choice without any
          guesswork.
        </p>

        <p className="mb-6 text-slate-700">
          Delhi is full of bakery equipment shops. Some are genuine, many are
          not. After working in this industry for over 25 years at Royal
          Equipments, we have seen which ovens last, which ones break down fast,
          and what bakery owners actually need.
        </p>

        <p className="mb-8 text-slate-700">
          This guide is based on real experience — not marketing talk. Let’s get
          started.
        </p>

        {/* Images Section 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 my-8">
          <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-2xl border border-[#2F3192]/10 bg-white p-4 shadow-sm transition-all duration-300 hover:border-[#2F3192]/30 hover:shadow-lg">
            <Image
              src="/blog/bakery-oven-dealer-in-delhi/p1.webp"
              alt="Bakery Oven 1"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-4"
            />
          </div>

          <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-2xl border border-[#2F3192]/10 bg-white p-4 shadow-sm transition-all duration-300 hover:border-[#2F3192]/30 hover:shadow-lg">
            <Image
              src="/blog/bakery-oven-dealer-in-delhi/p2.webp"
              alt="Bakery Oven 2"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-4"
            />
          </div>
        </div>

        {/* What Is a Bakery Oven? */}
        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2F3192] mt-10 mb-4 pb-3 border-b-2 border-[#2F3192]/15">
            What Is a Bakery Oven?
          </h2>

          <p className="mb-6 text-slate-700">
            A bakery oven is a commercial oven made for daily heavy use. Unlike
            home ovens, it can run for 10–12 hours a day, hold higher
            temperatures, and bake large quantities at once.
          </p>

          <p className="mb-4 font-semibold text-[#2F3192]">
            A good bakery oven gives you:
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              "Even baking on every tray",
              "Faster cooking time",
              "Consistent results every day",
              "Lower power bills over time",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-[#2F3192]/10 bg-[#2F3192]/[0.035] p-4 text-slate-700 transition-all duration-300 hover:border-[#2F3192]/35 hover:shadow-sm"
              >
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2F3192] text-sm font-bold text-white">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <p className="mb-8 text-slate-700">
            The wrong oven can do the opposite — burn one side, undercook the
            other, and increase your electricity bill.
          </p>
        </section>

        {/* Why Quality Matters for Delhi Bakeries */}
        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2F3192] mt-10 mb-4 pb-3 border-b-2 border-[#2F3192]/15">
            Why Quality Matters for Delhi Bakeries
          </h2>

          <p className="mb-6 text-slate-700">
            Delhi has thousands of bakeries, cafes, cloud kitchens, and hotels.
            The competition is tough. Customers want fresh, tasty products every
            single day.
          </p>

          <p className="mb-4 text-slate-700">
            In our 25+ years of work in this industry, we have seen one common
            pattern —{" "}
            <strong className="text-[#2F3192]">
              bakeries that invest in a good oven grow faster
            </strong>
            . Those who buy cheap, low-quality ovens often face:
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              "Frequent breakdowns",
              "Uneven baking and customer complaints",
              "High electricity bills",
              "No spare parts available",
              "Loss of business during repair days",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg bg-[#2F3192]/[0.045] px-4 py-3 text-slate-700"
              >
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#2F3192]" />
                {item}
              </li>
            ))}
          </ul>

          <p className="mb-8 text-slate-700">
            That is why choosing a trusted{" "}
            <Link
              href="/bakery-equipments-manufacturer"
              className="text-blue-600 font-semibold no-underline hover:text-[#232570] transition-colors"
            >
              bakery oven dealer in Delhi
            </Link>{" "}
            is just as important as choosing the oven itself.
          </p>
        </section>

        {/* Types of Bakery Ovens Explained */}
        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2F3192] mt-10 mb-4 pb-3 border-b-2 border-[#2F3192]/15">
            Types of Bakery Ovens Explained
          </h2>

          <p className="mb-6 text-slate-700">
            Different products need different ovens. Here are the most common
            types used in Delhi:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              {
                title: "1. Deck Oven",
                description:
                  "Best for breads, pizzas, and pastries. Stone decks give a crispy base. Most artisan bakeries in Delhi use deck ovens.",
              },
              {
                title: "2. Convection Oven",
                description:
                  "Uses a fan to spread heat evenly. Great for cookies, cakes, muffins, and small batch baking. Perfect for small cafes.",
              },
              {
                title: "3. Rotary Rack Oven",
                description:
                  "Made for large bakeries that bake hundreds of breads daily. The rack rotates inside, so every loaf bakes evenly.",
              },
              {
                title: "4. Pizza Oven",
                description:
                  "Heats up very fast and reaches high temperatures (up to 350°C+). Gives the perfect crispy crust. If you run a pizza outlet, a dedicated pizza oven dealer in Delhi is your best partner.",
              },
              {
                title: "5. Combi Oven",
                description:
                  "A 3-in-1 oven — bakes, steams, and roasts. Hotels, cloud kitchens, and modern restaurants prefer combi ovens. For these, look for an experienced combi oven dealer in Delhi who understands programming and installation.",
              },
              {
                title: "6. Tunnel Oven",
                description:
                  "Used in factories and large production units. Non-stop baking, mostly automated.",
              },
            ].map((oven) => (
              <div
                key={oven.title}
                className="rounded-xl border border-[#2F3192]/15 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2F3192]/40 hover:shadow-md"
              >
                <h3 className="font-bold text-lg lg:text-xl text-[#2F3192] mb-3">
                  {oven.title}
                </h3>
                <p className="text-slate-700">{oven.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Top Features Table */}
        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2F3192] mt-10 mb-5 pb-3 border-b-2 border-[#2F3192]/15">
            Top Features to Check Before Buying
          </h2>

          <div className="overflow-x-auto mb-8 rounded-xl border border-[#2F3192]/15 shadow-sm">
            <table className="w-full min-w-[480px] text-left border-collapse">
              <thead>
                <tr className="bg-[#2F3192] text-white">
                  <th className="p-3 sm:p-4 font-bold border-r border-white/20">
                    Feature
                  </th>
                  <th className="p-3 sm:p-4 font-bold">Why It Matters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2F3192]/10">
                {[
                  ["Even Heat Distribution", "No burnt edges, no raw centres"],
                  ["Accurate Temperature Control", "Same result every day"],
                  ["Steam Function", "Soft, shiny crust on breads"],
                  ["Strong Body Build", "Lasts 10–15 years easily"],
                  ["Easy Cleaning", "Saves daily labour time"],
                  ["Power Efficiency", "Lower monthly bills"],
                  ["Safety Features", "Protects your staff"],
                  ["Spare Parts Availability", "Easy repairs in future"],
                ].map(([feature, benefit], index) => (
                  <tr
                    key={feature}
                    className={`transition-colors hover:bg-[#2F3192]/[0.06] ${index % 2 === 0 ? "bg-white" : "bg-[#2F3192]/[0.025]"}`}
                  >
                    <td className="p-3 sm:p-4 border-r border-[#2F3192]/10 font-semibold text-[#2F3192]">
                      {feature}
                    </td>
                    <td className="p-3 sm:p-4 text-slate-700">{benefit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Images Section 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 my-8">
          <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-2xl border border-[#2F3192]/10 bg-white shadow-sm transition-all duration-300 hover:border-[#2F3192]/30 hover:shadow-lg">
            <Image
              src="/blog/bakery-oven-dealer-in-delhi/p3.webp"
              alt="Bakery Oven 3"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-4"
            />
          </div>

          <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-2xl border border-[#2F3192]/10 bg-white shadow-sm transition-all duration-300 hover:border-[#2F3192]/30 hover:shadow-lg">
            <Image
              src="/blog/bakery-oven-dealer-in-delhi/p4.webp"
              alt="Bakery Oven 4"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-4"
            />
          </div>
        </div>

        {/* Comparison Table */}
        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2F3192] mt-10 mb-5 pb-3 border-b-2 border-[#2F3192]/15">
            Pizza Oven vs Combi Oven vs Bakery Oven
          </h2>

          <div className="overflow-x-auto mb-6 rounded-xl border border-[#2F3192]/15 shadow-sm">
            <table className="w-full min-w-[650px] text-left border-collapse">
              <thead>
                <tr className="bg-[#2F3192] text-white">
                  <th className="p-3 sm:p-4 font-bold border-r border-white/20">
                    Type
                  </th>
                  <th className="p-3 sm:p-4 font-bold border-r border-white/20">
                    Best For
                  </th>
                  <th className="p-3 sm:p-4 font-bold border-r border-white/20">
                    Cooking Style
                  </th>
                  <th className="p-3 sm:p-4 font-bold">Typical Buyer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2F3192]/10">
                {[
                  [
                    "Pizza Oven",
                    "Pizzas, flatbreads",
                    "High heat, fast",
                    "Pizza outlets, cafes",
                  ],
                  [
                    "Combi Oven",
                    "Multi-cuisine cooking",
                    "Bake, steam, roast",
                    "Hotels, cloud kitchens",
                  ],
                  [
                    "Bakery Oven",
                    "Breads, cakes, cookies",
                    "Slow, even baking",
                    "Bakeries, patisseries",
                  ],
                ].map(([type, bestFor, style, buyer], index) => (
                  <tr
                    key={type}
                    className={`transition-colors hover:bg-[#2F3192]/[0.06] ${index % 2 === 0 ? "bg-white" : "bg-[#2F3192]/[0.025]"}`}
                  >
                    <td className="p-3 sm:p-4 font-bold text-[#2F3192] border-r border-[#2F3192]/10">
                      {type}
                    </td>
                    <td className="p-3 sm:p-4 border-r border-[#2F3192]/10 text-slate-700">
                      {bestFor}
                    </td>
                    <td className="p-3 sm:p-4 border-r border-[#2F3192]/10 text-slate-700">
                      {style}
                    </td>
                    <td className="p-3 sm:p-4 text-slate-700">{buyer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mb-8 text-slate-700">
            If you sell only pizzas, do not buy a combi oven — it is overkill.
            If you run a hotel kitchen, a basic bakery oven is not enough.
            Choose based on your <strong>menu</strong>, not the price tag.
          </p>
        </section>

        {/* How to Choose Step by Step */}
        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2F3192] mt-10 mb-6 pb-3 border-b-2 border-[#2F3192]/15">
            How to Choose the Right Oven — Step by Step
          </h2>

          <div className="space-y-4 mb-8">
            {[
              {
                title: "Step 1: Know Your Menu",
                description:
                  "What will you bake? Bread, cakes, pizza, or all? Your menu decides the oven type.",
              },
              {
                title: "Step 2: Check Your Kitchen Space",
                description:
                  "Measure your kitchen before buying. Big ovens need proper space, exhaust, and ventilation.",
              },
              {
                title: "Step 3: Plan Your Production",
                description:
                  "How many pieces per day? Small cafe vs busy bakery vs hotel — all need different capacity.",
              },
              {
                title: "Step 4: Decide Gas or Electric",
                description:
                  "Gas ovens are cheaper to run but need pipeline approval. Electric ovens are easier to install but cost more in bills.",
              },
              {
                title: "Step 5: Set a Realistic Budget",
                description:
                  "Do not pick the cheapest oven. A ₹50,000 cheap oven that breaks in 1 year is more costly than a ₹1,20,000 oven that runs for 12 years.",
              },
              {
                title: "Step 6: Choose the Dealer Carefully",
                description:
                  "Buy from someone who has been in the market for years, gives proper bills, and offers service support.",
              },
            ].map((step, index) => (
              <div
                key={step.title}
                className="flex gap-4 rounded-xl border border-[#2F3192]/10 bg-white p-4 sm:p-5 shadow-sm transition-all duration-300 hover:border-[#2F3192]/35 hover:shadow-md"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#2F3192] text-white font-bold">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-bold text-lg lg:text-xl text-[#2F3192] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Royal Equipments */}
        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2F3192] mt-10 mb-4 pb-3 border-b-2 border-[#2F3192]/15">
            Why Choose Royal Equipments
          </h2>

          <p className="mb-5 text-slate-700">
            <Link
              href="https://www.royalequipments.in/"
              className="text-blue-600 font-semibold no-underline hover:text-[#232570] transition-colors"
            >
              Royal Equipments
            </Link>{" "}
            has been serving Delhi’s bakery industry for{" "}
            <strong className="text-[#2F3192]">over 25 years</strong>. Here is
            what makes us different:
          </p>

          <ul className="space-y-3 mb-6">
            {[
              <>
                <strong>Real Industry Experience</strong> — We have seen the
                industry change from manual ovens to smart combi ovens
              </>,
              <>
                <strong>Wide Range of Ovens</strong> — From small cafes to large
                hotels, we have the right option for every kitchen
              </>,
              <>
                <strong>Honest Advice</strong> — We will tell you if you don’t
                need a costly oven; we suggest what truly fits your business
              </>,
              <>
                <strong>Genuine Branded Products</strong> — No duplicate or
                local copies
              </>,
              <>
                <strong>Proper Bills with GST</strong> — Full paperwork for your
                business records
              </>,
              <>
                <strong>Installation & Training</strong> — Our team helps your
                staff understand the oven
              </>,
              <>
                <strong>After-Sales Support</strong> — Repairs, spare parts, and
                maintenance whenever needed
              </>,
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 rounded-xl bg-[#2F3192]/[0.04] p-4 text-slate-700"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2F3192] text-white text-sm font-bold">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="mb-8 text-slate-700">
            We are also a trusted{" "}
            <span className="font-semibold text-[#2F3192]">
              pizza oven dealer in Delhi
            </span>{" "}
            and a leading <strong>combi oven dealer in Delhi</strong> for hotels
            and cloud kitchens.
          </p>
        </section>

        {/* Expert Tips */}
        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2F3192] mt-10 mb-4 pb-3 border-b-2 border-[#2F3192]/15">
            Expert Tips From 25+ Years of Experience
          </h2>

          <p className="mb-4 text-slate-700">
            After serving Delhi’s bakeries for more than 25 years, here are the
            real tips we share with every customer:
          </p>

          <ol className="space-y-3 mb-8">
            {[
              <>
                <strong>Buy slightly bigger than your current need.</strong>{" "}
                Your business will grow. Don’t buy too small.
              </>,
              <>
                <strong>Always ask for a live demo</strong> before paying.
              </>,
              <>
                <strong>Check spare parts availability</strong> in India —
                imported ovens with no local parts cause problems later.
              </>,
              <>
                <strong>Don’t fall for very low prices.</strong> They usually
                mean second-hand or low-grade items.
              </>,
              <>
                <strong>Ask about power load</strong> — many old kitchens cannot
                handle high-power ovens.
              </>,
              <>
                <strong>Get the warranty in writing</strong>, not just verbally.
              </>,
              <>
                <strong>Train your staff properly.</strong> A great oven used
                wrongly gives bad results.
              </>,
            ].map((tip, index) => (
              <li
                key={index}
                className="flex items-start gap-3 rounded-xl border border-[#2F3192]/10 p-4 text-slate-700 transition-colors hover:bg-[#2F3192]/[0.035]"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#2F3192] text-white font-bold">
                  {index + 1}
                </span>
                <span>{tip}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Images Section 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 my-8">
          <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-2xl border border-[#2F3192]/10 bg-white shadow-sm transition-all duration-300 hover:border-[#2F3192]/30 hover:shadow-lg">
            <Image
              src="/blog/bakery-oven-dealer-in-delhi/p5.webp"
              alt="Bakery Oven 5"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-4"
            />
          </div>

          <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-2xl border border-[#2F3192]/10 bg-white shadow-sm transition-all duration-300 hover:border-[#2F3192]/30 hover:shadow-lg">
            <Image
              src="/blog/bakery-oven-dealer-in-delhi/p6.webp"
              alt="Bakery Oven 6"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-4"
            />
          </div>
        </div>

        {/* Mistakes Bakery Owners Often Make */}
        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2F3192] mt-10 mb-4 pb-3 border-b-2 border-[#2F3192]/15">
            Mistakes Bakery Owners Often Make
          </h2>

          <p className="mb-4 text-slate-700">
            We see these same mistakes again and again:
          </p>

          <ul className="space-y-3 mb-6">
            {[
              "Buying without checking kitchen space",
              "Ignoring power and gas requirements",
              "Choosing the cheapest dealer without checking reputation",
              "Not asking about after-sales service",
              "Buying a combi oven when a simple deck oven was enough",
              "Skipping the staff training",
              "No proper invoice or warranty card",
            ].map((mistake) => (
              <li
                key={mistake}
                className="flex items-start gap-3 text-slate-700"
              >
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#2F3192]" />
                {mistake}
              </li>
            ))}
          </ul>

          <p className="mb-8 text-slate-700">
            A little research before buying saves a lot of money later.
          </p>
        </section>

        {/* FAQ */}
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
            {[
              {
                question: "1. Who is a reliable bakery oven dealer in Delhi?",
                answer:
                  "Look for a dealer with strong industry experience, genuine GST bills, and proper service support. Royal Equipments has been in this business for over 25 years.",
              },
              {
                question:
                  "2. How much does a commercial bakery oven cost in Delhi?",
                answer:
                  "Small ovens start from around ₹40,000. Mid-size deck and convection ovens cost ₹70,000–₹2,000,000. Large combi ovens can go up to ₹10,00,000 or more.",
              },
              {
                question: "3. Which oven is best for a small bakery or cafe?",
                answer:
                  "A small convection oven or a single deck oven works well for most cafes and small bakeries.",
              },
              {
                question: "4. Gas oven or electric oven — which is better?",
                answer:
                  "Gas is cheaper to run but needs proper installation. Electric is easier and safer but costs more in bills. Your kitchen setup decides which one suits you.",
              },
              {
                question: "5. What is a combi oven used for?",
                answer:
                  "A combi oven can bake, steam, and roast — all in one machine. It is most useful for hotels, cloud kitchens, and multi-cuisine restaurants.",
              },
              {
                question: "6. How long does a commercial bakery oven last?",
                answer:
                  "A good-quality oven lasts 10–15 years with proper care and regular servicing.",
              },
              {
                question: "7. Do bakery ovens come with a warranty?",
                answer:
                  "Yes. Most branded ovens come with 1–2 years of manufacturer warranty. Always ask for the warranty card.",
              },
              {
                question:
                  "8. Can I get installation and training with the oven?",
                answer:
                  "Yes, a good dealer should provide installation, basic training, and after-sales support.",
              },
              {
                question: "9. Is EMI available on bakery ovens?",
                answer:
                  "Many dealers offer EMI through partner banks and NBFCs. Ask the dealer before finalising.",
              },
              {
                question:
                  "10. What is the difference between a deck oven and a convection oven?",
                answer:
                  "A deck oven gives strong bottom heat through stone shelves — best for breads and pizzas. A convection oven uses a fan for even heat — best for cookies and cakes.",
              },
            ].map((faq) => (
              <div
                key={faq.question}
                className="rounded-xl border border-[#2F3192]/15 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:border-[#2F3192]/40 hover:shadow-md"
              >
                <h3 className="font-bold text-lg lg:text-xl text-[#2F3192] mb-2">
                  {faq.question}
                </h3>
                <p className="text-slate-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final Thoughts */}
        <section className="mt-10 mb-4 rounded-2xl border border-[#2F3192]/15 bg-gradient-to-br from-[#2F3192]/[0.07] via-white to-white p-5 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2F3192] mb-4">
            Final Thoughts
          </h2>

          <p className="mb-6 text-slate-700">
            A bakery oven is not just a machine — it is the heart of your
            business. The wrong oven can hold you back for years. The right one
            can help your bakery grow steadily and earn customer trust.
          </p>

          <p className="text-slate-700">
            With 25+ years in Delhi’s commercial kitchen industry, we at Royal
            Equipments understand both sides — the technical part and the
            business part. As a trusted{" "}
            <Link
              href="/contact-us"
              className="text-blue-600 font-bold no-underline hover:text-[#232570] transition-colors"
            >
              Bakery Oven Dealer in Delhi
            </Link>
            , we do not sell ovens just to make a sale. We help you find the
            right oven for your kitchen, menu, and budget.
          </p>
        </section>
      </article>
    </div>
  );
}
