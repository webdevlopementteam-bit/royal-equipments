import React from "react";
import Products from "./Products";

export const metadata = {
  title: "Top Canteen Equipment Manufacturers in Delhi | Royal Equipments",
  description:
    "Cooking for Canteen Equipment Manufacturers in Delhi? Royal Equipments offers premium, durable & efficient kitchen solutions for every canteen setup. Get a free quote!",
  keywords: [
    "Canteen Equipment Manufacturers",
    "Canteen Equipment Manufacturers in Delhi",
  ],

  alternates: {
    canonical: "https://www.royalequipments.in/our-products/",
  },
};

function page() {
  return (
    <>
      <Products />
    </>
  );
}

export default page;
