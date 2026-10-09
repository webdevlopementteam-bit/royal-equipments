import React from "react";
import Blog from "./Blog";

export const metadata = {
  title: "Royal Equipments Blog | Tips, Trends & Equipment Guides",
  description:
    "Explore Expert Tips, Trends, and Guides on Commercial Kitchen, Canteen, and Food Service Equipment by Royal Equipments – India’s Trusted Supplier.",
  keywords: ["", ""],

  alternates: {
    canonical: "https://www.royalequipments.in/blog/",
  },
};

function page() {
  return (
    <>
      <Blog />
    </>
  );
}

export default page;
