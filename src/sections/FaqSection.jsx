"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Why should I choose Royal Equipments as my commercial kitchen equipment manufacturer in Delhi?",
    a: "Royal Equipments has been manufacturing professional kitchen equipment since 2001. As a Delhi-based commercial kitchen equipment manufacturer, we focus on durable build quality, energy-efficient performance and designs made around your kitchen’s real needs. Our client list includes many well-known brands.",
  },
  {
    q: "Do you provide complete commercial kitchen setup, or only individual machines?",
    a: "We provide both. You can buy a single machine such as an oven or refrigerator, or get a complete turnkey kitchen, including cooking ranges, preparation tables, storage, washing equipment, and exhaust, fresh air and gas pipeline systems.",
  },
  {
    q: "Is your kitchen equipment made of stainless steel?",
    a: "Yes. We specialize in stainless steel kitchen equipment, which is hygienic, rust-resistant and easy to clean, making it ideal for heavy daily use in hotels, restaurants and bakeries. Custom stainless steel units can also be made to fit your layout.",
  },
  {
    q: "Do you offer equipment for Indian cuisine and bakeries?",
    a: "Yes. Our range covers high-volume Indian food production, such as chapati-making equipment and heavy-duty cooking ranges. For bakeries, we offer single, double and triple deck ovens and other bakery machines.",
  },
  {
    q: "Where is Royal Equipments located and how can I contact you?",
    a: "We are located at Plot No. A1, Suraj Vihar, Opposite NSIT College, Near Dwarka Mor Metro Station, New Delhi – 110078. You can call us on +91 9310010882, email sales@royalequipments.in, or WhatsApp us to get a free consultation and quote from a leading commercial kitchen equipment manufacturer in Delhi.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0); // First FAQ open by default

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Google SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider font-semibold text-[#2F3191] bg-[#2F3191]/10 border border-[#2F3191]/20 py-1.5 px-4 rounded-full mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#2F3191] animate-pulse"></span>
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.q}
                className="bg-white rounded-xl border border-slate-200/80 shadow-sm overflow-hidden transition-all duration-200 hover:border-slate-300"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between text-left p-5 sm:p-6 text-slate-900 font-semibold text-base sm:text-lg focus:outline-none"
                    aria-expanded={isOpen}
                    aria-controls={`home-faq-${index}`}
                  >
                    <span className="pr-4 leading-snug">
                      Q{index + 1}. {faq.q}
                    </span>
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-600">
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-[#2F3191]" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>
                </h3>

                {/* Answers stay in the HTML (collapsed with CSS) so search engines can read them */}
                <div
                  id={`home-faq-${index}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-4">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
