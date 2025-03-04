import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import React from "react";
import "@/css/typography.css";
import AddButton from "@/components/AddButton/AddButton";

interface ModalProps {
  buttonLabel: string;
  dialogTitle: string;
  dialogDescription: string;
  onSave: () => void;
  children: React.ReactNode; // Accept children
  saveButtonLabel: string; // Add saveButtonLabel prop
}

export function Modal({
  buttonLabel,
  dialogTitle,
  dialogDescription,
  onSave,
  children,
  saveButtonLabel, // Destructure saveButtonLabel
}: ModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <AddButton label={buttonLabel} onClick={() => {}} />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription>{dialogDescription}</DialogDescription>
        </DialogHeader>
        {children} {/* Render children */}
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button
            type="button"
            onClick={onSave}
            style={{ backgroundColor: "#D93639" }}
          >
            {saveButtonLabel} {/* Use saveButtonLabel prop */}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
