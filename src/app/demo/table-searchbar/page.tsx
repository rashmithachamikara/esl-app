"use client";

import SearchBar from "@/components/SearchBar/SearchBar";

export default function Home() {
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };

  return (
    <div className="p-4">
      <SearchBar placeholder="Search by Employee ID" onSearch={handleSearch} />
    </div>
  );
}
