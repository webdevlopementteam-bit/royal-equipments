"use client";
import ProductBreadcrumb from "@/components/ProductBreadcrumb";
import React from "react";
import ImageGrid from "@/components/ImageGrid";
import { serviceEquipments } from "@/data/data";

export default function Services() {
  return (
    <>
      <div className="bg-white pb-4 md:pb-10">
        <ProductBreadcrumb currentProduct={"Service Equipments"} />

        <ImageGrid data={serviceEquipments} />
      </div>
    </>
  );
}
