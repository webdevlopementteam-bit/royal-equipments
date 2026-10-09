import React from "react";
import Link from "next/link";
import { Phone, CheckCircle2 } from "lucide-react";

export default function CommercialKitchenSection() {
  const equipmentList = [
    {
      name: "Bakery Equipments",
      desc: "Single, Double & Triple Deck Ovens and more",
    },
    {
      name: "Preparation Equipments",
      desc: "Everything you need for smooth kitchen prep",
    },
    {
      name: "Chapati Equipments",
      desc: "Built for high-volume Indian food production",
    },
    {
      name: "Cooking Equipments",
      desc: "Heavy-duty cooking solutions for every cuisine",
    },
    {
      name: "Refrigeration",
      desc: "Reliable cooling systems for food storage and safety",
    },
    {
      name: "Bar Equipments",
      desc: "Professional bar setups for hotels, lounges & restaurants",
    },
    {
      name: "Display Counters",
      desc: "Stylish and functional counters to showcase your products",
    },
    {
      name: "Stainless Steel Table",
      desc: "Hygienic, durable work surfaces for every kitchen",
    },
    {
      name: "Storage Equipments",
      desc: "Smart storage solutions to keep your kitchen organized",
    },
    {
      name: "Trolley Equipments",
      desc: "Easy movement and handling across your kitchen space",
    },
    {
      name: "Service Equipments",
      desc: "Designed for smooth and efficient food service operations",
    },
    {
      name: "Water Cooler & Dispensers",
      desc: "Fresh and hygienic water solutions for staff and guests",
    },
    {
      name: "Imported Equipments",
      desc: "Premium international-grade machinery for elite kitchens",
    },
    {
      name: "Washing Equipments",
      desc: "Industrial washing solutions built for heavy daily use",
    },
    {
      name: "Exhaust / Fresh Air / Gas Pipe Line & Ducting System",
      desc: "Complete ventilation and gas line solutions for safe kitchen environments",
    },
  ];

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white text-slate-800">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header Section */}
        <div className="text-center space-y-6">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
            style={{ color: "#303293" }}
          >
            Commercial Kitchen Equipment Manufacturers – Royal Equipments
          </h1>

          <div className="space-y-4 text-left sm:text-center text-slate-600">
            <p className="text-[17px] sm:text-lg leading-relaxed">
              Running a successful food business starts with one thing — the
              right kitchen equipment. Whether you’re setting up a new
              restaurant, expanding a hotel kitchen, or upgrading your bakery,
              having reliable and efficient machinery makes all the difference.
              That’s where{" "}
              <strong className="font-semibold text-slate-900">
                Royal Equipments
              </strong>{" "}
              comes in.
            </p>
            <p className="text-[17px] sm:text-lg leading-relaxed">
              We are one of the most trusted{" "}
              <strong className="font-semibold text-slate-900">
                Commercial Kitchen Equipment Manufacturers
              </strong>{" "}
              in India, proudly serving food businesses across Delhi and beyond.
              From day one, our goal has been simple — build equipment that
              works as hard as you do.
            </p>
          </div>
        </div>

        {/* Who We Are Card */}
        <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2
            className="text-2xl sm:text-3xl font-bold tracking-tight"
            style={{ color: "#303293" }}
          >
            Who We Are
          </h2>
          <p className="text-[17px] sm:text-lg text-slate-600 leading-relaxed">
            Royal Equipments is a Delhi-based company with years of hands-on
            experience in designing and manufacturing professional-grade
            commercial kitchen equipment. We work closely with chefs,
            restaurateurs, hotel managers, and bakery owners to understand their
            real kitchen challenges — and then we build solutions around them.
          </p>
          <p className="text-[17px] sm:text-lg text-slate-600 leading-relaxed">
            We don’t believe in one-size-fits-all. Every kitchen is unique, and
            our equipment is designed to meet your specific needs, space, and
            budget.
          </p>
        </div>

        {/* What We Manufacture Card */}
        <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="space-y-3">
            <h2
              className="text-2xl sm:text-3xl font-bold tracking-tight"
              style={{ color: "#303293" }}
            >
              What We Manufacture
            </h2>
            <p className="text-[17px] sm:text-lg text-slate-600 leading-relaxed">
              As leading{" "}
              <Link
                href="/our-products"
                className="font-bold  text-blue-500 hover:text-blue-800 transition-opacity"
              >
                Commercial Kitchen Equipment Manufacturers in Delhi
              </Link>
              , our product range covers everything a modern commercial kitchen
              needs:
            </p>
          </div>

          {/* Equipment List Grid */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {equipmentList.map((item, index) => (
              <li
                key={index}
                className="flex items-start space-x-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-[#303293]/40 transition-colors"
              >
                <CheckCircle2
                  className="w-5 h-5 mt-0.5 shrink-0"
                  style={{ color: "#303293" }}
                />
                <span className="text-[17px] text-slate-700 leading-relaxed">
                  <strong className="font-semibold text-slate-900">
                    {item.name}
                  </strong>{" "}
                  — {item.desc}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-[17px] sm:text-lg text-slate-600 leading-relaxed pt-2">
            Every product is manufactured using high-grade materials, tested for
            performance, and built to handle the daily demands of a busy
            commercial kitchen.
          </p>
        </div>

        {/* Call to Action Banner */}
        <div
          className="p-6 sm:p-8 rounded-2xl border border-[#303293]/20 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left transition-all duration-300 hover:shadow-md"
          style={{ backgroundColor: "#30329308" }}
        >
          <div className="space-y-1.5">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Let’s build your dream kitchen together.
            </h3>
            <p className="text-[17px] sm:text-lg text-slate-600 leading-relaxed">
              <Link
                href="/contact-us"
                className="font-bold text-blue-600 hover:text-blue-800 transition-opacity"
              >
                Contact Royal Equipments
              </Link>{" "}
              today for a free consultation and customized quote.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+919310010882" /* Replace with your actual phone number */
              className="inline-flex items-center gap-2 font-semibold px-5 py-3 rounded-xl text-white shadow-sm hover:opacity-95 transition-all transform active:scale-95"
              style={{ backgroundColor: "#303293" }}
            >
              <Phone className="w-5 h-5 animate-pulse" />
              <span>Call Us Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
