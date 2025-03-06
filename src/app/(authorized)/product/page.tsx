"use client";

import { DataTable } from "@/components/DataTable/DataTable";
import { products, Product } from "./sample-data";
import { productColumns } from "@/components/DataTable/DataTableColumns/products";
import SearchBar from "@/components/SearchBar/SearchBar";
import { Modal } from "@/components/Modal/Modal";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function ProductPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };

  const handleSave = () => {
    console.log("Save changes clicked");
    // Add your save logic here
  };

  return (
    <> 
      <h1>Products</h1>
      <div className="flex flex-row-reverse gap-4 justify-between items-end mt-6">
      <div>
          <Modal
            buttonLabel="Add Product"
            dialogTitle="Add Product"
            dialogDescription="Fill this to add a new Product."
            onSave={handleSave}
            saveButtonLabel="Add Product"
           
          >
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="name" className="text-left">
                  Product Name
                </Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="p-2" // Add box styling
                />
              </div>
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="description" className="text-left">
                  Description
                </Label>
                <Input
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description"
                  className="p-2" // Add box styling
                />
              </div>
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="price" className="text-left">
                  Price
                </Label>
                <Input
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Price"
                  className="p-2" // Add box styling
                />
              </div>
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="category" className="text-left">
                  Category
                </Label>
                <Select>
                  <SelectTrigger
                    id="category"
                    className="border border-gray-300 rounded-md p-2"
                  >
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>All</SelectLabel>
                      <SelectItem value="bakery">Bakery</SelectItem>
                      <SelectItem value="beverages">Beverages</SelectItem>
                      <SelectItem value="breakfast">Breakfast</SelectItem>
                      <SelectItem value="dairy">Dairy</SelectItem>
                      <SelectItem value="frozen-foods">Frozen Foods</SelectItem>
                      <SelectItem value="fruits">Fruits</SelectItem>
                      <SelectItem value="household">Household</SelectItem>
                      <SelectItem value="pantry">Pantry</SelectItem>
                      <SelectItem value="personal-care">Personal Care</SelectItem>
                      <SelectItem value="snacks">Snacks</SelectItem>
                      <SelectItem value="vegetables">Vegetables</SelectItem>
                      <SelectItem value="meat">Meat</SelectItem>
                      <SelectItem value="seafood">Seafood</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Modal>
        </div>
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

