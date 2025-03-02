import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectProps {
  label: string; // The label for the group
  items: { value: string; name: string }[]; // List of items
  placeholder?: string; // Optional placeholder
  onChange?: (value: string) => void; // Callback when selection changes
}

export function CustomSelect({
  label,
  items,
  placeholder = "Select an option",
  onChange,
}: SelectProps) {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
