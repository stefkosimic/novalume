import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { AccentText } from "@/components/ui/accent-text";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function CTASection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <GlassCard className="p-12 lg:p-16 text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Spreman da <AccentText>započneš</AccentText> saradnju?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Povežimo se i stvorimo autentičan sadržaj koji će pokrenuti tvoj
              brend
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/naruci">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-primary hover:from-blue-700 hover:to-primary text-white border-0 text-lg px-8 py-6"
                >
                  Započni saradnju
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/kontakt">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-2"
                >
                  Kontaktiraj nas
                </Button>
              </Link>
            </div>
          </GlassCard>

          {/* CTA Illustration */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/illustrations/Illustration-a5.svg"
                alt="CTA Illustration"
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
