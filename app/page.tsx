// Import all section components
import {
  HeroSection,
  FeaturesSection,
  // TestimonialsSection,
  ServicesSection,
  AboutSection,
  FAQSection,
  CTASection,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Testimonials Section */}
      {/* <TestimonialsSection /> */}

      {/* Portfolio Section */}
      {/* <PortfolioSection /> */}

      {/* Services Section */}
      <ServicesSection />

      {/* About Section */}
      <AboutSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
