import React from "react";
import Cooking from "./Cooking";

export const metadata = {
  title: "Three Burner Manufacturer | Chinese Burner Manufacturer",
  description:
    "Royal Equipments is a trusted Three Burner Manufacturer and Chinese Burner Manufacturer, offering durable, high-performance burners for commercial kitchens.",
  keywords: ["Three Burner Manufacturer", "Chinese Burner Manufacturer"],

  alternates: {
    canonical: "https://www.royalequipments.in/cooking-equipments/",
  },
};

function page() {
  return (
    <>
      <Cooking />
    </>
  );
}

export default page;
