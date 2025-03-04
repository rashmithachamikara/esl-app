"use client";

import { DataTable } from "@/components/DataTable/DataTable";
import { products, Product } from "./sample-data";
import { productColumns } from "@/components/DataTable/DataTableColumns/products";
import AddButton from "@/components/AddButton/AddButton";
import SearchBar from "@/components/SearchBar/SearchBar";

export default function ProductPage() {
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };

  const handleAddClick = () => {
    console.log("Add button clicked");
  };

  return (
    <> 
      <h1>Products</h1>
      <div className="flex flex-row-reverse">
        <AddButton
          label="Add Product"
          onClick={handleAddClick}
          className="mt-4 items-end"
        />
      </div>
      <div className="z-50">
        <SearchBar
          placeholder="Search Products"
          onSearch={handleSearch}
          columns={["Product", "Category", "Price", "Description"]}
        />
      </div>
       <DataTable<Product> columns={productColumns} data={products} />
      </>
  );
}
