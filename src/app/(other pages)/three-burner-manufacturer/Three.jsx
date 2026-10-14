import React from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata = {
  title: "Three Burner Manufacturer in Delhi | Royal Equipments",
  description:
    "Heavy duty Three Burner Range manufactured with high-quality stainless steel by Royal Equipments in Delhi, ideal for commercial kitchens.",
};

const keyFeatures = [
  "Heavy duty Three Burner specially designed for commercial kitchens and fast cooking.",
  "Made with high-quality stainless steel body for durability and long service life.",
  "Equipped with three powerful burners for high flame and efficient cooking performance.",
  "Strong wok support / pan support ensures stable cooking while handling heavy utensils.",
  "Smooth gas control knobs for easy flame adjustment and safe operation.",
  "Ideal for restaurants, hotels, food stalls, and catering kitchens.",
  "Compact design with bottom storage shelf for better kitchen space management.",
];

const applications = [
  "Restaurants and hotels",
  "Catering kitchens",
  "Food courts and cloud kitchens",
  "Dhabas and fast food outlets",
  "Large commercial cooking setups",
];

const faqs = [
  {
    question: "1. What is a three burner stove used for?",
    answer:
      "A three burner stove is used in commercial kitchens to cook multiple dishes at the same time, improving speed and efficiency during food preparation.",
  },
  {
    question: "2. Why should restaurants use a three burner cooking unit?",
    answer:
      "Restaurants prefer three burner units because they allow chefs to cook different foods simultaneously, saving time and increasing kitchen productivity.",
  },
  {
    question: "3. Who is a trusted Three Burner Manufacturer in Delhi?",
    answer:
      "Many restaurants and commercial kitchens choose Royal Equipments because they provide durable stainless steel three burner units designed for heavy use.",
  },
  {
    question: "4. What material is used to manufacture three burner stoves?",
    answer:
      "Most commercial three burner stoves are made from high-quality stainless steel, which ensures durability, hygiene, and resistance to rust.",
  },
  {
    question: "5. Where can I buy a commercial three burner for my restaurant?",
    answer:
      "You can purchase a high-quality commercial three burner from manufacturers like Royal Equipments, who specialize in professional kitchen equipment.",
  },
];

export default function ThreeBurnerPage() {
  return (
    <div className="bg-white ">
      <Breadcrumb title="Three Burner" />
      <main className="max-w-6xl mx-auto px-4 py-8 text-gray-800">
        {/* Top Product Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-12">
          {/* Product Image Container */}
          <div className="border border-gray-200 rounded-lg p-6 flex justify-center items-center bg-white shadow-sm h-full min-h-[220px]">
            <Image
              src="/products/cooking-equipments/Three Burner Range.webp"
              alt="Three Burner Range Commercial Stove"
              width={500}
              height={400}
              className="object-cover h-45 md:h-60 w-auto"
              priority
            />
          </div>

          {/* Header & Bullet Specs */}
          <div>
            <div className="bg-[#0B1248] text-white py-3 px-6 rounded-md mb-6">
              <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
                Three Burner Manufacturer
              </h1>
            </div>

            <ul className="space-y-3 list-disc pl-5 text-sm md:text-base text-gray-700 leading-relaxed">
              {keyFeatures.map((feature, idx) => (
                <li key={idx}>{highlightKeywords(feature)}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Main Narrative Section */}
        <section className="space-y-6 text-gray-700 text-sm md:text-base leading-relaxed mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-b border-gray-200 pb-2">
            Three Burner Manufacturer in Delhi – Royal Equipments
          </h2>

          <p className="text-[17px] md:text-[19px]">
            A{" "}
            <Link
              href={"https://www.royalequipments.in/contact-us/"}
              className="text-blue-600 hover:text=blue-900 font-bold"
            >
              three burner stove
            </Link>{" "}
            is one of the most essential pieces of equipment used in commercial
            kitchens. Restaurants, hotels, dhabas, and catering businesses
            require powerful cooking equipment that can handle heavy workloads
            and cook multiple dishes at the same time. If you are searching for
            a reliable{" "}
            <strong className="text-gray-900">
              Three Burner Manufacturer in Delhi
            </strong>
            ,{" "}
            <span className="font-semibold text-gray-900">
              Royal Equipments
            </span>{" "}
            offers durable and high-performance burners designed specifically
            for professional kitchen environments.
          </p>

          <p className="text-[17px] md:text-[19px]">
            A three burner unit is designed to provide{" "}
            <strong className="text-gray-900">
              high efficiency and convenience
            </strong>{" "}
            during cooking. With three separate burners, chefs can prepare
            different dishes simultaneously without slowing down the kitchen
            workflow. This makes it an ideal solution for busy kitchens where
            speed and productivity are extremely important.
          </p>

          <p className="text-[17px] md:text-[19px]">
            As a trusted{" "}
            <strong className="text-gray-900">Three Burner Manufacturer</strong>
            ,{" "}
            <span className="font-semibold text-gray-900">
              Royal Equipments
            </span>{" "}
            focuses on quality manufacturing and strong design. These burners
            are made using{" "}
            <strong className="text-gray-900">
              premium grade stainless steel
            </strong>
            , which makes them highly durable, corrosion-resistant, and easy to
            clean. The sturdy body structure ensures that the equipment can
            withstand the heavy use of commercial kitchens for many years.
          </p>

          <p className="text-[17px] md:text-[19px]">
            Another key advantage of a three burner cooking unit is its{" "}
            <strong className="text-gray-900">powerful flame output</strong>.
            Each burner is designed to deliver strong and consistent heat, which
            helps chefs cook food faster while maintaining the desired taste and
            texture. Whether it is preparing curries, frying food, boiling large
            quantities, or cooking multiple meals at once, a three burner stove
            provides the required cooking power.
          </p>

          <p className="text-[17px] md:text-[19px]">
            Being a reliable{" "}
            <strong className="text-gray-900">
              Three Burner Manufacturer in Delhi
            </strong>
            ,{" "}
            <span className="font-semibold text-gray-900">
              Royal Equipments
            </span>{" "}
            ensures that every unit is designed with practical features for
            professional kitchens. The burners come with{" "}
            <strong className="text-gray-900">
              easy-to-use gas control knobs
            </strong>
            , strong pan support, and a{" "}
            <strong className="text-gray-900">spacious bottom shelf</strong>{" "}
            that allows chefs to store utensils or ingredients conveniently. The
            ergonomic design also helps improve kitchen efficiency and saves
            valuable working space.
          </p>

          {/* Applications List */}
          <div className="pt-2">
            <p className="mb-3 font-medium text-gray-800 text-[17px] md:text-[19px]">
              These three burner units are widely used in:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-gray-700 text-[17px] md:text-[19px]">
              {applications.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <p className="pt-2 text-[17px] md:text-[19px]">
            Choosing the right kitchen equipment plays a major role in the
            success of any food business. With the durable and efficient burners
            offered by{" "}
            <strong className="text-gray-900 font-semibold">
              Royal Equipments
            </strong>
            , businesses can improve cooking speed, maintain consistent food
            quality, and ensure long-term reliability in their kitchen
            operations.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="mt-12 border-t border-gray-200 pt-8 ">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">FAQs</h2>
          <div className="space-y-6 ">
            {faqs.map((faq, index) => (
              <div key={index} className="space-y-1.5">
                <h3 className="font-bold text-gray-900 text-[17px] md:text-[19px]">
                  {faq.question}
                </h3>
                <p className="text-gray-700 text-[17px] md:text-[19px] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

// Helper to highlight specific key terms in bullet points
function highlightKeywords(text) {
  const keywords = [
    "Three Burner",
    "high-quality stainless steel body",
    "three powerful burners",
    "wok support / pan support",
    "gas control knobs",
    "restaurants, hotels, food stalls, and catering kitchens.",
    "bottom storage shelf",
  ];

  let formatted = text;
  keywords.forEach((keyword) => {
    if (formatted.includes(keyword)) {
      formatted = formatted.replace(keyword, `<strong>${keyword}</strong>`);
    }
  });

  return <span dangerouslySetInnerHTML={{ __html: formatted }} />;
}
