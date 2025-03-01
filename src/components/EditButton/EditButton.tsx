"use client";

import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

interface EditButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

export default function EditButton({ label, onClick, className }: EditButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={`bg-[#0F172A] text-white font-inter font-medium text-[14px] leading-[24px] 
        rounded-md w-[84px] h-[40px] px-4 py-2 flex items-center gap-2 justify-center ${className}`}
    >
      <Pencil size={18} className="text-white" /> 
      <span className="text-white w-[26px] h-[24px]">{label}</span> 
    </Button>
  );
}
