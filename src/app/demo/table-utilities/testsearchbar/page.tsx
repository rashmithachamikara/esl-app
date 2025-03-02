"use client";

import SearchBar from "@/components/SearchBar/SearchBar";

export default function TestSearch() {
  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  return (
    <div className="p-6">
      <SearchBar
        placeholder="Search Branches"
        onSearch={handleSearch}
        columns={["Name", "Location", "Columns"]}
      />
    </div>
  );
}
