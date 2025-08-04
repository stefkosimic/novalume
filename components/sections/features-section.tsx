import { GlassCard } from "@/components/ui/glass-card";
import { AccentText } from "@/components/ui/accent-text";
import { siteConfig } from "@/lib/site-config";

export function FeaturesSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Zašto <AccentText>NovaLume</AccentText>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Gradimo poverenje sa publikom kroz autentičnost, kvalitet i
            transparentnost
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <GlassCard
                key={index}
                className="p-8 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
