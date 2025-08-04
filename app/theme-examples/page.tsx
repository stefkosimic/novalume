import { ThemeSwitcher } from "@/components/theme-switcher";
import { ThemeExamples } from "@/components/theme-examples";

export default function ThemeExamplesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                T
              </span>
            </div>
            <span className="font-semibold text-lg">Theme Examples</span>
          </div>
          <ThemeSwitcher />
        </div>
      </header>

      {/* Main Content */}
      <ThemeExamples />
    </div>
  );
}
