"use client";
import ProductBreadcrumb from "@/components/ProductBreadcrumb";
import React from "react";
import ImageGrid from "@/components/ImageGrid";
import { refrigerationProducts } from "@/data/data";

export default function Refrigeration() {
  return (
    <>
      <div className="bg-white pb-4 md:pb-10">
        <ProductBreadcrumb currentProduct={"Refrigeration"} />

        <ImageGrid data={refrigerationProducts} />
      </div>
    </>
  );
}
