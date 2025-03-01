"use client";
import SearchBar from "@/components/SearchBar/SearchBar";
import AddButton from "@/components/AddButton/AddButton";
import FilterTab from "@/components/FilterTab/FilterTab";

export default function Home() {
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };

  const handleAddClick = () => {
    console.log("Add button clicked");
  };

  return (
    <div className="p-4">
      <SearchBar placeholder="Search by Employee ID" onSearch={handleSearch} />
      <AddButton label="Add" onClick={handleAddClick} className="mt-4" />
      <div className="mt-4">
        <FilterTab />
      </div>
    </div>
  );
}
