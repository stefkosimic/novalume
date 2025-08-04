"use client";

import { Button } from "@/components/ui/button";
import { SimpleDialog } from "@/components/ui/simple-dialog";
import { FormDialog } from "@/components/ui/form-dialog";
import { AlertDialog } from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { User, Mail, Lock, AlertCircle, Info, Trash2 } from "lucide-react";

export function ModalExamples() {
  const handleSimpleConfirm = () => {
    console.log("Simple dialog confirmed!");
  };

  const handleFormSubmit = (formData: FormData) => {
    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    console.log("Form submitted:", data);
  };

  const handleDeleteConfirm = () => {
    console.log("Item deleted!");
  };

  const handleContactSubmit = (formData: FormData) => {
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
    console.log("Contact form:", data);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-foreground">
        💬 Reusable Modal Components
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Simple Dialog Example */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">
            Simple Dialog
          </h3>
          <SimpleDialog
            trigger={
              <Button variant="outline" className="w-full">
                Open Simple Dialog
              </Button>
            }
            title="Simple Dialog"
            description="This is a basic dialog example. You can close it by clicking the X button or pressing Escape."
            content={
              <p className="text-sm text-muted-foreground">
                This dialog demonstrates how modals look in the current theme.
                The background, borders, and text all adapt to light and dark
                modes.
              </p>
            }
            onConfirm={handleSimpleConfirm}
          />
        </div>

        {/* Form Dialog Example */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Form Dialog</h3>
          <FormDialog
            trigger={
              <Button variant="outline" className="w-full">
                Open Form Dialog
              </Button>
            }
            title="Create Account"
            description="Fill in the form below to create your account."
            formElements={
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Full Name
                  </label>
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
                  <label className="text-sm font-medium text-foreground">
                    Email
                  </label>
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
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      name="password"
                      type="password"
                      placeholder="Enter password"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              </div>
            }
            submitText="Create Account"
            onSubmit={handleFormSubmit}
          />
        </div>

        {/* Alert Dialog Example */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">
            Alert Dialog
          </h3>
          <AlertDialog
            trigger={
              <Button variant="destructive" className="w-full">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete Item
              </Button>
            }
            title="Confirm Deletion"
            description="Are you sure you want to delete this item? This action cannot be undone."
            warningMessage="This will permanently delete the item and all associated data."
            confirmText="Delete"
            icon={<AlertCircle className="h-5 w-5 text-red-500" />}
            onConfirm={handleDeleteConfirm}
          />
        </div>
      </div>

      {/* Additional Examples */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-foreground">More Examples</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Warning Alert */}
          <div className="space-y-4">
            <h4 className="text-md font-medium text-foreground">
              Warning Alert
            </h4>
            <AlertDialog
              trigger={
                <Button variant="outline" className="w-full">
                  Show Warning
                </Button>
              }
              title="Warning"
              description="This action requires your attention."
              warningMessage="Please review the information before proceeding."
              variant="warning"
              confirmText="Proceed"
              icon={<Info className="h-5 w-5 text-yellow-500" />}
            />
          </div>

          {/* Info Alert */}
          <div className="space-y-4">
            <h4 className="text-md font-medium text-foreground">Info Alert</h4>
            <AlertDialog
              trigger={
                <Button variant="outline" className="w-full">
                  Show Info
                </Button>
              }
              title="Information"
              description="Here's some important information for you."
              warningMessage="This is informational content that you should be aware of."
              variant="info"
              confirmText="Got it"
              icon={<Info className="h-5 w-5 text-blue-500" />}
            />
          </div>
        </div>

        {/* Custom Form Example */}
        <div className="space-y-4">
          <h4 className="text-md font-medium text-foreground">Custom Form</h4>
          <FormDialog
            trigger={<Button className="w-full">Contact Form</Button>}
            title="Contact Us"
            description="Send us a message and we'll get back to you."
            formElements={
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Your Name
                  </label>
                  <Input name="name" placeholder="Enter your name" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Input
                    name="message"
                    placeholder="Type your message here..."
                    required
                  />
                </div>
              </div>
            }
            submitText="Send Message"
            onSubmit={handleContactSubmit}
          />
        </div>
      </div>
    </div>
  );
}
