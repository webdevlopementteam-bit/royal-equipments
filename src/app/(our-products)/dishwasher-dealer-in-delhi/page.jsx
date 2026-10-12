import React from "react";
import Dishwasher from "./Dishwasher";

export const metadata = {
  title: "Best Dishwasher Dealer in Delhi - Royal Equipments",
  description:
    "Royal Equipments is a trusted dishwasher dealer in Delhi, offering efficient commercial dishwashers & Washing Equipments. Contact us now!",
  keywords: ["Dishwasher Dealer in Delhi"],

  alternates: {
    canonical: "https://www.royalequipments.in/dishwasher-dealer-in-delhi/",
  },
};

function page() {
  return (
    <>
      <Dishwasher />
    </>
  );
}

export default page;
