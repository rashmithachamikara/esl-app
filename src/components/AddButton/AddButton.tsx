import { SquarePlus } from "lucide-react";
import { Button } from "@/components/ui/button"
import React from "react";

interface AddButtonProps {
  label: string;
  onClick: () => void;
  className?: string; // Optional className for additional styling
}

export default function AddButton({ label, onClick, className }: AddButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={`${className}`}
      style={{
        backgroundColor:"#D93639",
        alignItems:"center"
      }}
    >
      <SquarePlus />
      {label}
    </Button>
  );
}