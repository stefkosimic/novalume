"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sun,
  Moon,
  Star,
  Heart,
  Zap,
  Sparkles,
  Palette,
  Brush,
  CheckCircle,
  AlertCircle,
  Info,
  XCircle,
  Mail,
  Lock,
  User,
  Search,
  Phone,
  Globe,
  Eye,
} from "lucide-react";

export function ThemeExamples() {
  return (
    <div className="min-h-screen bg-background p-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Palette className="h-8 w-8 text-primary" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Theme Showcase
            </h1>
            <Brush className="h-8 w-8 text-primary" />
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the beautiful design system with light and dark themes.
            Every component adapts seamlessly to your chosen theme.
          </p>
        </div>

        {/* Color Palette Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">
            🎨 Color Palette
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">Primary Colors</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="h-12 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold">
                    Primary
                  </span>
                </div>
                <div className="h-8 bg-primary/80 rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground text-sm">80%</span>
                </div>
                <div className="h-8 bg-primary/60 rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground text-sm">60%</span>
                </div>
                <div className="h-8 bg-primary/40 rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground text-sm">40%</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">Secondary Colors</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <span className="text-secondary-foreground font-semibold">
                    Secondary
                  </span>
                </div>
                <div className="h-8 bg-secondary/80 rounded-lg flex items-center justify-center">
                  <span className="text-secondary-foreground text-sm">80%</span>
                </div>
                <div className="h-8 bg-secondary/60 rounded-lg flex items-center justify-center">
                  <span className="text-secondary-foreground text-sm">60%</span>
                </div>
                <div className="h-8 bg-secondary/40 rounded-lg flex items-center justify-center">
                  <span className="text-secondary-foreground text-sm">40%</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">Accent Colors</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="h-12 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-accent-foreground font-semibold">
                    Accent
                  </span>
                </div>
                <div className="h-8 bg-accent/80 rounded-lg flex items-center justify-center">
                  <span className="text-accent-foreground text-sm">80%</span>
                </div>
                <div className="h-8 bg-accent/60 rounded-lg flex items-center justify-center">
                  <span className="text-accent-foreground text-sm">60%</span>
                </div>
                <div className="h-8 bg-accent/40 rounded-lg flex items-center justify-center">
                  <span className="text-accent-foreground text-sm">40%</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">Muted Colors</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="h-12 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground font-semibold">
                    Muted
                  </span>
                </div>
                <div className="h-8 bg-muted/80 rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">80%</span>
                </div>
                <div className="h-8 bg-muted/60 rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">60%</span>
                </div>
                <div className="h-8 bg-muted/40 rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">40%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Typography Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">📝 Typography</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Heading Hierarchy</CardTitle>
                <CardDescription>
                  Different heading sizes with proper contrast
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <h1 className="text-4xl font-bold text-foreground">
                  Heading 1 - Large
                </h1>
                <h2 className="text-3xl font-semibold text-foreground">
                  Heading 2 - Medium
                </h2>
                <h3 className="text-2xl font-semibold text-foreground">
                  Heading 3 - Small
                </h3>
                <h4 className="text-xl font-medium text-foreground">
                  Heading 4 - Tiny
                </h4>
                <h5 className="text-lg font-medium text-foreground">
                  Heading 5 - Micro
                </h5>
                <h6 className="text-base font-medium text-foreground">
                  Heading 6 - Nano
                </h6>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Text Variants</CardTitle>
                <CardDescription>
                  Different text styles and colors
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-foreground">
                  Large paragraph text with good readability
                </p>
                <p className="text-base text-foreground">
                  Regular paragraph text for body content
                </p>
                <p className="text-sm text-muted-foreground">
                  Small muted text for captions
                </p>
                <p className="text-xs text-muted-foreground/70">
                  Extra small text for fine print
                </p>
                <div className="space-y-2">
                  <p className="text-primary font-semibold">
                    Primary colored text
                  </p>
                  <p className="text-secondary-foreground font-medium">
                    Secondary colored text
                  </p>
                  <p className="text-accent-foreground font-medium">
                    Accent colored text
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Form Elements Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">
            📝 Form Elements
          </h2>

          {/* Input Examples */}
          <Card>
            <CardHeader>
              <CardTitle>Input Variants</CardTitle>
              <CardDescription>
                Different input types and states
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Default Input
                  </label>
                  <Input placeholder="Enter your text here..." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    With Icon
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search..." className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Email Input
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Password Input
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="password"
                      placeholder="Enter password"
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Phone Input
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    URL Input
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="url"
                      placeholder="https://example.com"
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Disabled Input
                  </label>
                  <Input placeholder="This input is disabled" disabled />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Readonly Input
                  </label>
                  <Input value="This is readonly text" readOnly />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Required Input
                  </label>
                  <Input placeholder="This field is required" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    With Error
                  </label>
                  <Input
                    placeholder="Invalid input"
                    className="border-red-500 focus-visible:border-red-500"
                    aria-invalid="true"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Interactive Elements Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">
            🎯 Interactive Elements
          </h2>

          {/* Buttons */}
          <Card>
            <CardHeader>
              <CardTitle>Button Variants</CardTitle>
              <CardDescription>
                Different button styles and states
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-wrap gap-3">
                <Button>Default Button</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button disabled>Disabled</Button>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button className="bg-gradient-to-r from-primary to-primary/80">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Gradient
                </Button>
                <Button variant="outline" className="border-2">
                  <Zap className="mr-2 h-4 w-4" />
                  Bold Border
                </Button>
                <Button className="shadow-lg hover:shadow-xl transition-shadow">
                  <Star className="mr-2 h-4 w-4" />
                  Shadow
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Badges */}
          <Card>
            <CardHeader>
              <CardTitle>Badge Variants</CardTitle>
              <CardDescription>Status indicators and labels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge className="bg-green-500 hover:bg-green-600">
                  Success
                </Badge>
                <Badge className="bg-yellow-500 hover:bg-yellow-600">
                  Warning
                </Badge>
                <Badge className="bg-red-500 hover:bg-red-600">Error</Badge>
                <Badge className="bg-blue-500 hover:bg-blue-600">Info</Badge>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge className="bg-gradient-to-r from-purple-500 to-pink-500">
                  <Heart className="mr-1 h-3 w-3" />
                  Gradient
                </Badge>
                <Badge variant="outline" className="border-2">
                  <CheckCircle className="mr-1 h-3 w-3" />
                  Bold
                </Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Dialog/Modal Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">
            💬 Dialog & Modals
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Simple Dialog */}
            <Card>
              <CardHeader>
                <CardTitle>Simple Dialog</CardTitle>
                <CardDescription>
                  Basic modal with title and content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">
                      Open Simple Dialog
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Simple Dialog</DialogTitle>
                      <DialogDescription>
                        This is a basic dialog example. You can close it by
                        clicking the X button or pressing Escape.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <p className="text-sm text-muted-foreground">
                        This dialog demonstrates how modals look in the current
                        theme. The background, borders, and text all adapt to
                        light and dark modes.
                      </p>
                    </div>
                    <DialogFooter>
                      <Button variant="outline">Cancel</Button>
                      <Button>Confirm</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* Form Dialog */}
            <Card>
              <CardHeader>
                <CardTitle>Form Dialog</CardTitle>
                <CardDescription>Modal with form inputs</CardDescription>
              </CardHeader>
              <CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">
                      Open Form Dialog
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Create Account</DialogTitle>
                      <DialogDescription>
                        Fill in the form below to create your account.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                          Full Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input placeholder="John Doe" className="pl-10" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                          Email
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            className="pl-10"
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
                            type="password"
                            placeholder="Enter password"
                            className="pl-10"
                          />
                        </div>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline">Cancel</Button>
                      <Button>Create Account</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* Alert Dialog */}
            <Card>
              <CardHeader>
                <CardTitle>Alert Dialog</CardTitle>
                <CardDescription>
                  Confirmation modal with warning
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="destructive" className="w-full">
                      Delete Item
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-red-500" />
                        Confirm Deletion
                      </DialogTitle>
                      <DialogDescription>
                        Are you sure you want to delete this item? This action
                        cannot be undone.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <div className="p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg">
                        <p className="text-sm text-red-700 dark:text-red-300">
                          This will permanently delete the item and all
                          associated data.
                        </p>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline">Cancel</Button>
                      <Button variant="destructive">Delete</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Status Indicators Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">
            🔔 Status Indicators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="border-green-200 dark:border-green-800">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <CardTitle className="text-sm">Success</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Operation completed successfully
                </p>
              </CardContent>
            </Card>

            <Card className="border-yellow-200 dark:border-yellow-800">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-yellow-500" />
                  <CardTitle className="text-sm">Warning</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Please review before proceeding
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 dark:border-blue-800">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-blue-500" />
                  <CardTitle className="text-sm">Info</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Additional information available
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 dark:border-red-800">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-500" />
                  <CardTitle className="text-sm">Error</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Something went wrong
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Layout Examples Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">
            📐 Layout Examples
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Main Content Area</CardTitle>
                <CardDescription>
                  Primary content with proper spacing and typography
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground">
                  This is the main content area that demonstrates how text looks
                  in the current theme. The background adapts to light or dark
                  mode, and the text maintains proper contrast.
                </p>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    This is a muted background section that provides subtle
                    visual separation.
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm">Action 1</Button>
                  <Button size="sm" variant="outline">
                    Action 2
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sidebar</CardTitle>
                <CardDescription>Secondary navigation or info</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-2 rounded hover:bg-accent cursor-pointer">
                    <Sun className="h-4 w-4" />
                    <span className="text-sm">Light Mode</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded hover:bg-accent cursor-pointer">
                    <Moon className="h-4 w-4" />
                    <span className="text-sm">Dark Mode</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded hover:bg-accent cursor-pointer">
                    <Eye className="h-4 w-4" />
                    <span className="text-sm">Preview</span>
                  </div>
                </div>
                <Separator />
                <div className="text-xs text-muted-foreground">
                  <p>
                    Theme:{" "}
                    <span className="font-medium text-foreground">System</span>
                  </p>
                  <p>
                    Font:{" "}
                    <span className="font-medium text-foreground">Poppins</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Interactive Demo Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">
            🎮 Interactive Demo
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>Theme Transition Demo</CardTitle>
              <CardDescription>
                Watch how elements smoothly transition between themes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    Before Theme Change
                  </h3>
                  <div className="p-4 bg-card border rounded-lg space-y-2">
                    <div className="h-4 bg-primary rounded"></div>
                    <div className="h-4 bg-secondary rounded"></div>
                    <div className="h-4 bg-muted rounded"></div>
                    <p className="text-sm text-muted-foreground">
                      Current theme colors
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    After Theme Change
                  </h3>
                  <div className="p-4 bg-card border rounded-lg space-y-2">
                    <div className="h-4 bg-primary rounded animate-pulse"></div>
                    <div className="h-4 bg-secondary rounded animate-pulse"></div>
                    <div className="h-4 bg-muted rounded animate-pulse"></div>
                    <p className="text-sm text-muted-foreground">
                      New theme colors
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Try switching themes using the theme switcher in the header!
                </p>
                <div className="flex justify-center gap-2">
                  <Badge variant="outline">Smooth Transitions</Badge>
                  <Badge variant="outline">No Flash</Badge>
                  <Badge variant="outline">Persistent</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t">
          <p className="text-muted-foreground">
            Built with ❤️ using Next.js, Tailwind CSS, and shadcn/ui
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Theme system powered by next-themes
          </p>
        </footer>
      </div>
    </div>
  );
}
