import React from "react";
import Bakery from "./Bakery";

export const metadata = {
  title: "Best Bakery Equipments Manufacturer in Delhi - Royal Equipments",
  description:
    "Royal Equipments is a trusted bakery equipments manufacturer in Delhi, Offering high-quality ovens, mixers & complete bakery solutions at best prices.",
  keywords: [
    "Bakery Equipments Manufacturer",
    "Bakery Equipments Manufacturer in Delhi",
  ],

  alternates: {
    canonical: "https://www.royalequipments.in/bakery-equipments-manufacturer/",
  },
};

function page() {
  return (
    <>
      <Bakery />
    </>
  );
}

export default page;
