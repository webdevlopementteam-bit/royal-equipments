import Image from "next/image";
import Link from "next/link";

export default function Hotel() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 text-[17px] lg:text-[19px] leading-relaxed text-[#333333] bg-white shadow-sm sm:rounded-2xl">
        {/* Article Header */}

        <header className="relative overflow-hidden rounded-2xl border border-[#2F3192]/15 bg-gradient-to-br from-[#2F3192]/[0.08] via-white to-white p-5 sm:p-8 lg:p-10 mb-8 shadow-sm">
          <div className="absolute top-0 left-0 h-full w-1.5 bg-[#2F3192]" />

          <div className="relative">
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-600 font-medium uppercase tracking-wider mb-5">
              <Link
                href="/"
                className="flex items-center gap-2 text-[#2F3192] font-semibold no-underline hover:text-[#232570] transition-colors"
              >
                <span className="w-9 h-9 rounded-full bg-[#2F3192] text-white flex items-center justify-center text-xs font-semibold shadow-md">
                  RE
                </span>
                ROYAL EQUIPMENTS
              </Link>

              <span className="text-[#2F3192]/50">•</span>

              <time dateTime="2026-09-26">May 22, 2026</time>

              <span className="text-[#2F3192]/50">•</span>

              <Link
                href="/category/blog?type=uncategorized"
                className="bg-[#2F3192] text-white px-4 py-1.5 rounded-full text-xs font-semibold no-underline hover:bg-[#232570] transition-colors"
              >
                UNCATEGORIZED
              </Link>
            </div>

            <h1 className="text-3xl sm:text-4xl font-semibold text-[#2F3192] leading-tight tracking-tight mb-5">
              Hotel Kitchen Equipment Manufacturer in Delhi – Royal Equipments
            </h1>

            <div className="w-20 h-1.5 rounded-full bg-[#2F3192]" />
          </div>
        </header>

        {/* Main Content */}
        <div className="space-y-6">
          <p className="mb-6">
            Building a hotel or restaurant kitchen is not just about buying
            equipment — it’s about designing a system that works. A well-planned
            commercial kitchen runs faster, keeps staff productive, maintains
            hygiene, and saves you serious money over the years. Most failed
            kitchen setups have one thing in common: poor planning and the wrong
            supplier.
          </p>

          <p className="mb-8">
            That’s exactly the gap Royal Equipments fills. As a trusted{" "}
            <Link
              href="/about-us"
              className="text-[#0056b3] font-bold  hover:text-blue-800 transition-colors "
            >
              hotel kitchen equipment manufacturer in Delhi
            </Link>
            , we deliver complete commercial kitchen solutions for hotels,
            restaurants, cafés, cloud kitchens, bakeries, resorts, and catering
            businesses — from the first layout sketch to the day your kitchen
            goes live.
          </p>
        </div>
        {/* Complete Commercial Kitchen Solutions */}
        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222] mt-10 mb-5 leading-tight">
            <span className="inline-block w-1.5 h-8 bg-[#2F3192] rounded-full mr-3 align-middle"></span>
            Complete Commercial Kitchen Solutions — Under One Roof
          </h2>

          <p className="mb-6">
            <Link
              href="/"
              className="text-[#0056b3] font-bold no-underline hover:text-blue-800 transition-colors "
            >
              Royal Equipments
            </Link>{" "}
            handles every stage of your kitchen project: consultation, layout
            planning, in-house manufacturing, installation, and long-term
            maintenance. No running around between five different vendors. No
            mismatched equipment. No timeline confusion.
          </p>

          <p className="mb-8">
            Every project is custom-designed around your business type, kitchen
            footprint, menu, and daily customer volume — because a 50-seat café
            and a 300-cover banquet kitchen need very different setups.
          </p>
        </section>
        {/* Equipment List */}
        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222] mt-10 mb-5 leading-tight">
            <span className="inline-block w-1.5 h-8 bg-[#2F3192] rounded-full mr-3 align-middle"></span>
            Commercial Kitchen Equipment We Manufacture
          </h2>

          <p className="mb-6">
            We manufacture and supply a complete range of hotel and restaurant
            kitchen equipment under one roof:
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 list-none p-0">
            <li className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50/50 transition-colors">
              <strong className="block text-[#222222] mb-1">
                Bakery Equipments
              </strong>
              — Planetary mixers, deck ovens, proofers, sheeters, and complete
              bakery setups
            </li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50/50 transition-colors">
              <strong className="block text-[#222222] mb-1">
                Preparation Equipments
              </strong>
              — Vegetable cutters, dough mixers, grinders, and food prep
              machines
            </li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50/50 transition-colors">
              <strong className="block text-[#222222] mb-1">
                Chapati Equipments
              </strong>
              — Chapati making machines, roti plants, and atta kneaders for
              high-volume Indian kitchens
            </li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50/50 transition-colors">
              <strong className="block text-[#222222] mb-1">
                Cooking Equipments
              </strong>
              — Commercial cooking ranges, burners, deep fryers, griddles,
              Chinese ranges, and tandoors
            </li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50/50 transition-colors">
              <strong className="block text-[#222222] mb-1">
                Refrigeration
              </strong>
              — Under-counter chillers, walk-in cold rooms, display chillers,
              and deep freezers
            </li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50/50 transition-colors">
              <strong className="block text-[#222222] mb-1">
                Bar Equipments
              </strong>
              — Bar counters, ice machines, glass chillers, and beverage
              stations
            </li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50/50 transition-colors">
              <strong className="block text-[#222222] mb-1">
                Display Counters
              </strong>
              — Hot, cold, and ambient display counters for restaurants and
              sweet shops
            </li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50/50 transition-colors">
              <strong className="block text-[#222222] mb-1">
                Stainless Steel Tables
              </strong>
              — Custom-built work tables, prep stations, and plating counters
            </li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50/50 transition-colors">
              <strong className="block text-[#222222] mb-1">
                Storage Equipments
              </strong>
              — Storage racks, pot racks, ingredient bins, and dry storage units
            </li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50/50 transition-colors">
              <strong className="block text-[#222222] mb-1">
                Trolley Equipments
              </strong>
              — Service trolleys, utility trolleys, and food transport trolleys
            </li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50/50 transition-colors">
              <strong className="block text-[#222222] mb-1">
                Service Equipments
              </strong>
              — Buffet counters, chafing dishes, and food service units
            </li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50/50 transition-colors">
              <strong className="block text-[#222222] mb-1">
                Water Cooler & Dispensers
              </strong>
              — Commercial water coolers and hot/cold dispensers
            </li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50/50 transition-colors">
              <strong className="block text-[#222222] mb-1">
                Imported Equipments
              </strong>
              — Premium imported kitchen machines for specialized requirements
            </li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50/50 transition-colors">
              <strong className="block text-[#222222] mb-1">
                Washing Equipments
              </strong>
              — Commercial dishwashers, pot wash sinks, three-sink units, and
              dish landing tables
            </li>
            <li className="sm:col-span-2 rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-blue-300 hover:bg-blue-50/50 transition-colors">
              <strong className="block text-[#222222] mb-1">
                Exhaust / Fresh Air / Gas Pipe Line & Ducting Systems
              </strong>
              — Complete kitchen ventilation, exhaust hoods, fresh air supply,
              and gas line installation
            </li>
          </ul>

          <p className="mb-8 rounded-xl border-l-4 border-[#2F3192] bg-blue-50 p-5">
            All equipment is built from premium food-grade stainless steel —
            durable, rust-resistant, hygienic, and made to survive years of
            heavy commercial use.
          </p>
        </section>
        {/* Common Kitchen Problems */}
        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222] mt-10 mb-5 leading-tight">
            <span className="inline-block w-1.5 h-8 bg-[#2F3192] rounded-full mr-3 align-middle"></span>
            Common Kitchen Problems We Solve
          </h2>

          <p className="mb-6">
            Most hospitality businesses lose money in the kitchen long before
            they realise it. Here are the issues we fix every day:
          </p>

          <div className="space-y-4 mb-8">
            <div className="rounded-xl border border-slate-200 p-4 sm:p-5 hover:border-blue-300 hover:shadow-sm transition-all">
              <p>
                <strong className="text-[#222222]">
                  Unplanned Kitchen Layouts
                </strong>{" "}
                — Wrong placement of cooking, prep, and washing zones creates
                bottlenecks during peak hours and slows your entire service
                down.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4 sm:p-5 hover:border-blue-300 hover:shadow-sm transition-all">
              <p>
                <strong className="text-[#222222]">
                  Low-Quality Equipment
                </strong>{" "}
                — Cheap equipment breaks down often, leads to high repair bills,
                and disrupts daily operations. The “savings” disappear within 6
                months.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4 sm:p-5 hover:border-blue-300 hover:shadow-sm transition-all">
              <p>
                <strong className="text-[#222222]">Poor Ventilation</strong> —
                Bad exhaust systems trap heat, smoke, and oil. Staff burnout,
                fire risk, and FSSAI compliance issues follow.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4 sm:p-5 hover:border-blue-300 hover:shadow-sm transition-all">
              <p>
                <strong className="text-[#222222]">Delayed Installation</strong>{" "}
                — Many suppliers miss deadlines, pushing back your launch and
                burning your pre-opening budget.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4 sm:p-5 hover:border-blue-300 hover:shadow-sm transition-all">
              <p>
                <strong className="text-[#222222]">
                  No After-Sales Support
                </strong>{" "}
                — Equipment without service backup becomes a liability the
                moment something goes wrong.
              </p>
            </div>
          </div>

          <p className="mb-8">
            Royal Equipments solves these problems through proper planning,
            durable in-house manufacturing, and a dedicated support team.
          </p>
        </section>
        {/* Why Choose Royal Equipments */}
        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222] mt-10 mb-5 leading-tight">
            <span className="inline-block w-1.5 h-8 bg-[#2F3192] rounded-full mr-3 align-middle"></span>
            Why Hotels & Restaurants Choose Royal Equipments
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-5">
              <p>
                <strong className="text-[#222222] block mb-2">
                  Custom Kitchen Design
                </strong>{" "}
                Our experts design your kitchen around real workflow — not
                generic templates. Cooking, prep, washing, and storage zones
                placed for maximum efficiency.
              </p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-5">
              <p>
                <strong className="text-[#222222] block mb-2">
                  Premium Quality Manufacturing
                </strong>{" "}
                We use 304-grade stainless steel and modern manufacturing
                techniques. Strong welds, smooth finishes, and equipment built
                to last.
              </p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-5">
              <p>
                <strong className="text-[#222222] block mb-2">
                  Complete Installation Support
                </strong>{" "}
                Our technical team handles equipment placement, ventilation
                setup, gas and electrical connections, and operational testing.
              </p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-5">
              <p>
                <strong className="text-[#222222] block mb-2">
                  Direct Manufacturer Pricing
                </strong>{" "}
                You buy direct from the manufacturer — no middleman markups, no
                inflated costs.
              </p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-5">
              <p>
                <strong className="text-[#222222] block mb-2">
                  On-Time Project Delivery
                </strong>{" "}
                We treat your launch date like our deadline. Fast turnaround,
                professional execution.
              </p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-5">
              <p>
                <strong className="text-[#222222] block mb-2">
                  Long-Term After-Sales Service
                </strong>{" "}
                Maintenance support, spare parts, and service across Delhi NCR
                and PAN India.
              </p>
            </div>
          </div>
        </section>
        {/* Industries We Serve */}
        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222] mt-10 mb-5 leading-tight">
            <span className="inline-block w-1.5 h-8 bg-[#2F3192] rounded-full mr-3 align-middle"></span>
            Industries We Serve
          </h2>

          <p className="mb-6">
            Royal Equipments commercial kitchen solutions are used by:
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 list-none p-0">
            <li className="flex items-center gap-3 rounded-lg bg-slate-50 border border-slate-100 px-4 py-3">
              <span className="w-2 h-2 rounded-full bg-[#2F3192] shrink-0"></span>
              Hotels and banquet kitchens
            </li>
            <li className="flex items-center gap-3 rounded-lg bg-slate-50 border border-slate-100 px-4 py-3">
              <span className="w-2 h-2 rounded-full bg-[#2F3192] shrink-0"></span>
              Restaurants and QSR chains
            </li>
            <li className="flex items-center gap-3 rounded-lg bg-slate-50 border border-slate-100 px-4 py-3">
              <span className="w-2 h-2 rounded-full bg-[#2F3192] shrink-0"></span>
              Cafés and bistros
            </li>
            <li className="flex items-center gap-3 rounded-lg bg-slate-50 border border-slate-100 px-4 py-3">
              <span className="w-2 h-2 rounded-full bg-[#2F3192] shrink-0"></span>
              Cloud kitchens and dark kitchens
            </li>
            <li className="flex items-center gap-3 rounded-lg bg-slate-50 border border-slate-100 px-4 py-3">
              <span className="w-2 h-2 rounded-full bg-[#2F3192] shrink-0"></span>
              Bakeries and patisseries
            </li>
            <li className="flex items-center gap-3 rounded-lg bg-slate-50 border border-slate-100 px-4 py-3">
              <span className="w-2 h-2 rounded-full bg-[#2F3192] shrink-0"></span>
              Resorts and clubs
            </li>
            <li className="flex items-center gap-3 rounded-lg bg-slate-50 border border-slate-100 px-4 py-3">
              <span className="w-2 h-2 rounded-full bg-[#2F3192] shrink-0"></span>
              Food courts and food trucks
            </li>
            <li className="flex items-center gap-3 rounded-lg bg-slate-50 border border-slate-100 px-4 py-3">
              <span className="w-2 h-2 rounded-full bg-[#2F3192] shrink-0"></span>
              Catering and event businesses
            </li>
            <li className="flex items-center gap-3 rounded-lg bg-slate-50 border border-slate-100 px-4 py-3">
              <span className="w-2 h-2 rounded-full bg-[#2F3192] shrink-0"></span>
              Institutional kitchens (hospitals, schools, hostels)
            </li>
            <li className="flex items-center gap-3 rounded-lg bg-slate-50 border border-slate-100 px-4 py-3">
              <span className="w-2 h-2 rounded-full bg-[#2F3192] shrink-0"></span>
              Industrial canteens
            </li>
          </ul>

          <p className="mb-8">
            Whatever the scale, we design a kitchen that improves productivity,
            safety, and food quality.
          </p>
        </section>
        {/* Delhi NCR */}
        <section className="mt-12 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-5 sm:p-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222] mt-2 mb-5 leading-tight">
            <span className="inline-block w-1.5 h-8 bg-[#2F3192] rounded-full mr-3 align-middle"></span>
            Trusted Hotel Kitchen Equipment Manufacturer Across Delhi NCR
          </h2>

          <p className="mb-6">
            Royal Equipments has built its reputation on one simple thing —
            delivering kitchens that actually work in real service. From compact
            cloud kitchen setups in Pitampura to large hotel kitchens across
            Delhi NCR, we focus on practical, efficient, and durable solutions.
          </p>

          <p className="mb-6">
            Whether you’re opening a new restaurant, upgrading an existing hotel
            kitchen, or expanding to multiple cloud kitchen locations, we’re the
            manufacturing partner that handles it end-to-end.
          </p>

          <p className="mb-2 flex flex-wrap items-start gap-2">
            <span>📞</span>
            <span>
              <Link
                href="/contact-us"
                className="text-[#0056b3] font-bold no-underline hover:text-blue-800 transition-colors "
              >
                Get a free kitchen consultation today.
              </Link>{" "}
              Share your kitchen size, menu, and budget — we’ll send a
              customized layout and quote.
            </span>
          </p>
        </section>
        {/* FAQ Section */}
        <section className="mt-14">
          <div className="mb-8 border-b border-slate-200 pb-5">
            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              FAQs
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222] mt-2 leading-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 hover:border-blue-300 hover:shadow-sm transition-all">
              <h3 className="font-bold text-lg lg:text-xl text-[#222222] mb-3">
                What does a hotel kitchen equipment manufacturer do?
              </h3>
              <p>
                A hotel kitchen equipment manufacturer designs, fabricates, and
                supplies commercial kitchen equipment for hotels, restaurants,
                cafés, and other food businesses. Royal Equipments goes further
                by also offering kitchen layout planning, installation,
                ventilation setup, and after-sales service — making it a
                complete single-vendor solution.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 hover:border-blue-300 hover:shadow-sm transition-all">
              <h3 className="font-bold text-lg lg:text-xl text-[#222222] mb-3">
                Why is commercial kitchen planning important before buying
                equipment?
              </h3>
              <p>
                Proper kitchen planning decides how fast your staff can work,
                how much food you can produce per hour, and how safe the kitchen
                is. Bad planning leads to crossed workflows, wasted space, and
                operational delays during peak hours — problems that no amount
                of expensive equipment can fix later.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 hover:border-blue-300 hover:shadow-sm transition-all">
              <h3 className="font-bold text-lg lg:text-xl text-[#222222] mb-3">
                Which material is best for hotel kitchen equipment?
              </h3>
              <p>
                Food-grade stainless steel, typically 304 grade, is the best
                material for commercial kitchen equipment. It is rust-resistant,
                hygienic, easy to clean, non-reactive with food, and durable
                enough to handle years of heavy commercial use. Royal Equipments
                uses 304 SS across its entire product range.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 hover:border-blue-300 hover:shadow-sm transition-all">
              <h3 className="font-bold text-lg lg:text-xl text-[#222222] mb-3">
                How much does it cost to set up a hotel kitchen in Delhi?
              </h3>
              <p>
                A basic restaurant kitchen setup in Delhi typically starts
                around ₹5–8 lakh, while a full hotel kitchen with bakery,
                refrigeration, and exhaust systems can range from ₹20 lakh to
                over ₹1 crore. The exact cost depends on kitchen size, menu,
                equipment quality, and ventilation requirements. Royal
                Equipments provides custom quotes based on your project.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 hover:border-blue-300 hover:shadow-sm transition-all">
              <h3 className="font-bold text-lg lg:text-xl text-[#222222] mb-3">
                Does Royal Equipments provide complete kitchen setup services?
              </h3>
              <p>
                Yes. Royal Equipments offers end-to-end commercial kitchen
                solutions — including site consultation, layout design,
                equipment manufacturing, installation, ventilation setup,
                plumbing coordination, and after-sales support. You deal with
                one team from planning to launch day.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 hover:border-blue-300 hover:shadow-sm transition-all">
              <h3 className="font-bold text-lg lg:text-xl text-[#222222] mb-3">
                Do you manufacture customized commercial kitchen equipment?
              </h3>
              <p>
                Yes. Royal Equipments specializes in custom commercial kitchen
                equipment built to your exact dimensions, menu, and workflow
                requirements. From custom work tables to specialized cooking
                ranges, every piece can be fabricated to fit your specific
                kitchen layout.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 hover:border-blue-300 hover:shadow-sm transition-all">
              <h3 className="font-bold text-lg lg:text-xl text-[#222222] mb-3">
                How long does it take to set up a commercial kitchen?
              </h3>
              <p>
                A standard restaurant kitchen takes around 3–6 weeks from order
                confirmation to installation. Larger hotel kitchens or
                multi-location cloud kitchen projects can take 6–12 weeks
                depending on scope. Royal Equipments works on fixed timelines
                and updates you at every stage.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 hover:border-blue-300 hover:shadow-sm transition-all">
              <h3 className="font-bold text-lg lg:text-xl text-[#222222] mb-3">
                Which businesses can use Royal Equipments’ commercial kitchen
                equipment?
              </h3>
              <p>
                Royal Equipments supplies equipment to hotels, restaurants,
                cafés, cloud kitchens, bakeries, resorts, food courts, catering
                businesses, hospitals, schools, and industrial canteens. Any
                business with a commercial-scale food operation is the right
                fit.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 hover:border-blue-300 hover:shadow-sm transition-all">
              <h3 className="font-bold text-lg lg:text-xl text-[#222222] mb-3">
                How do I choose the right kitchen equipment for my restaurant?
              </h3>
              <p>
                Start with your menu — it decides the cooking equipment you
                need. Then factor in daily customer volume, kitchen size,
                available power and gas supply, and your team size. Royal
                Equipments’ consultants help you make these choices and avoid
                buying equipment you don’t actually need.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 hover:border-blue-300 hover:shadow-sm transition-all">
              <h3 className="font-bold text-lg lg:text-xl text-[#222222] mb-3">
                Why choose Royal Equipments as a hotel kitchen equipment
                manufacturer in Delhi?
              </h3>
              <p>
                Royal Equipments offers in-house manufacturing, custom kitchen
                design, food-grade stainless steel construction, direct
                manufacturer pricing, on-time delivery, and long-term service
                support across Delhi NCR. You get a complete commercial kitchen
                partner — not just an equipment seller.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
