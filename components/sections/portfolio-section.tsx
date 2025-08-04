import { GlassCard } from "@/components/ui/glass-card";
import { AccentText } from "@/components/ui/accent-text";
import { Badge } from "@/components/ui/badge";
import { Camera } from "lucide-react";

// Portfolio data
const portfolioItems = [
  {
    title: "Beauty Campaign",
    category: "Instagram",
    image: "/api/placeholder/400/300",
    stats: { reach: "50K+", engagement: "8.2%", clicks: "2.1K" },
  },
  {
    title: "Wellness Series",
    category: "Reels",
    image: "/api/placeholder/400/300",
    stats: { reach: "120K+", engagement: "12.5%", clicks: "5.8K" },
  },
  {
    title: "Health Tips",
    category: "Stories",
    image: "/api/placeholder/400/300",
    stats: { reach: "85K+", engagement: "9.8%", clicks: "3.2K" },
  },
  {
    title: "Product Launch",
    category: "Multi-platform",
    image: "/api/placeholder/400/300",
    stats: { reach: "200K+", engagement: "15.3%", clicks: "12.5K" },
  },
];

export function PortfolioSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Naš <AccentText>portfolio</AccentText>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uspešne kampanje i autentičan sadržaj koji pokreće rezultate
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {portfolioItems.map((item, index) => (
            <GlassCard
              key={index}
              className="overflow-hidden hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="w-12 h-12 text-primary/50" />
                </div>
                <Badge className="absolute top-3 left-3 bg-primary/20 text-primary border-primary/30">
                  {item.category}
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="font-semibold mb-3">{item.title}</h3>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div className="text-center">
                    <div className="font-semibold text-primary">
                      {item.stats.reach}
                    </div>
                    <div className="text-muted-foreground">Reach</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-primary">
                      {item.stats.engagement}
                    </div>
                    <div className="text-muted-foreground">Engagement</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-primary">
                      {item.stats.clicks}
                    </div>
                    <div className="text-muted-foreground">Clicks</div>
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
