import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Our Products", href: "/our-products" },
    { name: "Our Clients", href: "/our-client" },
    { name: "Brands", href: "/brands" },
    { name: "Blog", href: "/blog" },
    { name: "Contact us", href: "/contact-us" },
  ];

  const productLinks = [
    { name: "Preparation Equipment's", href: "/preparation-equipments" },
    { name: "Cooking Equipment's", href: "/cooking-equipments" },
    { name: "Chapati Equipment's", href: "/chapati-equipments" },
    { name: "Bakery Equipments", href: "/bakery-equipments-manufacturer" },
    { name: "Bar Equipments", href: "/bar-equipments" },
    { name: "View All Products", href: "/our-products" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 z-10 ">
      <div className="max-w-8xl mx-auto px-4 sm:px-8 lg:px-35 pt-10">
        {/* ================= MAIN FOOTER GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-24 gap-4 lg:gap-6">
          {/* ================= ABOUT US (Col span 4) ================= */}
          <div className="md:col-span-6 lg:col-span-7 space-y-3">
            <h3
              className="text-xl font-bold text-white tracking-wide border-b-2 pb-1.5 inline-block"
              style={{ borderColor: "#303293" }}
            >
              About us
            </h3>

            <p className="text-[17px] lg:text-md text-slate-400 leading-relaxed">
              Royal Equipment – A Unit of Kuche India Elevation Pvt. Ltd are the
              leading Manufacturer, Trader, and Supplier of all types of Kitchen
              Equipment such as Cooking Range, Bakery Range, Food Processor,
              Refrigeration System, Exhaust System, Hand Trolley, Dishwashing
              Equipment, Ice Cube Machine, etc.
            </p>

            <Link
              href="/about-us"
              className="inline-block font-semibold text-amber-500 hover:text-amber-400 transition-colors text-[17px] lg:text-md"
            >
              Read More
            </Link>
          </div>

          {/* ================= QUICK LINKS (Reduced Width - Col span 2) ================= */}
          <div className="md:col-span-6 lg:col-span-4 space-y-3">
            <h3
              className="text-xl font-bold text-white tracking-wide border-b-2 pb-1.5 inline-block"
              style={{ borderColor: "#303293" }}
            >
              Quick Links
            </h3>

            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-[17px] lg:text-md text-slate-400 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 mr-1.5 text-slate-500 group-hover:text-blue-400 transition-colors shrink-0" />
                    <span className="truncate">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= PRODUCTS (Moved Left - Col span 2) ================= */}
          <div className="md:col-span-6 lg:col-span-6 space-y-3">
            <h3
              className="text-xl font-bold text-white tracking-wide border-b-2 pb-1.5 inline-block"
              style={{ borderColor: "#303293" }}
            >
              Products
            </h3>

            <ul className="space-y-2">
              {productLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-[17px] lg:text-md text-slate-400 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 mr-1.5 text-slate-500 group-hover:text-blue-400 transition-colors shrink-0" />
                    <span className="truncate">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= OFFICE ADDRESS (Col span 4) ================= */}
          <div className="md:col-span-6 lg:col-span-7 space-y-3">
            <h3
              className="text-xl font-bold text-white tracking-wide border-b-2 pb-1.5 inline-block"
              style={{ borderColor: "#303293" }}
            >
              Office Address
            </h3>

            <div className="space-y-2.5 text-[17px] lg:text-md text-slate-400 leading-relaxed">
              {/* LOCATION */}
              <div className="flex items-center gap-3">
                <div className="w-6 shrink-0 flex items-center justify-center">
                  <MapPin className="w-10 h-10" style={{ color: "#303293" }} />
                </div>

                <span>
                  Plot No. A1, Suraj Vihar, Opposite NSIT College, Near Dwarka
                  Mor Metro Station, New Delhi – 110078, (India)
                </span>
              </div>

              {/* ================= CONTACT AREA ================= */}
              <div className="pt-3 border-t border-slate-800 space-y-4">
                {/* ================= PHONE ================= */}
                <div className="flex items-center gap-3">
                  <div className="w-6 shrink-0 flex items-center justify-center pt-1">
                    <Phone className="w-7 h-7" style={{ color: "#303293" }} />
                  </div>

                  <div className="flex flex-col space-y-1 font-medium">
                    <a
                      href="tel:9310010882"
                      className="text-[16px] lg:text-md7px] hover:text-blue-400 transition-colors"
                    >
                      (+91) 9310010882
                    </a>

                    <a
                      href="tel:9811810882"
                      className="text-[16px] lg:text-md7px] hover:text-blue-400 transition-colors"
                    >
                      (+91) 9811810882
                    </a>

                    <a
                      href="tel:9355055513"
                      className="text-[16px] lg:text-md7px] hover:text-blue-400 transition-colors"
                    >
                      (+91) 9355055513
                    </a>
                  </div>
                </div>

                {/* ================= EMAIL ================= */}
                <div className="flex items-center gap-3">
                  <div className="w-6 shrink-0 flex items-center justify-center pt-1">
                    <Mail className="w-7 h-7" style={{ color: "#303293" }} />
                  </div>

                  <div className="flex flex-col space-y-0 font-medium">
                    <a
                      href="mailto:sales@royalequipments.in"
                      className="text-[16px] lg:text-md7px] hover:text-blue-400 transition-colors break-all"
                    >
                      sales@royalequipments.in
                    </a>

                    <a
                      href="mailto:royalequipments@gmail.com"
                      className="text-[16px] lg:text-md7px] hover:text-blue-400 transition-colors break-all"
                    >
                      royalequipments@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="bg-slate-950 py-4 border-t border-slate-800/80 mt-2">
        <div className="max-w-6xl mx-auto px-4 text-center text-[15px] lg:text-md text-slate-400">
          Copyright © 2026. Powered & Maintained by{" "}
          <Link
            href="https://www.cybertricksmedia.com/"
            target="_blank"
            className="font-semibold text-amber-500"
          >
            CYBERTRICKS Media Pvt Ltd
          </Link>
        </div>
      </div>
    </footer>
  );
}
