import React from "react";
import OurClient from "./OurClient";

export const metadata = {
  title: "Our Clients | Royal Equipments – Trusted Kitchen Solutions",
  description:
    "Discover the Trusted Clients of Royal Equipments, a Leading Supplier of Hotel Kitchen and Bakery Equipment in India. Serving Hotels, Restaurants, and More.",
  keywords: [
    "Royal Equipments Clients",
    "Hotel Kitchen Equipment Clients",
    "Bakery Equipment Clients",
    "Commercial Kitchen Solutions Clients",
    "Trusted Kitchen Equipment Supplier",
  ],

  alternates: {
    canonical: "https://www.royalequipments.in/our-client/",
  },
};

function page() {
  return (
    <>
      <OurClient />
    </>
  );
}

export default page;
