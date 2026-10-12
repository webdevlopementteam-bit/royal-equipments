import React from "react";
import BakeryOvenSection from "./Oven";

export const metadata = {
  title: "Pizza Oven Dealer in Delhi | Combi Oven Dealer in Delhi",
  description:
    "Royal Equipments is a Best Pizza & Combi Oven Dealer in Delhi, Offering high-quality ovens, mixers & complete bakery solutions at best prices.",
  keywords: ["Pizza Oven Dealer in Delhi", "Combi Oven Dealer in Delhi"],

  alternates: {
    canonical: " https://www.royalequipments.in/oven-dealer-in-delhi",
  },
};

function page() {
  return (
    <>
      <BakeryOvenSection />
    </>
  );
}

export default page;
