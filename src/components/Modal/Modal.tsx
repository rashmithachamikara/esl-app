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

interface ModalProps {
  buttonLabel: string;
  dialogTitle: string;
  dialogDescription: string;
  onSave: () => void;
  children: React.ReactNode; // Accept children
}

export function Modal({
  buttonLabel,
  dialogTitle,
  dialogDescription,
  onSave,
  children,
}: ModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{buttonLabel}</Button>
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
          <Button type="button" onClick={onSave} style={{ backgroundColor: "#D93639" }}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
