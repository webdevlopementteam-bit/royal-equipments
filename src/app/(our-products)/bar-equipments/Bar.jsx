"use client";
import ProductBreadcrumb from "@/components/ProductBreadcrumb";
import React from "react";
import ImageGrid from "@/components/ImageGrid";
import { barEquipments } from "@/data/data";

export default function Water() {
  return (
    <>
      <div className="bg-white pb-4 md:pb-10">
        <ProductBreadcrumb currentProduct={"Bar Equipments"} />

        <ImageGrid data={barEquipments} />
      </div>
    </>
  );
}
