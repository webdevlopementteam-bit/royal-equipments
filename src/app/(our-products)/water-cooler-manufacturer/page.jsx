import React from "react";
import Water from "./Water";

export const metadata = {
  title: "Top Water Cooler Manufacturer in Delhi - Royal Equipments",
  description:
    "Royal Equipments is a trusted water cooler manufacturer in Delhi, offering durable, energy-efficient water coolers for homes, offices, and industries.",
  keywords: ["Water Cooler Manufacturer", "Water Cooler Manufacturer in Delhi"],

  alternates: {
    canonical: "https://www.royalequipments.in/water-cooler-manufacturer/",
  },
};

function page() {
  return (
    <>
      <Water />
    </>
  );
}

export default page;
