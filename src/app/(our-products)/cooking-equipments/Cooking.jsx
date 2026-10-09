"use client";
import ProductBreadcrumb from "@/components/ProductBreadcrumb";
import React from "react";
import ImageGrid from "@/components/ImageGrid";
import { cookingEquipments } from "@/data/data";

export default function Cooking() {
  return (
    <>
      <div className="bg-white pb-4 md:pb-8">
        <ProductBreadcrumb
          currentProduct={"Cooking Equipments manufacturer in Delhi"}
        />

        <ImageGrid data={cookingEquipments} />
      </div>
    </>
  );
}
