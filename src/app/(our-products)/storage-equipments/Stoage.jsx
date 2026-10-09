"use client";
import ProductBreadcrumb from "@/components/ProductBreadcrumb";
import React from "react";
import ImageGrid from "@/components/ImageGrid";
import { storageEquipments } from "@/data/data";

export default function Stoage() {
  return (
    <>
      <div className="bg-white pb-4 md:pb-10">
        <ProductBreadcrumb currentProduct={"Storage Equipments"} />

        <ImageGrid data={storageEquipments} />
      </div>
    </>
  );
}
