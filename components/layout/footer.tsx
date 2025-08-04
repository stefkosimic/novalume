import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <Image src="/logo.svg" alt="NovaLume" width={32} height={32} />
            <span className="text-lg font-bold">NovaLume</span>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/ponuda"
              className="hover:text-primary transition-colors"
            >
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
          </div>
        </div>
      </div>
    </footer>
  );
}
