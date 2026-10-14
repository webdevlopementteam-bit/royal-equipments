import React, { Suspense } from "react";
import Category from "./Category";

export const metadata = {
  title: "Blog Category - Royal Equipments",
  description:
    "Browse Royal Equipments blog articles by category – guides on commercial kitchen, bakery, refrigeration and restaurant equipment in Delhi.",

  alternates: {
    canonical: "https://www.royalequipments.in/blog/",
  },
};

function page() {
  return (
    <>
      <Suspense fallback={null}>
        <Category />
      </Suspense>
    </>
  );
}

export default page;
