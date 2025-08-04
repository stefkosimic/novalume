import { GlassCard } from "@/components/ui/glass-card";
import { AccentText } from "@/components/ui/accent-text";
import { Star, Quote } from "lucide-react";

// Testimonials data
const testimonials = [
  {
    name: "Ana Petrović",
    role: "Marketing Manager, BeautyBrand",
    content:
      "NovaLume je transformisala našu digitalnu prisutnost. Engagement je porastao za 300% u prvih 30 dana.",
    rating: 5,
    image: "/api/placeholder/60/60",
  },
  {
    name: "Marko Jovanović",
    role: "CEO, WellnessCo",
    content:
      "Autentičnost i profesionalnost na najvišem nivou. Preporučujem svima koji traže kvalitetnu saradnju.",
    rating: 5,
    image: "/api/placeholder/60/60",
  },
  {
    name: "Jelena Nikolić",
    role: "Founder, HealthHub",
    content:
      "Rezultati su premašili naša očekivanja. ROI od 450% je govorio sve.",
    rating: 5,
    image: "/api/placeholder/60/60",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-r from-slate-50/50 to-blue-50/50 dark:from-slate-800/50 dark:to-slate-700/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Šta kažu <AccentText>klijenti</AccentText>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Autentična iskustva i rezultati koji govore sami za sebe
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <GlassCard key={index} className="p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <Quote className="w-8 h-8 text-primary/50 mb-4" />
              <p className="text-muted-foreground mb-6 italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
