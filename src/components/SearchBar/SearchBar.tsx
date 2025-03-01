"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import SearchButton from "@/components/ui/SearchButton";
import { DropdownMenu as ShadDropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  columns?: string[];
}

export default function SearchBar({ placeholder = "Search...", onSearch, columns = [] }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedColumn, setSelectedColumn] = useState(columns[0] || "Columns");

  const handleSearchClick = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="flex items-center gap-4 w-full">
      {/* Search Input */}
      <Input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={placeholder}
        className="px-4 py-2 focus:outline-none rounded-lg border border-gray-300 w-full"
      />
      
      {/* Columns Dropdown */}
      <ShadDropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="text-gray-900 border border-gray-300 px-4 py-2 flex items-center gap-2 rounded-lg h-10 w-[119px]">
            {selectedColumn}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="border border-gray-300 rounded-lg shadow-md bg-white w-[119px]">
          {columns.length > 0 ? (
            columns.map((col) => (
              <DropdownMenuItem key={col} onClick={() => setSelectedColumn(col)} className="px-4 py-2 border-b border-gray-300 w-full text-center hover:bg-gray-100 cursor-pointer">
                {col}
              </DropdownMenuItem>
            ))
          ) : (
            <DropdownMenuItem disabled className="px-4 py-2 text-gray-400">No options available</DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </ShadDropdownMenu>
      
      {/* Search Button */}
      <SearchButton onClick={handleSearchClick} />
    </div>
  );
}
