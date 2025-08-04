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

interface SimpleDialogProps {
  trigger: ReactNode;
  title: string;
  description?: string;
  content?: ReactNode;
  cancelText?: string;
  confirmText?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
  showFooter?: boolean;
  className?: string;
}

export function SimpleDialog({
  trigger,
  title,
  description,
  content,
  cancelText = "Cancel",
  confirmText = "Confirm",
  onCancel,
  onConfirm,
  showFooter = true,
  className,
}: SimpleDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className={className}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {content && <div className="py-4">{content}</div>}
        {showFooter && (
          <DialogFooter>
            <Button variant="outline" onClick={onCancel}>
              {cancelText}
            </Button>
            <Button onClick={onConfirm}>{confirmText}</Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
