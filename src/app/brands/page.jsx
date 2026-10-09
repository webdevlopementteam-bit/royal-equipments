import React from "react";
import Brands from "./Brands";

export const metadata = {
  title: "Brands - Royal Equipments",
  description: "Brands",
  keywords: ["", ""],

  alternates: {
    canonical: "https://www.royalequipments.in/brands/",
  },
};

function page() {
  return (
    <>
      <Brands />
    </>
  );
}

export default page;
