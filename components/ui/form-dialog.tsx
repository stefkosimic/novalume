"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface FormDialogProps {
  trigger: ReactNode;
  title: string;
  description?: string;
  formElements: ReactNode;
  submitText?: string;
  cancelText?: string;
  onSubmit?: (formData: FormData) => void;
  onCancel?: () => void;
  className?: string;
}

export function FormDialog({
  trigger,
  title,
  description,
  formElements,
  submitText = "Submit",
  cancelText = "Cancel",
  onSubmit,
  onCancel,
  className,
}: FormDialogProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    onSubmit?.(formData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className={className}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="py-4">{formElements}</div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onCancel}>
              {cancelText}
            </Button>
            <Button type="submit">{submitText}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
