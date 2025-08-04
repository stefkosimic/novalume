import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { AccentText } from "@/components/ui/accent-text";
import { siteConfig } from "@/lib/site-config";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-r from-slate-50/50 to-blue-50/50 dark:from-slate-800/50 dark:to-slate-700/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Naše <AccentText>usluge</AccentText>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kompletne digitalne kampanje za brendove iz oblasti zdravlja, lepote
            i wellnessa
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {siteConfig.services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <GlassCard
                key={index}
                className="p-8 hover:scale-105 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-4">
                    {service.price}
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/naruci" className="w-full">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-primary hover:from-blue-700 hover:to-primary text-white border-0">
                    Započni saradnju
                  </Button>
                </Link>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
