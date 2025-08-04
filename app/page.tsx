import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { ThemeSwitcher } from "@/components/theme-switcher";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Star,
  CheckCircle,
  Heart,
  Sparkles,
  Target,
  Play,
  Award,
  Camera,
  Quote,
} from "lucide-react";

// Glassmorphism komponenta
const GlassCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl ${className}`}
  >
    {children}
  </div>
);

// Regular text komponenta (bez gradijenta)
const AccentText = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span className={`text-primary font-semibold ${className}`}>{children}</span>
);

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

// FAQ data
const faqItems = [
  {
    question: "Kako izgleda proces saradnje?",
    answer:
      "Proces počinje konsultacijom, zatim kreiranjem strategije, produkcijom sadržaja i finalno objavljivanjem sa praćenjem rezultata.",
  },
  {
    question: "Koje su minimalne cene za saradnju?",
    answer:
      "Minimalne cene počinju od 500€ za osnovne kampanje, a zavise od obima rada i trajanja saradnje.",
  },
  {
    question: "Koliko traje priprema kampanje?",
    answer:
      "Standardno traje 2-3 nedelje od potpisivanja ugovora do objavljivanja prvog sadržaja.",
  },
  {
    question: "Da li radite sa brendovima iz svih oblasti?",
    answer:
      "Fokusiramo se na zdravlje, lepotu i wellness, ali razmatramo i druge oblasti koje se poklapaju sa našom publikom.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border-b border-white/20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image src="/logo_1.svg" alt="NovaLume" width={35} height={35} />
            <span className="text-2xl font-bold leading-6 text-primary">
              novalume
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
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
            <ThemeSwitcher />
          </div>

          <div className="flex items-center gap-4">
            <Link href="/naruci">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0">
                Započni saradnju
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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

      {/* Features Section */}
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
            {siteConfig.features.map((feature, index) => (
              <GlassCard
                key={index}
                className="p-8 text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
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

      {/* Portfolio Section */}
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

      {/* Services Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-slate-50/50 to-blue-50/50 dark:from-slate-800/50 dark:to-slate-700/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Naše <AccentText>usluge</AccentText>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Kompletne digitalne kampanje za brendove iz oblasti zdravlja,
              lepote i wellnessa
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {siteConfig.services.map((service, index) => (
              <GlassCard
                key={index}
                className="p-8 hover:scale-105 transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">{service.icon}</span>
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
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0">
                    Započni saradnju
                  </Button>
                </Link>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* O nama Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                O <AccentText>NovaLume</AccentText>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Mi smo digitalni medijski portal posvećen stvaranju autentičnog
                sadržaja koji povezuje brendove sa publikom koja traži kvalitet
                i istinu.
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
                      Autentičnost, transparentnost i rezultat-orijentisan
                      pristup
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

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-slate-50/50 to-blue-50/50 dark:from-slate-800/50 dark:to-slate-700/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Česta <AccentText>pitanja</AccentText>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Odgovori na najčešća pitanja o našoj saradnji
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-8">
                {faqItems.map((item, index) => (
                  <GlassCard key={index} className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-semibold text-sm">
                          {index + 1}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-3">{item.question}</h3>
                        <p className="text-muted-foreground">{item.answer}</p>
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>

            {/* FAQ Illustration */}
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/illustrations/Asset_21.svg"
                  alt="FAQ Illustration"
                  width={400}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 text-lg px-8 py-6"
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

      {/* Footer */}
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
              <Link
                href="/blog"
                className="hover:text-primary transition-colors"
              >
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
    </div>
  );
}
