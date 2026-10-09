"use client";
import ProductBreadcrumb from "@/components/ProductBreadcrumb";
import React from "react";
import ImageGrid from "@/components/ImageGrid";
import { trolleyEquipments } from "@/data/data";

export default function Trolley() {
  return (
    <>
      <div className="bg-white pb-4 md:pb-10">
        <ProductBreadcrumb currentProduct={"Trolley Equipments"} />

        <ImageGrid data={trolleyEquipments} />
      </div>
    </>
  );
}
