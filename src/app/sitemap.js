const BASE_URL = "https://www.royalequipments.in";

const mainPages = [
  "",
  "about-us",
  "our-products",
  "our-client",
  "brands",
  "blog",
  "contact-us",
];

const productPages = [
  "preparation-equipments",
  "cooking-equipments",
  "chapati-equipments",
  "refrigeration",
  "water-cooler-manufacturer",
  "bar-equipments",
  "cake-pastry-display-counter-manufacturers",
  "stainless-steel-table",
  "storage-equipments",
  "trolley-equipments",
  "service-equipments",
  "bakery-equipments-manufacturer",
  "imported-equipments",
  "dishwasher-dealer-in-delhi",
  "exhaust-fresh-air-gas-pipe-line-ducting-system",
];

const otherPages = [
  "bakery-equipments-manufacturer-haryana",
  "chinese-burner-manufacturer",
  "our-products-gurgaon",
  "our-products-noida",
  "oven-dealer-in-delhi",
  "softy-machine-dealer-in-delhi",
  "sweet-display-counter-manufacturer",
  "three-burner-manufacturer",
];

const blogPages = [
  "best-dishwasher-dealer-in-delhi",
  "hotel-kitchen-equipment-manufacturer-delhi",
  "top-10-commercial-kitchen-equipment-manufacturers",
  "bakery-equipments-manufacturer-in-delhi",
  "sweet-display-counter-manufacturer-in-delhi",
  "bakery-oven-dealer-in-delhi",
  "chinese-burner-manufacturer-in-delhi",
];

const toEntry = (slug, priority, changeFrequency) => ({
  url: slug ? `${BASE_URL}/${slug}/` : `${BASE_URL}/`,
  changeFrequency,
  priority,
});

export default function sitemap() {
  return [
    ...mainPages.map((slug) => toEntry(slug, slug ? 0.8 : 1, "daily")),
    ...productPages.map((slug) => toEntry(slug, 0.9, "daily")),
    ...otherPages.map((slug) => toEntry(slug, 0.7, "daily")),
    ...blogPages.map((slug) => toEntry(slug, 0.6, "daily")),
  ];
}
