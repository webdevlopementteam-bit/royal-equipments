import Image from "next/image";
import Link from "next/link";

export default function BlogPost() {
  return (
    <article className="min-h-screen bg-white text-slate-700 py-8 sm:py-12 px-3 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-[#2F3191]/5 border border-[#2F3191]/10 overflow-hidden">
        {/* Article Header */}

        <header className="relative overflow-hidden rounded-2xl border border-[#2F3191]/15 bg-gradient-to-br from-[#2F3191]/[0.08] via-white to-white p-5 sm:p-8 lg:p-10 mb-8 shadow-sm">
          <div className="absolute top-0 left-0 h-full w-1.5 bg-[#2F3191]" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#2F3191]/10 px-3 py-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#2F3191] mb-4">
              Dishwasher Equipment
            </span>

            <h1 className="text-3xl sm:text-4xl font-semibold text-[#2F3191] leading-tight tracking-tight mb-6">
              Best Dishwasher Dealer in Delhi — Royal Equipments
            </h1>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-600 font-medium uppercase tracking-wider">
              <Link
                href="/"
                className="flex items-center gap-2 text-[#2F3191] font-semibold no-underline hover:text-[#22246F] transition-colors"
              >
                <span className="w-8 h-8 rounded-full bg-[#2F3191] text-white flex items-center justify-center text-xs font-semibold shadow-md">
                  RE
                </span>
                ROYAL EQUIPMENTS
              </Link>

              <span className="text-[#2F3191]/50">•</span>

              <time dateTime="2026-09-26">SEPTEMBER 26, 2026</time>

              <span className="text-[#2F3191]/50">•</span>

              <Link
                href="/category/blog?type=blog"
                className="bg-[#2F3191] text-white px-4 py-1.5 rounded-full text-xs font-semibold no-underline hover:bg-[#22246F] transition-colors"
              >
                BLOG
              </Link>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="p-5 sm:p-8 lg:p-12 space-y-8 sm:space-y-10 text-[17px] lg:text-[19px] leading-relaxed">
          {/* Intro Paragraphs */}
          <p>
            Running a commercial kitchen means one thing above everything else:
            clean utensils have to keep moving, non-stop, through the busiest
            hours of service. Whether you run a restaurant, a hotel banquet
            kitchen, a cloud kitchen, a hospital canteen, or a QSR chain, a
            dishwasher that can’t keep up becomes the bottleneck of your entire
            operation. That’s why choosing the right{" "}
            <Link
              href="/dishwasher-dealer-in-delhi"
              className="text-blue-600 font-semibold no-underline hover:text-[#22246F] transition-colors"
            >
              Dishwasher Dealer in Delhi
            </Link>{" "}
            matters just as much as choosing the right machine.
          </p>

          <p>
            Royal Equipments, a unit of{" "}
            <strong>Kuche India Elevation Pvt. Ltd.</strong>, has been designing
            and manufacturing commercial kitchen equipment since{" "}
            <strong>2001</strong> — that’s{" "}
            <strong>over 25 years of hands-on experience</strong> solving real
            kitchen washing problems, not just selling machines off a catalogue.
            Over these two and a half decades, we’ve supplied dishwashers and
            washing-area setups to restaurants, hotels, cloud kitchens,
            hospitals, and institutional clients across Delhi NCR.
          </p>

          {/* Banner Image Section */}
          <div className="my-8 sm:my-10 rounded-2xl overflow-hidden border border-[#2F3191]/15 shadow-lg shadow-[#2F3191]/10">
            <Image
              src="/blog/b1.png"
              alt="Dishwasher Dealer in Delhi - Royal Equipments"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Section: Why a Dishwasher Dealer Matters */}
          <section className="space-y-4 pt-4 border-t border-[#2F3191]/10">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#2F3191] border-l-4 border-[#2F3191] pl-4 py-1">
              Why a Dishwasher Dealer in Delhi Matters More Than You Think
            </h2>

            <p>
              Commercial kitchens don’t run like home kitchens. Hundreds of
              plates, oily kadais, tandoor accessories, and back-to-back service
              hours put real pressure on equipment. A good{" "}
              <Link
                href="/"
                className="text-blue-600 hover:text-[#2F3191] font-semibold no-underline hover:text-[#22246F] transition-colors"
              >
                dishwasher dealer in Delhi
              </Link>{" "}
              doesn’t just sell you a machine off a catalogue — they understand
              your daily load, your kitchen layout, and your budget before
              recommending anything.
            </p>

            <p>
              At Royal Equipments, the approach is simple: whether you’re
              running a small café or a 200-cover banquet kitchen, the right
              capacity, footprint, and cycle speed get matched to your actual
              workflow — not the other way around.
            </p>
          </section>

          {/* Section: It's Not Just About the Dishwasher */}
          <section className="space-y-4 pt-4 border-t border-[#2F3191]/10">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#2F3191] border-l-4 border-[#2F3191] pl-4 py-1">
              It’s Not Just About the Dishwasher — It’s About the Whole Washing
              Area
            </h2>

            <p>
              This is where most guides (and most dealers) stop short. A
              dishwasher alone doesn’t fix your kitchen flow if the area around
              it isn’t organized. Dirty dishes need to move smoothly through{" "}
              <strong>collection → washing → sanitizing → storage</strong>, and
              that requires the right stainless steel ecosystem around the
              machine.
            </p>

            <p className="font-semibold text-[#2F3191]">
              Royal Equipments supplies the complete setup:
            </p>

            <ul className="space-y-3 pl-2">
              <li className="flex items-start gap-2">
                <span className="text-[#2F3191] font-semibold">•</span>
                <span>
                  <strong>Dirty Dish Landing Table</strong> — where soiled
                  utensils land before washing, keeping the wash area organized
                  and preventing pile-ups during peak hours.
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-[#2F3191] font-semibold">•</span>
                <span>
                  <strong>Pot Wash Sink</strong> — built for heavy items your
                  dishwasher can’t take: large kadais, biryani handis, and
                  tandoor accessories.
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-[#2F3191] font-semibold">•</span>
                <span>
                  <strong>Sink With Table</strong> — a two-in-one washing space
                  and work surface, ideal for tight kitchen layouts.
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-[#2F3191] font-semibold">•</span>
                <span>
                  <strong>Three Sink Unit</strong> — the classic
                  wash–rinse–sanitize system used in hotels and institutional
                  kitchens to meet hygiene standards.
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-[#2F3191] font-semibold">•</span>
                <span>
                  <strong>SS Grating</strong> — proper drainage and a non-slip
                  surface for any wet kitchen zone.
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-[#2F3191] font-semibold">•</span>
                <span>
                  <strong>Pot Rack</strong> — organized drying and storage for
                  clean pots, pans, and large utensils.
                </span>
              </li>
            </ul>

            <p className="pt-2">
              Everything is fabricated from food-grade stainless steel
              (typically <strong>304 grade</strong>) — rust-resistant,
              non-reactive with food, and built to handle years of daily
              commercial use.
            </p>
          </section>

          {/* Section: Types of Commercial Dishwashers */}
          <section className="space-y-6 pt-4 border-t border-[#2F3191]/10">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#2F3191] border-l-4 border-[#2F3191] pl-4 py-1">
              Types of Commercial Dishwashers You Should Know About
            </h2>

            <div className="bg-gradient-to-br from-[#2F3191]/5 to-white p-5 sm:p-6 rounded-2xl border border-[#2F3191]/10 shadow-sm hover:shadow-md hover:border-[#2F3191]/30 transition-all duration-300 space-y-2">
              <h3 className="text-xl font-semibold text-[#2F3191]">
                Under-Counter Dishwasher
              </h3>
              <p>
                Best suited for kitchens with limited space — cafés, small
                restaurants, and compact food-service setups.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#2F3191]/5 to-white p-5 sm:p-6 rounded-2xl border border-[#2F3191]/10 shadow-sm hover:shadow-md hover:border-[#2F3191]/30 transition-all duration-300 space-y-2">
              <h3 className="text-xl font-semibold text-[#2F3191]">
                Hood-Type (Pass-Through) Dishwasher
              </h3>
              <p>
                The most common choice for Indian restaurant kitchens. It
                typically handles 60–80 racks per hour and works well for
                plates, glasses, and lighter utensils.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#2F3191]/5 to-white p-5 sm:p-6 rounded-2xl border border-[#2F3191]/10 shadow-sm hover:shadow-md hover:border-[#2F3191]/30 transition-all duration-300 space-y-2">
              <h3 className="text-xl font-semibold text-[#2F3191]">
                Conveyor Dishwasher
              </h3>
              <p>
                Designed for continuous, high-volume washing — large hotels,
                banquet kitchens, and catering operations that can’t afford
                downtime.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#2F3191]/5 to-white p-5 sm:p-6 rounded-2xl border border-[#2F3191]/10 shadow-sm hover:shadow-md hover:border-[#2F3191]/30 transition-all duration-300 space-y-2">
              <h3 className="text-xl font-semibold text-[#2F3191]">
                Glasswasher
              </h3>
              <p>
                Purpose-built for glasses and stemware — a common addition for
                bars, lounges, and hospitality venues.
              </p>
            </div>

            <p className="text-slate-600 italic border-l-2 border-[#2F3191]/30 pl-3">
              <strong>Note:</strong> Heavy pots and kadais should never go
              through a standard dishwasher — they need a dedicated pot wash
              sink instead.
            </p>
          </section>

          {/* Section: How Much Does it Cost */}
          <section className="space-y-4 pt-4 border-t border-[#2F3191]/10">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#2F3191] border-l-4 border-[#2F3191] pl-4 py-1">
              How Much Does a Commercial Dishwasher Cost in Delhi?
            </h2>

            <p>
              Prices vary depending on type, capacity, and features, but as a
              general guide:
            </p>

            <ul className="space-y-2 pl-2">
              <li className="flex items-start gap-2">
                <span className="text-[#2F3191] font-semibold">•</span>
                <span>
                  Compact under-counter models: around{" "}
                  <strong>₹80,000 onward</strong>
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-[#2F3191] font-semibold">•</span>
                <span>
                  Hood-type and conveyor systems:{" "}
                  <strong>₹2 lakh to ₹5 lakh+</strong>, depending on capacity,
                  cycle speed, and add-ons like rinse boosters or detergent
                  dispensers
                </span>
              </li>
            </ul>

            <p>
              The right number depends entirely on your daily utensil volume, so
              it’s worth getting a quote based on your kitchen’s actual load
              rather than comparing sticker prices alone. This is exactly why
              picking an experienced{" "}
              <Link
                href="/about-us"
                className="text-blue-600  font-semibold no-underline hover:text-[#22246F] transition-colors"
              >
                dishwasher dealer in Delhi
              </Link>{" "}
              — rather than a generic seller — saves you money in the long run.
            </p>
          </section>

          {/* Section: Who Should Be Looking at This? */}
          <section className="space-y-4 pt-4 border-t border-[#2F3191]/10">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#2F3191] border-l-4 border-[#2F3191] pl-4 py-1">
              Who Should Be Looking at This?
            </h2>

            <p>
              Royal Equipments’ dishwasher and washing-area setups are used
              across:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-0">
              <li className="flex items-center gap-2 bg-gradient-to-r from-[#2F3191]/5 to-white p-3 sm:p-4 rounded-xl border border-[#2F3191]/10 shadow-sm hover:shadow-md hover:border-[#2F3191]/30 transition-all duration-300">
                <span className="text-[#2F3191] font-semibold">•</span>
                <span>Restaurants, cafés, and QSR chains</span>
              </li>

              <li className="flex items-center gap-2 bg-gradient-to-r from-[#2F3191]/5 to-white p-3 sm:p-4 rounded-xl border border-[#2F3191]/10 shadow-sm hover:shadow-md hover:border-[#2F3191]/30 transition-all duration-300">
                <span className="text-[#2F3191] font-semibold">•</span>
                <span>Hotels and banquet halls</span>
              </li>

              <li className="flex items-center gap-2 bg-gradient-to-r from-[#2F3191]/5 to-white p-3 sm:p-4 rounded-xl border border-[#2F3191]/10 shadow-sm hover:shadow-md hover:border-[#2F3191]/30 transition-all duration-300">
                <span className="text-[#2F3191] font-semibold">•</span>
                <span>Cloud kitchens and catering units</span>
              </li>

              <li className="flex items-center gap-2 bg-gradient-to-r from-[#2F3191]/5 to-white p-3 sm:p-4 rounded-xl border border-[#2F3191]/10 shadow-sm hover:shadow-md hover:border-[#2F3191]/30 transition-all duration-300">
                <span className="text-[#2F3191] font-semibold">•</span>
                <span>Hospitals and institutional kitchens</span>
              </li>

              <li className="flex items-center gap-2 bg-gradient-to-r from-[#2F3191]/5 to-white p-3 sm:p-4 rounded-xl border border-[#2F3191]/10 shadow-sm hover:shadow-md hover:border-[#2F3191]/30 transition-all duration-300 col-span-1 sm:col-span-2">
                <span className="text-[#2F3191] font-semibold">•</span>
                <span>Food courts and industrial canteens</span>
              </li>
            </ul>

            <p className="pt-2 font-medium text-[#2F3191]">
              Basically — anywhere utensil load is high and downtime isn’t an
              option.
            </p>
          </section>

          {/* Section: What to Check Before You Buy */}
          <section className="space-y-4 pt-4 border-t border-[#2F3191]/10">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#2F3191] border-l-4 border-[#2F3191] pl-4 py-1">
              What to Check Before You Buy
            </h2>

            <p>Before finalizing a purchase, ask your dealer about:</p>

            <ol className="space-y-3 pl-2">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2F3191]/10 text-[#2F3191] text-sm font-semibold flex items-center justify-center">
                  1
                </span>
                <span>
                  <strong>Capacity</strong> — racks or utensils handled per
                  cycle, matched to your peak-hour load
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2F3191]/10 text-[#2F3191] text-sm font-semibold flex items-center justify-center">
                  2
                </span>
                <span>
                  <strong>Cycle time</strong> — faster cycles mean utensils
                  return to service quicker
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2F3191]/10 text-[#2F3191] text-sm font-semibold flex items-center justify-center">
                  3
                </span>
                <span>
                  <strong>Water and electricity consumption</strong> — affects
                  long-term running costs
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2F3191]/10 text-[#2F3191] text-sm font-semibold flex items-center justify-center">
                  4
                </span>
                <span>
                  <strong>Build quality</strong> — stainless steel construction
                  for durability and easy cleaning
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2F3191]/10 text-[#2F3191] text-sm font-semibold flex items-center justify-center">
                  5
                </span>
                <span>
                  <strong>Installation requirements</strong> — plumbing,
                  drainage, electrical, and water-pressure needs
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2F3191]/10 text-[#2F3191] text-sm font-semibold flex items-center justify-center">
                  6
                </span>
                <span>
                  <strong>Spare parts and after-sales service</strong> — even
                  the best machines need maintenance over time
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#2F3191]/10 text-[#2F3191] text-sm font-semibold flex items-center justify-center">
                  7
                </span>
                <span>
                  <strong>Customization</strong> — can the dealer build tables,
                  sinks, and racks to fit your exact kitchen footprint?
                </span>
              </li>
            </ol>
          </section>

          {/* Section: Why Kitchens Choose Royal Equipments */}
          <section className="space-y-4 pt-4 border-t border-[#2F3191]/10">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#2F3191] border-l-4 border-[#2F3191] pl-4 py-1">
              Why Kitchens Across Delhi Choose Royal Equipments as Their
              Dishwasher Dealer in Delhi
            </h2>

            <ul className="space-y-3 pl-2">
              <li className="flex items-start gap-2">
                <span className="text-[#2F3191] font-semibold">•</span>
                <span>
                  <strong>25+ years of industry experience</strong> (since 2001)
                  — we’ve seen kitchen washing setups fail and succeed enough
                  times to know what actually holds up under daily commercial
                  load, not just what looks good on paper
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-[#2F3191] font-semibold">•</span>
                <span>
                  Heavy-duty commercial dishwashers built for real Indian
                  kitchen loads — high oil content, masala residue, and non-stop
                  daily use
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-[#2F3191] font-semibold">•</span>
                <span>
                  Complete washing-area setup under one roof, not just a
                  standalone machine
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-[#2F3191] font-semibold">•</span>
                <span>304-grade stainless steel — food-safe and durable</span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-[#2F3191] font-semibold">•</span>
                <span>
                  Custom sizes and layouts for any kitchen footprint (a cloud
                  kitchen in Pitampura and a banquet kitchen in South Delhi
                  don’t run the same way — the setup shouldn’t be copy-paste
                  either)
                </span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-[#2F3191] font-semibold">•</span>
                <span>Honest pricing with dependable after-sales support</span>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-[#2F3191] font-semibold">•</span>
                <span>Installation guidance and service across Delhi NCR</span>
              </li>
            </ul>
          </section>

          {/* Section: FAQs */}
          <section className="space-y-6 pt-4 border-t border-[#2F3191]/10">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#2F3191] border-l-4 border-[#2F3191] pl-4 py-1">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-[#2F3191]/5 to-white p-5 sm:p-6 rounded-2xl border border-[#2F3191]/10 shadow-sm hover:shadow-md hover:border-[#2F3191]/30 transition-all duration-300">
                <h3 className="text-lg font-semibold text-[#2F3191] mb-2">
                  What does a commercial dishwasher dealer in Delhi do?
                </h3>
                <p>
                  A dealer supplies, installs, and services dishwashing
                  equipment for restaurants, hotels, and institutional kitchens.
                  Royal Equipments goes further by providing the complete
                  stainless steel washing-area setup — landing tables, pot
                  sinks, three-sink units, and pot racks — from a single
                  supplier.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#2F3191]/5 to-white p-5 sm:p-6 rounded-2xl border border-[#2F3191]/10 shadow-sm hover:shadow-md hover:border-[#2F3191]/30 transition-all duration-300">
                <h3 className="text-lg font-semibold text-[#2F3191] mb-2">
                  Which dishwasher is best for a restaurant kitchen?
                </h3>
                <p>
                  For most Indian restaurants, a hood-type (pass-through)
                  dishwasher is the practical choice — it handles 60–80 racks
                  per hour and fits standard kitchen layouts. Heavy pots and
                  kadais should still be washed separately in a dedicated pot
                  wash sink.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#2F3191]/5 to-white p-5 sm:p-6 rounded-2xl border border-[#2F3191]/10 shadow-sm hover:shadow-md hover:border-[#2F3191]/30 transition-all duration-300">
                <h3 className="text-lg font-semibold text-[#2F3191] mb-2">
                  Are these dishwashers suitable for Indian cooking conditions?
                </h3>
                <p>
                  Yes. Machines are selected specifically for high oil content,
                  masala residue, and heavy daily utensil loads, with strong
                  wash cycles and durable pumps — often paired with a pre-rinse
                  unit.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#2F3191]/5 to-white p-5 sm:p-6 rounded-2xl border border-[#2F3191]/10 shadow-sm hover:shadow-md hover:border-[#2F3191]/30 transition-all duration-300">
                <h3 className="text-lg font-semibold text-[#2F3191] mb-2">
                  Can I get a customized dishwashing area for my kitchen?
                </h3>
                <p>
                  Yes. Layouts are designed around your kitchen size, utensil
                  volume, and staff workflow, with stainless steel tables,
                  sinks, and storage fabricated in custom dimensions.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#2F3191]/5 to-white p-5 sm:p-6 rounded-2xl border border-[#2F3191]/10 shadow-sm hover:shadow-md hover:border-[#2F3191]/30 transition-all duration-300">
                <h3 className="text-lg font-semibold text-[#2F3191] mb-2">
                  Does Royal Equipments provide installation and service
                  support?
                </h3>
                <p>
                  Yes — installation guidance, on-site setup support, and
                  after-sales service are available across Delhi NCR, including
                  help with placement, plumbing, electrical requirements, and
                  basic operator training.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Conclusion & CTA */}
          <section className="pt-6 border-t border-[#2F3191]/10">
            <div className="bg-[#2F3191] text-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-xl shadow-[#2F3191]/20 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-semibold border-b border-white/20 pb-2">
                Conclusion
              </h2>

              <p className="text-white/90 leading-relaxed">
                Finding the right dishwasher dealer isn’t just about comparing
                machine prices — it’s about finding a partner who understands
                your kitchen’s real daily pressure and designs the entire
                washing workflow around it. Royal Equipments has been building
                that kind of equipment since 2001, and supplies restaurants,
                hotels, cloud kitchens, and institutional kitchens across Delhi
                NCR with dishwashers and complete stainless steel washing-area
                setups built to last.
              </p>

              <div className="pt-2">
                <Link
                  href="/contact-us"
                  className="inline-block bg-white text-[#2F3191] font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-blue-600 hover:text-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-[17px] lg:text-[19px] no-underline"
                >
                  Get in touch with Royal Equipments
                </Link>{" "}
                <span className="text-white/80">
                  for a free consultation and a quote based on your kitchen’s
                  actual load.
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
