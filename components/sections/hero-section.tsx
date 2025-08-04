import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";
import { AccentText } from "@/components/ui/accent-text";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* SVG Lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 400 Q300 200 600 400 T1200 400"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          opacity="0.3"
        />
        <path
          d="M0 300 Q400 100 800 300 T1200 300"
          stroke="url(#gradient2)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.2"
        />
        <path
          d="M0 500 Q200 300 600 500 T1200 500"
          stroke="url(#gradient3)"
          strokeWidth="1"
          fill="none"
          opacity="0.15"
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#EC4899" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <Badge className="mb-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-700 dark:text-blue-300 border-blue-500/30">
              <Sparkles className="w-4 h-4 mr-2" />
              Digitalni medijski portal
            </Badge>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <AccentText>Osvetlimo najbolje</AccentText>
              <br />
              iz sveta zdravlja, lepote, mode
              <br />i pametnog života
            </h1>

            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
              Kroz autentičan sadržaj i pažljivo brane brendove, stvaramo
              inspiraciju koja pokreće zajednicu
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link href="/naruci">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 text-lg px-8 py-6"
                >
                  Započni saradnju
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2"
              >
                <Play className="mr-2 w-5 h-5" />
                Pogledaj portfolio
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto lg:mx-0">
              {siteConfig.hero.stats.map((stat, index) => (
                <GlassCard key={index} className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="relative">
            <div className="relative z-10 p-20">
              <Image
                src="/logo.svg"
                alt="Digital Marketing Illustration"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
