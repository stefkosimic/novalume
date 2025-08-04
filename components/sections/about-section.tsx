import { AccentText } from "@/components/ui/accent-text";
import { Target, Award, Heart } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              O <AccentText>NovaLume</AccentText>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Mi smo digitalni medijski portal posvećen stvaranju autentičnog
              sadržaja koji povezuje brendove sa publikom koja traži kvalitet i
              istinu.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Naša misija</h3>
                  <p className="text-muted-foreground">
                    Osvetliti najbolje iz sveta zdravlja, lepote, mode i
                    pametnog života
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Ekspertiza</h3>
                  <p className="text-muted-foreground">
                    5+ godina iskustva u digitalnom marketingu i influencer
                    saradnji
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Naše vrednosti</h3>
                  <p className="text-muted-foreground">
                    Autentičnost, transparentnost i rezultat-orijentisan pristup
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/illustrations/Asset2.svg"
                alt="About Us Illustration"
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
