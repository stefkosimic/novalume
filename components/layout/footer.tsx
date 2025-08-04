import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-center">
          {/* Logo Section */}
          <div className="flex items-start gap-2">
            <Image
              src="/logo.svg"
              alt="NavaLume"
              width={24}
              height={24}
              className="dark:hidden"
            />
            <Image
              src="/logo_white.svg"
              alt="NavaLume"
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
              navolume
            </div>
          </div>

          {/* Navigation Links - Visible on all screen sizes */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <Link
              href="/ponuda"
              className="hover:text-primary transition-colors text-center"
            >
              Ponuda
            </Link>
            <Link
              href="/blog"
              className="hover:text-primary transition-colors text-center"
            >
              Blog
            </Link>
            <Link
              href="/kontakt"
              className="hover:text-primary transition-colors text-center"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
