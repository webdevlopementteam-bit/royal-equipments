"use client";
import React from "react";
import Link from "next/link";
import {
  Phone,
  ArrowRight,
  ArrowUpRight,
  Building2,
  UtensilsCrossed,
  ShieldCheck,
  Settings2,
  Sparkles,
  ChevronRight,
  CookingPot,
  CheckCircle2,
  WashingMachine,
  Truck,
  CakeSlice,
  Salad,
  Wheat,
  Snowflake,
  GlassWater,
  Monitor,
  Archive,
  Martini,
  Globe2,
  Fan,
} from "lucide-react";
import { GiTable } from "react-icons/gi";

export default function CommercialKitchenSection() {
  const equipmentList = [
    {
      name: "Bakery Equipments",
      desc: "Single, Double & Triple Deck Ovens and more",
      icon: CakeSlice,
      slug: "/bakery-equipments-manufacturer",
    },
    {
      name: "Preparation Equipments",
      desc: "Everything you need for smooth kitchen prep",
      icon: Salad,
      slug: "/preparation-equipments",
    },
    {
      name: "Chapati Equipments",
      desc: "Built for high-volume Indian food production",
      icon: Wheat,
      slug: "/chapati-equipments",
    },
    {
      name: "Cooking Equipments",
      desc: "Heavy-duty cooking solutions for every cuisine",
      icon: CookingPot,
      slug: "/cooking-equipments",
    },
    {
      name: "Refrigeration",
      desc: "Reliable cooling systems for food storage and safety",
      icon: Snowflake,
      slug: "/refrigeration",
    },
    {
      name: "Bar Equipments",
      desc: "Professional bar setups for hotels, lounges & restaurants",
      icon: Martini,
      slug: "/bar-equipments",
    },
    {
      name: "Display Counters",
      desc: "Stylish and functional counters to showcase your products",
      icon: Monitor,
      slug: "/cake-pastry-display-counter-manufacturers",
    },
    {
      name: "Stainless Steel Table",
      desc: "Hygienic, durable work surfaces for every kitchen",
      icon: GiTable,
      slug: "/stainless-steel-table",
    },
    {
      name: "Storage Equipments",
      desc: "Smart storage solutions to keep your kitchen organized",
      icon: Archive,
      slug: "/storage-equipments",
    },
    {
      name: "Trolley Equipments",
      desc: "Easy movement and handling across your kitchen space",
      icon: Truck,
      slug: "/trolley-equipments",
    },
    {
      name: "Service Equipments",
      desc: "Designed for smooth and efficient food service operations",
      icon: UtensilsCrossed,
      slug: "/service-equipments",
    },
    {
      name: "Water Cooler & Dispensers",
      desc: "Fresh and hygienic water solutions for staff and guests",
      icon: GlassWater,
      slug: "/water-cooler-manufacturer",
    },
    {
      name: "Imported Equipments",
      desc: "Premium international-grade machinery for elite kitchens",
      icon: Globe2,
      slug: "/imported-equipments",
    },
    {
      name: "Washing Equipments",
      desc: "Industrial washing solutions built for heavy daily use",
      icon: WashingMachine,
      slug: "/dishwasher-dealer-in-delhi",
    },
    {
      name: "Exhaust / Fresh Air / Gas Pipe Line & Ducting System",
      desc: "Complete ventilation and gas line solutions for safe kitchen environments",
      icon: Fan,
      slug: "/exhaust-fresh-air-gas-pipe-line-ducting-system",
    },
  ];

  const brand = "#2F3191";

  return (
    <section className="relative isolate overflow-hidden bg-[#f7f8fc] px-4 py-10 text-slate-800 sm:px-6  lg:px-10 ">
      {/* Background Decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-20 -z-10 h-96 w-96 rounded-full blur-3xl"
        style={{ backgroundColor: `${brand}12` }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-32 -z-10 h-96 w-96 rounded-full blur-3xl"
        style={{ backgroundColor: "#818cf810" }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* HERO SECTION */}
        <div className="relative grid grid-cols-1 items-center gap-12 overflow-hidden py-6 lg:grid-cols-12 lg:gap-14">
          {/* LEFT CONTENT */}
          <div className="relative lg:col-span-7">
            {/* Badge */}
            <div
              className="mb-7 inline-flex items-center gap-3 rounded-full border bg-white py-2.5 pl-2.5 pr-5 shadow-[0_6px_25px_rgba(47,49,146,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ borderColor: `${brand}25`, color: brand }}
            >
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full"
                style={{ backgroundColor: `${brand}10` }}
              >
                <Sparkles className="h-5 w-5" />
              </span>

              <span className="text-xs font-extrabold uppercase tracking-[0.16em] sm:text-sm">
                Commercial Kitchen Solutions
              </span>
            </div>

            {/* Unique Premium Heading */}
            <h1
              className="max-w-4xl text-3xl font-semibold leading-[1.25] tracking-[-0.045em] sm:text-5xl lg:text-[3.65rem] lg:leading-[1.16]"
              style={{ color: brand }}
            >
              Commercial Kitchen Equipment Manufacturers{" "}
              <span className="relative mt-2 inline-block pb-4 font-bold tracking-[-0.04em]">
                – Royal Equipments
                {/* Signature Brand Accent */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-1 left-0 h-[4px] w-[48%] rounded-full transition-all duration-500 ease-out hover:w-full sm:h-[5px]"
                  style={{
                    background: "linear-gradient(90deg, #2F3192, #7779D2)",
                  }}
                />
                {/* Unique Decorative Dot */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-[50%] h-2 w-2 rounded-full"
                  style={{ backgroundColor: "#2F3192" }}
                />
              </span>
            </h1>

            {/* Description */}
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
              <p>
                Running a successful food business starts with one thing — the
                right kitchen equipment. Whether you’re setting up a new
                restaurant, expanding a hotel kitchen, or upgrading your bakery,
                having reliable and efficient machinery makes all the
                difference. That’s where{" "}
                <strong className="font-extrabold text-slate-900">
                  Royal Equipments
                </strong>{" "}
                comes in.
              </p>

              <p>
                We are one of the most trusted{" "}
                <Link
                  href={"/our-products"}
                  className="font-extrabold"
                  style={{ color: brand }}
                >
                  Commercial Kitchen Equipment Manufacturers
                </Link>{" "}
                in India, proudly serving food businesses across Delhi and
                beyond. From day one, our goal has been simple — build equipment
                that works as hard as you do.
              </p>
            </div>
            {/* Feature Highlights */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                "Professional Kitchen Equipment",
                "Customized Kitchen Solutions",
                "Commercial-Grade Equipment",
                "Solutions for Every Kitchen",
              ].map((feature) => (
                <div
                  key={feature}
                  className="group flex items-center gap-3.5 rounded-2xl border border-slate-200/80 bg-white px-4 py-4 shadow-[0_4px_18px_rgba(15,23,42,0.035)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(47,49,146,0.12)]"
                  style={{
                    borderColor: undefined,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${brand}60`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "";
                  }}
                >
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:bg-[#2F3192]"
                    style={{ backgroundColor: `${brand}0D` }}
                  >
                    <CheckCircle2
                      className="h-5 w-5 transition-colors duration-300 group-hover:text-white"
                      style={{ color: brand }}
                    />
                  </span>

                  <span className="text-sm font-bold leading-6 text-slate-700 transition-colors duration-300 group-hover:text-[#2F3192]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            {/* CTA Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/our-products"
                className="group relative inline-flex min-h-14 items-center justify-center gap-3 overflow-hidden rounded-2xl px-7 py-4 text-sm font-bold text-white shadow-[0_10px_25px_rgba(47,49,146,0.22)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(47,49,146,0.3)] sm:text-base"
                style={{
                  background:
                    "linear-gradient(135deg, #4143B0, #2F3192 65%, #202266)",
                }}
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative">Explore Our Products</span>

                <ArrowRight className="relative h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>

              <Link
                href="/contact-us"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border-2 border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2F3192] hover:text-[#2F3192] hover:shadow-lg sm:text-base"
              >
                Get in Touch
                <ArrowUpRight
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  style={{ color: brand }}
                />
              </Link>
            </div>
          </div>

          {/* COMPANY PANEL */}
          <div className="relative mt-2 lg:col-span-5 lg:mt-0">
            {/* Decorative Corners */}
            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 h-24 w-24 rounded-tr-3xl border-r-2 border-t-2 sm:-right-5 sm:-top-5 sm:h-32 sm:w-32"
              style={{ borderColor: brand }}
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-3 -left-3 h-24 w-24 rounded-bl-3xl border-b-2 border-l-2 sm:-bottom-5 sm:-left-5 sm:h-32 sm:w-32"
              style={{ borderColor: brand }}
            />

            {/* Main Company Card */}
            <div
              className="relative overflow-hidden rounded-[2rem] p-7 text-white shadow-[0_25px_65px_rgba(47,49,146,0.25)] transition-shadow duration-500 hover:shadow-[0_30px_80px_rgba(47,49,146,0.32)] sm:p-9 lg:p-10"
              style={{
                background:
                  "linear-gradient(145deg, #4143B0 0%, #2F3192 50%, #202266 100%)",
              }}
            >
              {/* Decorative Circles */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border-[35px] border-white/[0.07]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full border-[40px] border-white/[0.06]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-bl from-white/[0.05] to-transparent"
              />

              <div className="relative">
                {/* Brand Header */}
                <div className="mb-7 flex items-center justify-between gap-3">
                  <div className="flex h-[72px] w-[72px] items-center justify-center rounded-2xl border border-white/25 bg-white text-[#2F3192] shadow-lg transition-transform duration-300 hover:rotate-3 hover:scale-105">
                    <Building2 className="h-9 w-9" strokeWidth={1.6} />
                  </div>

                  <div className="rounded-full border border-white/25 bg-white/10 px-3 py-2 text-xs font-bold tracking-wide text-white/95 shadow-sm backdrop-blur-sm sm:px-4">
                    ROYAL EQUIPMENTS
                  </div>
                </div>

                {/* Section Label */}
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-indigo-200">
                  About Our Company
                </p>

                {/* Company Heading */}
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                  Who We Are
                </h2>

                <div className="mt-5 flex items-center gap-2">
                  <span className="h-1.5 w-14 rounded-full bg-white" />
                  <span className="h-1.5 w-5 rounded-full bg-indigo-300" />
                </div>

                {/* Company Description */}
                <p className="mt-6 text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
                  Royal Equipments is a Delhi-based company with years of
                  hands-on experience in designing and manufacturing
                  professional-grade commercial kitchen equipment. We work
                  closely with chefs, restaurateurs, hotel managers, and bakery
                  owners to understand their real kitchen challenges — and then
                  we build solutions around them.
                </p>

                <div className="my-7 h-px bg-gradient-to-r from-white/35 via-white/15 to-transparent" />

                {/* Tailored Solutions */}
                <div className="group rounded-2xl border border-white/15 bg-white/[0.07] p-4 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.12] sm:p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 transition-transform duration-300 group-hover:scale-105">
                      <Settings2 className="h-6 w-6" />
                    </div>

                    <div>
                      <h3 className="font-bold text-white">
                        Tailored for Your Business
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-white/80 sm:text-base">
                        We don’t believe in one-size-fits-all. Every kitchen is
                        unique, and our equipment is designed to meet your
                        specific needs, space, and budget.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Trust Indicator */}
                <div className="mt-8 flex items-center gap-3 border-t border-white/20 pt-6">
                  <ShieldCheck className="h-6 w-6 shrink-0 text-indigo-200" />

                  <span className="text-sm font-semibold text-white/95">
                    Professional Kitchen Equipment
                  </span>

                  <ArrowUpRight className="ml-auto h-5 w-5 text-indigo-200 transition-transform duration-300 hover:-translate-y-1 hover:translate-x-1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* EQUIPMENT SECTION */}
        <div className="mt-24 sm:mt-32">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
            <div
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] shadow-sm sm:text-sm"
              style={{ color: brand }}
            >
              <UtensilsCrossed className="h-4 w-4" />
              Our Product Categories
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Complete Solutions for{" "}
              <span style={{ color: brand }}>Modern Kitchens</span>
            </h2>

            <div
              className="mx-auto mt-6 h-1.5 w-20 rounded-full"
              style={{
                background: "linear-gradient(90deg, #2F3191, #8587E8)",
              }}
            />

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Explore our comprehensive range of commercial kitchen equipment,
              designed to support professional food preparation, cooking,
              storage, and service operations.
            </p>
          </div>

          {/* Equipment Cards */}
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6">
            {equipmentList.map((item, index) => {
              const Icon = item.icon;

              return (
                <Link
                  href={item.slug}
                  key={item.name}
                  className="group relative isolate flex min-h-[270px] flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.035)] transition-all duration-500 ease-out hover:-translate-y-2 hover:border-indigo-200 hover:shadow-[0_24px_55px_rgba(47,49,145,0.13)] sm:rounded-3xl sm:p-7"
                >
                  {/* Animated Top Border */}
                  <div
                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                    style={{
                      background:
                        "linear-gradient(90deg, #2F3191, #8587E8, #2F3191)",
                    }}
                  />

                  {/* Background Glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                    style={{ backgroundColor: "#2F319118" }}
                  />

                  {/* Background Number */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-2 top-5 select-none text-7xl font-black leading-none tracking-tighter text-indigo-900/[0.045] transition-all duration-500 group-hover:-translate-x-2 group-hover:text-indigo-900/[0.09] sm:text-8xl"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon and Badge */}
                  <div className="relative flex items-start justify-between gap-3">
                    <div
                      className="relative flex h-[66px] w-[66px] shrink-0 items-center justify-center overflow-hidden rounded-2xl text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl"
                      style={{
                        background:
                          "linear-gradient(145deg, #5557C5, #2F3191 65%, #22246F)",
                        border: "none",
                      }}
                    >
                      <div className="absolute inset-0 translate-y-full bg-white/15 transition-transform duration-500 group-hover:translate-y-0" />

                      <Icon className="relative h-8 w-8" strokeWidth={1.7} />
                    </div>

                    <span
                      className="relative inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.12em] sm:text-[11px]"
                      style={{
                        color: brand,
                        borderColor: `${brand}15`,
                        backgroundColor: `${brand}06`,
                      }}
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: brand }}
                      />
                      Equipment
                    </span>
                  </div>

                  {/* Equipment Name and Description */}
                  <div className="relative mt-7 flex-1">
                    <h3 className="max-w-[95%] text-lg font-extrabold leading-7 tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-[#2F3191] sm:text-xl">
                      {item.name}
                    </h3>

                    <p className="mt-3 max-w-[98%] text-sm leading-7 text-slate-500 transition-colors duration-300 group-hover:text-slate-600 sm:text-[15px]">
                      {item.desc}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-slate-400 transition-colors duration-300 group-hover:text-indigo-700">
                      Category {String(index + 1).padStart(2, "0")}
                    </span>

                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#2F3191] group-hover:bg-[#2F3191] group-hover:text-white"
                      style={{
                        color: brand,
                        borderColor: `${brand}20`,
                        backgroundColor: `${brand}06`,
                      }}
                      aria-hidden="true"
                    >
                      <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-[3px] w-0 transition-all duration-500 group-hover:w-full"
                    style={{
                      background: "linear-gradient(90deg, #2F3191, #8587E8)",
                    }}
                  />
                </Link>
              );
            })}
          </ul>
        </div>
        {/* CONTACT BANNER */}
        <div
          className="relative mt-20 overflow-hidden rounded-3xl shadow-[0_25px_70px_rgba(32,34,102,0.22)] sm:mt-28"
          style={{
            background:
              "linear-gradient(120deg, #202266 0%, #2F3191 55%, #4143B0 100%)",
          }}
        >
          {/* Decorative Elements */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border-[45px] border-white/[0.06]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-36 right-[30%] h-72 w-72 rounded-full border-[40px] border-white/[0.04]"
          />

          <div className="relative flex flex-col items-center justify-between gap-8 p-7 sm:p-10 lg:flex-row lg:p-14">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm sm:text-sm">
                <Sparkles className="h-4 w-4" />
                Royal Equipments
              </div>

              <h3 className="text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                Let’s build your dream kitchen together.
              </h3>

              <p className="mt-5 text-base leading-7 text-white/85 sm:text-lg">
                <Link
                  href="/contact-us"
                  className="font-bold text-white underline decoration-white/60 underline-offset-4 transition-colors hover:text-indigo-200"
                >
                  Contact Royal Equipments
                </Link>{" "}
                today for a free consultation and customized quote.
              </p>
            </div>

            {/* Call Button */}
            <div className="shrink-0">
              <a
                href="tel:+919310010882"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 font-bold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl active:scale-95 sm:px-8"
                style={{ color: brand }}
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50">
                  <Phone className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                </span>

                <span>Call Us Now</span>

                <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
