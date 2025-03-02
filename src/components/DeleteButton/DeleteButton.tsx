"use client";

import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface DeleteButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

export default function DeleteButton({ label, onClick, className }: DeleteButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={`bg-[#7F1D1D] text-white text-lg font-medium rounded-md px-6 py-3 flex items-center gap-2 
        hover:bg-[#7F1D1D] active:bg-[#7F1D1D] focus:bg-[#7F1D1D]${className}`}
    >
      <Trash2 className="w-6 h-6" /> {label}
    </Button>
  );
}
