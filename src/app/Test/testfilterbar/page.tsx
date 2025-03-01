"use client";

import FilterTab from "@/components/FilterTab/FilterTab";
import { useState } from "react";

export default function FilterBarTestPage() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  return (
    <div className="p-10">
      <FilterTab
        placeholder="Branch"
        filters={["All", "SL", "Australia", "NewYork"]}
        onFilterChange={handleFilterChange}
      />
    </div>
  );
}
