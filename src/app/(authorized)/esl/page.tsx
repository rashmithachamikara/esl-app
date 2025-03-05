"use client";

import { useState } from "react";
import { DataTable } from "@/components/DataTable/DataTable";
import { devices, Device } from "./sample-data";
import { deviceColumns } from "@/components/DataTable/DataTableColumns/esl";
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
import { FilterTab } from "@/components/FilterTab/FilterTab";

export default function EslPage() {
  const [serial, setSerial] = useState("");
  const [mac, setMac] = useState("");

  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };

  const handleSave = () => {
    console.log("Save changes clicked");
    // Add your save logic here
  };

  return (
    <>
      <h1>ESL</h1>
      <div className="flex flex-row-reverse gap-4 justify-between items-end mt-6">
        <div>
          <Modal
            buttonLabel="Add ESL"
            dialogTitle="Add ESL"
            dialogDescription="Fill in the details for the new ESL."
            onSave={handleSave}
            saveButtonLabel="Add ESL"
          >
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="serial" className="text-left">
                  Serial
                </Label>
                <Input
                  id="serial"
                  value={serial}
                  onChange={(e) => setSerial(e.target.value)}
                  placeholder="Serial number"
                  className="p-2" // Add box styling
                />
              </div>
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="mac" className="text-left">
                  MAC
                </Label>
                <Input
                  id="mac"
                  value={mac}
                  onChange={(e) => setMac(e.target.value)}
                  placeholder="MAC address"
                  className="p-2" // Add box styling
                />
              </div>
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="color-profile" className="text-left">
                  Color profile
                </Label>
                <Select>
                  <SelectTrigger
                    id="color-profile"
                    className="border border-gray-300 rounded-md p-2"
                  >
                    <SelectValue placeholder="Select the color profile" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Color profiles</SelectLabel>
                      <SelectItem value="bw">Black, White</SelectItem>
                      <SelectItem value="rogb">
                        Red, Orange, Green, Black
                      </SelectItem>
                      <SelectItem value="yb">Yellow, Blue</SelectItem>
                      <SelectItem value="yb">Red, Green, Blue</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="resolution" className="text-left">
                  Resolution
                </Label>
                <Select>
                  <SelectTrigger
                    id="resolution"
                    className="border border-gray-300 rounded-md p-2"
                  >
                    <SelectValue placeholder="Select the resolution" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Supported resolutions</SelectLabel>
                      <SelectItem value="240x420">240x420</SelectItem>
                      <SelectItem value="420x280">420x280</SelectItem>
                      <SelectItem value="820x540">820x540</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="branch" className="text-left">
                  Branch
                </Label>
                <Select>
                  <SelectTrigger
                    id="branch"
                    className="border border-gray-300 rounded-md p-2"
                  >
                    <SelectValue placeholder="Select a Branch" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select the branch</SelectLabel>
                      <SelectItem value="apple">Sri Lanka</SelectItem>
                      <SelectItem value="banana">Australia</SelectItem>
                      <SelectItem value="blueberry">United States</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-1 gap-2">
                <Label htmlFor="ap" className="text-left">
                  Access Point
                </Label>
                <Select>
                  <SelectTrigger
                    id="ap"
                    className="border border-gray-300 rounded-md p-2"
                  >
                    <SelectValue placeholder="Select the Access Point" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Access points in the branch</SelectLabel>
                      <SelectItem value="ap_01">D5-6F-E3-AC-C5-9D</SelectItem>
                      <SelectItem value="ap_02">F1-E2-D3-C4-B5-A6</SelectItem>
                      <SelectItem value="ap_03">E2-D3-C4-B5-A6-F1</SelectItem>
                      <SelectItem value="ap_04">D3-C4-B5-A6-F1-E2</SelectItem>
                      <SelectItem value="ap_05">C4-B5-A6-F1-E2-D3</SelectItem>
                      <SelectItem value="ap_06">B5-A6-F1-E2-D3-C4</SelectItem>
                      <SelectItem value="ap_07">A6-F1-E2-D3-C4-B5</SelectItem>
                      <SelectItem value="ap_08">9D-8C-7B-6A-5F-4E</SelectItem>
                      <SelectItem value="ap_09">8C-7B-6A-5F-4E-3D</SelectItem>
                      <SelectItem value="ap_10">7B-6A-5F-4E-3D-2C</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Modal>
        </div>
        <div>
          <FilterTab
            label="Branch"
            items={[
              { value: "all", name: "All" },
              { value: "sl", name: "SL" },
              { value: "australia", name: "Australia" },
              { value: "america", name: "America" },
            ]}
            placeholder="Select a Branch"
            onChange={(value) => console.log("Selected:", value)}
          />
        </div>
      </div>
      <div className="z-50">
        <SearchBar
          placeholder="Search ESLs"
          onSearch={handleSearch}
          columns={["Serial", "Mac", "Branch", "AP"]}
        />
      </div>
      <DataTable<Device> columns={deviceColumns} data={devices} />
    </>
  );
}
