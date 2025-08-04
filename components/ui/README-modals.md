# Reusable Modal Components

This directory contains three reusable modal components that can be used throughout your application.

## Components

### 1. SimpleDialog

A basic dialog component for simple confirmations and information display.

**Props:**

- `trigger`: ReactNode - The element that triggers the dialog
- `title`: string - Dialog title
- `description?`: string - Optional description
- `content?`: ReactNode - Optional content to display
- `cancelText?`: string - Cancel button text (default: "Cancel")
- `confirmText?`: string - Confirm button text (default: "Confirm")
- `onCancel?`: () => void - Cancel callback
- `onConfirm?`: () => void - Confirm callback
- `showFooter?`: boolean - Show/hide footer (default: true)
- `className?`: string - Additional CSS classes

**Example:**

```tsx
import { SimpleDialog } from "@/components/ui/simple-dialog";
import { Button } from "@/components/ui/button";

<SimpleDialog
  trigger={<Button>Open Dialog</Button>}
  title="Simple Dialog"
  description="This is a basic dialog example."
  content={<p>Custom content here</p>}
  onConfirm={() => console.log("Confirmed!")}
/>;
```

### 2. FormDialog

A dialog component that accepts form elements through props for maximum flexibility.

**Props:**

- `trigger`: ReactNode - The element that triggers the dialog
- `title`: string - Dialog title
- `description?`: string - Optional description
- `formElements`: ReactNode - The form elements to render inside the dialog
- `submitText?`: string - Submit button text (default: "Submit")
- `cancelText?`: string - Cancel button text (default: "Cancel")
- `onSubmit?`: (formData: FormData) => void - Form submission callback
- `onCancel?`: () => void - Cancel callback
- `className?`: string - Additional CSS classes

**Example:**

```tsx
import { FormDialog } from "@/components/ui/form-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, Mail } from "lucide-react";

<FormDialog
  trigger={<Button>Create Account</Button>}
  title="Create Account"
  description="Fill in the form below to create your account."
  formElements={
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Full Name</label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            name="fullName"
            placeholder="John Doe"
            className="pl-10"
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Email</label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            name="email"
            type="email"
            placeholder="john@example.com"
            className="pl-10"
            required
          />
        </div>
      </div>
    </div>
  }
  submitText="Create Account"
  onSubmit={(formData) => {
    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
    };
    console.log("Form data:", data);
  }}
/>;
```

### 3. AlertDialog

A dialog component for warnings, confirmations, and destructive actions with different variants.

**Props:**

- `trigger`: ReactNode - The element that triggers the dialog
- `title`: string - Dialog title
- `description?`: string - Optional description
- `warningMessage?`: string - Optional warning message with styled alert box
- `cancelText?`: string - Cancel button text (default: "Cancel")
- `confirmText?`: string - Confirm button text (default: "Confirm")
- `onCancel?`: () => void - Cancel callback
- `onConfirm?`: () => void - Confirm callback
- `variant?`: "destructive" | "warning" | "info" - Alert variant (default: "destructive")
- `icon?`: ReactNode - Optional icon for the title
- `className?`: string - Additional CSS classes

**Variants:**

- `destructive`: Red styling for dangerous actions
- `warning`: Yellow styling for warnings
- `info`: Blue styling for informational content

**Example:**

```tsx
import { AlertDialog } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { AlertCircle, Trash2 } from "lucide-react";

<AlertDialog
  trigger={
    <Button variant="destructive">
      <Trash2 className="mr-2 h-4 w-4" />
      Delete Item
    </Button>
  }
  title="Confirm Deletion"
  description="Are you sure you want to delete this item? This action cannot be undone."
  warningMessage="This will permanently delete the item and all associated data."
  confirmText="Delete"
  icon={<AlertCircle className="h-5 w-5 text-red-500" />}
  onConfirm={() => console.log("Item deleted!")}
/>;
```

## Usage Examples

See `components/modal-examples.tsx` for comprehensive usage examples of all three components.

## Features

- **Fully typed**: All components are written in TypeScript with proper interfaces
- **Theme aware**: All components adapt to light/dark themes
- **Accessible**: Built on top of shadcn/ui Dialog component with proper ARIA attributes
- **Customizable**: Extensive prop options for different use cases
- **Reusable**: Can be used throughout your application with different configurations
- **Flexible form handling**: FormDialog accepts any form elements through props
- **Icon support**: All components support custom icons
- **Variant support**: AlertDialog supports different visual variants

## Best Practices

1. **Use appropriate variants**: Use `destructive` for dangerous actions, `warning` for cautions, `info` for information
2. **Provide clear descriptions**: Always include helpful descriptions for better UX
3. **Handle callbacks**: Implement proper `onConfirm` and `onCancel` handlers
4. **Use icons**: Add relevant icons to improve visual clarity
5. **Test accessibility**: Ensure your modals work with keyboard navigation and screen readers
6. **Form flexibility**: Use FormDialog's `formElements` prop to pass any form structure you need
