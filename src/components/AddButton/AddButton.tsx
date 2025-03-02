import { SquarePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

interface AddButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function AddButton({
  label,
  onClick,
  className,
}: AddButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={`${className}`}
      style={{
        backgroundColor: "#D93639",
        alignItems: "center",
      }}
    >
      <SquarePlus />
      {label}
    </Button>
  );
}
