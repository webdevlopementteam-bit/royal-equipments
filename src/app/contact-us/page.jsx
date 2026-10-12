import React from "react";
import Contact from "./Contact";

export const metadata = {
  title: "Contact us - Royal Equipments",
  description:
    "Contact us - Phone no. (+91) – 9310010882, 9811810882, 9355055513, 9310510882 , 9310804106, Email: sales@royalequipments.in royalequipments@gmail.com",
  keywords: ["Contact us"],

  alternates: {
    canonical: "https://www.royalequipments.in/contact-us/",
  },
};

function page() {
  return (
    <>
      <Contact />
    </>
  );
}

export default page;
