import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border-b border-white/20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-start gap-2">
          <Image
            src="/logo.svg"
            alt="NovaLume"
            width={24}
            height={24}
            className="dark:hidden"
          />
          <Image
            src="/logo_white.svg"
            alt="NovaLume"
            width={24}
            height={24}
            className="dark:block hidden"
          />
          <div
            style={{
              lineHeight: 1,
            }}
            className="text-xl h-full align-middle font-bold text-primary"
          >
            novalume
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/ponuda" className="hover:text-primary transition-colors">
            Ponuda
          </Link>
          <Link href="/blog" className="hover:text-primary transition-colors">
            Blog
          </Link>
          <Link
            href="/kontakt"
            className="hover:text-primary transition-colors"
          >
            Kontakt
          </Link>
          <ThemeSwitcher />
        </div>

        <div className="flex items-center gap-4">
          <Link href="/naruci">
            <Button
              variant="default"
              className="bg-gradient-to-r from-blue-600 to-primary text-white border-0"
            >
              Započni saradnju
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
