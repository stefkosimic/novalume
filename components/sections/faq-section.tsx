import { GlassCard } from "@/components/ui/glass-card";
import { AccentText } from "@/components/ui/accent-text";
import Image from "next/image";

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

export function FAQSection() {
  return (
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
  );
}
