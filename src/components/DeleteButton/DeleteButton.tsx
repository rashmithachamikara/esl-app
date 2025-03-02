"use client";

import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface DeleteButtonProps {
  label?: string;
  onClick: () => void;
  className?: string;
}

export default function DeleteButton({
  label = "Delete",
  onClick,
  className,
}: DeleteButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={`w-full bg-red-900 text-white leading-[24px] 
    rounded-md px-6 py-2 flex items-center gap-2 justify-center 
    hover:bg-red-800 active:bg-[#7F1D1D] focus:bg-[#7F1D1D] ${className}`}
    >
      <Trash2 /> {label}
    </Button>
  );
}
