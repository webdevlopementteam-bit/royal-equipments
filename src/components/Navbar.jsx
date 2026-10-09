"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Mail,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const products = [
  {
    name: "Bakery Equipments",
    route: "/bakery-equipments-manufacturer",
  },
  {
    name: "Preparation Equipments",
    route: "/preparation-equipments",
  },
  {
    name: "Chapati Equipments",
    route: "/chapati-equipments",
  },
  {
    name: "Cooking Equipments",
    route: "/cooking-equipments",
  },
  {
    name: "Refrigeration",
    route: "/refrigeration",
  },
  {
    name: "Bar Equipments",
    route: "/bar-equipments",
  },
  {
    name: "Display Counters",
    route: "/cake-pastry-display-counter-manufacturers",
  },
  {
    name: "Stainless Steel Table",
    route: "/stainless-steel-table",
  },
  {
    name: "Storage Equipments",
    route: "/storage-equipments",
  },
  {
    name: "Trolley Equipments",
    route: "/trolley-equipments",
  },
  {
    name: "Service Equipments",
    route: "/service-equipments",
  },
  {
    name: "Water Cooler & Dispensers",
    route: "/water-cooler-manufacturer",
  },
  {
    name: "Imported Equipments",
    route: "/imported-equipments",
  },
  {
    name: "Washing Equipments",
    route: "/dishwasher-dealer-in-delhi",
  },
  {
    name: "Exhaust / Fresh / Air / Gas Pipe Line & Ducting System",
    route: "/exhaust-fresh-air-gas-pipe-line-ducting-system",
  },
];

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about-us",
  },
  {
    name: "Our Products",
    href: "/our-products",
    hasDropdown: true,
  },
  {
    name: "Our Client",
    href: "/our-client",
  },
  {
    name: "Brands",
    href: "/brands",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact Us",
    href: "/contact-us",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  /*
   * CHECK CURRENT PRODUCT PAGE
   */
  const isProductActive = (route) => {
    return pathname === route || pathname.startsWith(`${route}/`);
  };

  const isActive = (href, hasDropdown = false) => {
    if (href === "/") {
      return pathname === "/";
    }

    if (hasDropdown) {
      const isMainProductPage =
        pathname === href || pathname.startsWith(`${href}/`);

      const isProductPage = products.some((product) =>
        isProductActive(product.route),
      );

      return isMainProductPage || isProductPage;
    }

    return pathname === href;
  };

  const closeMenus = () => {
    setIsOpen(false);
    setDropdownOpen(false);
    setMobileDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* TOP INFORMATION BAR */}
      <div className="hidden lg:block bg-[#2F3192] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-9 text-xs">
            <div className="flex items-center gap-6">
              <a
                href="tel:+919310010882"
                className="flex items-center gap-2 text-white/85 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+91 9310010882</span>
              </a>

              <a
                href="mailto:royalequipments@gmail.com"
                className="flex items-center gap-2 text-white/85 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>royalequipments@gmail.com</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-white/85">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Premium Commercial Kitchen Equipment</span>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="bg-white backdrop-blur-xl border-b border-[#2F3192]/10 shadow-[0_4px_25px_rgba(47,49,146,0.10)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[78px]">
            {/* LOGO */}
            <Link
              href="/"
              onClick={closeMenus}
              className="flex items-center shrink-0 group"
            >
              <div className="relative w-36 h-14 sm:w-40 sm:h-14">
                <Image
                  src="/home/logo.png"
                  alt="Royal Logo"
                  fill
                  priority
                  sizes="(max-width: 640px) 144px, 160px"
                  className="object-contain object-left transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = isActive(link.href, link.hasDropdown);

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                    >
                      {/* PRODUCTS BUTTON */}
                      <div
                        className={`flex items-center rounded-xl transition-all duration-200 ${
                          active
                            ? "bg-[#2F3192] text-white shadow-md shadow-[#2F3192]/25"
                            : "text-[#2F3192] hover:bg-[#2F3192]/8"
                        }`}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setDropdownOpen(false)}
                          className="relative px-3.5 py-3 text-sm font-bold"
                        >
                          {link.name}
                        </Link>

                        <button
                          type="button"
                          onClick={() => setDropdownOpen((prev) => !prev)}
                          className="px-2.5 py-3 pr-3"
                          aria-label="Toggle Products Dropdown"
                          aria-expanded={dropdownOpen}
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              dropdownOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>

                      {/* PRODUCTS DROPDOWN */}
                      {dropdownOpen && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[720px]">
                          <div className="overflow-hidden rounded-2xl bg-white border border-[#2F3192]/10 shadow-[0_20px_60px_rgba(47,49,146,0.20)]">
                            {/* DROPDOWN HEADER */}
                            <div className="px-6 py-5 bg-[#2F3192] text-white">
                              <div className="flex items-center justify-between">
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-white" />

                                    <p className="text-base font-extrabold">
                                      Our Products
                                    </p>
                                  </div>

                                  <p className="text-xs text-white/70 mt-1.5">
                                    Premium commercial kitchen solutions
                                  </p>
                                </div>

                                <span className="px-3 py-1.5 rounded-full bg-white/15 border border-white/20 text-[11px] font-bold">
                                  {products.length} Products
                                </span>
                              </div>
                            </div>

                            {/* TWO COLUMN PRODUCTS */}
                            <div className="max-h-[65vh] overflow-y-auto custom-scrollbar p-3">
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-1.5">
                                {products.map((product) => {
                                  const productActive = isProductActive(
                                    product.route,
                                  );

                                  return (
                                    <Link
                                      key={product.route}
                                      href={product.route}
                                      onClick={() => setDropdownOpen(false)}
                                      className={`group flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 ${
                                        productActive
                                          ? "bg-[#2F3192] text-white shadow-sm"
                                          : "text-[#2F3192] hover:bg-[#2F3192]/7"
                                      }`}
                                    >
                                      <div className="flex items-center gap-3 min-w-0">
                                        {/* BULLET */}
                                        <span
                                          className={`flex items-center justify-center shrink-0 w-6 h-6 rounded-full ${
                                            productActive
                                              ? "bg-white text-[#2F3192]"
                                              : "bg-[#2F3192]/8 text-[#2F3192] group-hover:bg-[#2F3192] group-hover:text-white"
                                          }`}
                                        >
                                          <span className="w-1.5 h-1.5 rounded-full bg-current" />
                                        </span>

                                        <span className="text-sm font-bold leading-5">
                                          {product.name}
                                        </span>
                                      </div>

                                      <ArrowRight
                                        className={`w-4 h-4 shrink-0 transition-all duration-200 ${
                                          productActive
                                            ? "opacity-100 translate-x-0"
                                            : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                                        }`}
                                      />
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>

                            {/* DROPDOWN FOOTER */}
                            <div className="px-5 py-3 border-t border-[#2F3192]/10 bg-[#2F3192]/[0.025]">
                              <Link
                                href="/our-products"
                                onClick={closeMenus}
                                className="flex items-center justify-center gap-2 text-xs font-extrabold text-[#2F3192] hover:gap-3 transition-all"
                              >
                                View All Products
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={closeMenus}
                    className={`relative px-3.5 py-3 rounded-md text-sm font-bold transition-all duration-200 ${
                      active
                        ? "bg-[#2F3192] text-white shadow-md shadow-[#2F3192]/25"
                        : "text-[#2F3192] hover:bg-[#2F3192]/8"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* MOBILE MENU BUTTON */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => {
                  setIsOpen((prev) => !prev);
                  setMobileDropdownOpen(false);
                }}
                className="p-2.5 rounded-xl text-[#2F3192] border border-[#2F3192]/15 bg-white hover:bg-[#2F3192] hover:text-white transition-all shadow-sm"
                aria-label="Toggle Menu"
                aria-expanded={isOpen}
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b-4 border-[#2F3192] shadow-2xl">
          <div className="px-4 pt-4 pb-6 max-h-[80vh] overflow-y-auto">
            {/* MOBILE LINKS */}
            <div className="space-y-1">
              {navLinks.map((link) => {
                const active = isActive(link.href, link.hasDropdown);

                if (link.hasDropdown) {
                  return (
                    <div key={link.name} className="space-y-1">
                      {/* MOBILE PRODUCTS BUTTON */}
                      <div
                        className={`flex items-center justify-between rounded-xl transition-all ${
                          active ? "bg-[#2F3192] text-white" : "text-[#2F3192]"
                        }`}
                      >
                        <Link
                          href={link.href}
                          onClick={closeMenus}
                          className="flex-1 px-4 py-3.5 text-base font-semibold"
                        >
                          {link.name}
                        </Link>

                        <button
                          type="button"
                          onClick={() => setMobileDropdownOpen((prev) => !prev)}
                          className="p-3.5"
                          aria-label="Toggle Products"
                          aria-expanded={mobileDropdownOpen}
                        >
                          <ChevronDown
                            className={`w-5 h-5 transition-transform ${
                              mobileDropdownOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>

                      {/* MOBILE PRODUCTS */}
                      {mobileDropdownOpen && (
                        <div className="ml-2 p-2 rounded-2xl bg-[#2F3192]/5 border border-[#2F3192]/10">
                          {products.map((product) => {
                            const productActive = isProductActive(
                              product.route,
                            );

                            return (
                              <Link
                                key={product.route}
                                href={product.route}
                                onClick={closeMenus}
                                className={`group flex items-center justify-between gap-3 px-3.5 py-3 rounded-xl text-sm font-semibold transition-all ${
                                  productActive
                                    ? "bg-[#2F3192] text-white"
                                    : "text-[#2F3192] hover:bg-white"
                                }`}
                              >
                                <div className="flex items-center gap-3 min-w-0">
                                  <span
                                    className={`flex items-center justify-center w-5 h-5 shrink-0 rounded-full ${
                                      productActive
                                        ? "bg-white text-[#2F3192]"
                                        : "text-[#2F3192]"
                                    }`}
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                                  </span>

                                  <span>{product.name}</span>
                                </div>

                                <ArrowRight
                                  className={`w-4 h-4 shrink-0 ${
                                    productActive
                                      ? "opacity-100"
                                      : "opacity-0 group-hover:opacity-100"
                                  }`}
                                />
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={closeMenus}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-semibold transition-all duration-200 ${
                      active
                        ? "bg-[#2F3192] text-white"
                        : "text-[#2F3192] hover:bg-[#2F3192]/6"
                    }`}
                  >
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
