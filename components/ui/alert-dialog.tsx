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

interface AlertDialogProps {
  trigger: ReactNode;
  title: string;
  description?: string;
  warningMessage?: string;
  cancelText?: string;
  confirmText?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
  variant?: "destructive" | "warning" | "info";
  icon?: ReactNode;
  className?: string;
}

export function AlertDialog({
  trigger,
  title,
  description,
  warningMessage,
  cancelText = "Cancel",
  confirmText = "Confirm",
  onCancel,
  onConfirm,
  variant = "destructive",
  icon,
  className,
}: AlertDialogProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "destructive":
        return {
          buttonVariant: "destructive" as const,
          alertBg: "bg-red-50 dark:bg-red-950/20",
          alertBorder: "border-red-200 dark:border-red-800",
          alertText: "text-red-700 dark:text-red-300",
        };
      case "warning":
        return {
          buttonVariant: "outline" as const,
          alertBg: "bg-yellow-50 dark:bg-yellow-950/20",
          alertBorder: "border-yellow-200 dark:border-yellow-800",
          alertText: "text-yellow-700 dark:text-yellow-300",
        };
      case "info":
        return {
          buttonVariant: "outline" as const,
          alertBg: "bg-blue-50 dark:bg-blue-950/20",
          alertBorder: "border-blue-200 dark:border-blue-800",
          alertText: "text-blue-700 dark:text-blue-300",
        };
      default:
        return {
          buttonVariant: "destructive" as const,
          alertBg: "bg-red-50 dark:bg-red-950/20",
          alertBorder: "border-red-200 dark:border-red-800",
          alertText: "text-red-700 dark:text-red-300",
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className={className}>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {icon && icon}
            {title}
          </DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {warningMessage && (
          <div className="py-4">
            <div
              className={`p-4 ${styles.alertBg} ${styles.alertBorder} rounded-lg`}
            >
              <p className={`text-sm ${styles.alertText}`}>{warningMessage}</p>
            </div>
          </div>
        )}
        <DialogFooter>
          <Button variant="outline" onClick={onCancel}>
            {cancelText}
          </Button>
          <Button variant={styles.buttonVariant} onClick={onConfirm}>
            {confirmText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
