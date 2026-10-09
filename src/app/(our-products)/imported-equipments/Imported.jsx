"use client";
import ProductBreadcrumb from "@/components/ProductBreadcrumb";
import React from "react";
import ImageGrid from "@/components/ImageGrid";
import { importedEquipments } from "@/data/data";

export default function Imported() {
  return (
    <>
      <div className="bg-white pb-4 md:pb-10">
        <ProductBreadcrumb currentProduct={"Imported Equipments"} />

        <ImageGrid data={importedEquipments} />
      </div>
    </>
  );
}
