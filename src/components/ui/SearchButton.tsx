import React from "react";
import { Search } from "lucide-react";

interface SearchButtonProps {
  onClick: () => void;
}

const SearchButton: React.FC<SearchButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-slate-800 text-white flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-slate-700 border border-gray-300"
    >
      <Search size={16} />
      Search
    </button>
  );
};

export default SearchButton;
