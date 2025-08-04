"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { AccentText } from "@/components/ui/accent-text";
import { motion, easeOut } from "framer-motion";

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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  };

  const headerVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  const numberVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.4,
        ease: easeOut,
      },
    },
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-r from-slate-50/50 to-blue-50/50 dark:from-slate-800/50 dark:to-slate-700/50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Česta <AccentText>pitanja</AccentText>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Odgovori na najčešća pitanja o našoj saradnji
          </p>
        </motion.div>

        <motion.div
          className="grid max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <GlassCard className="p-8">
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="w-8 h-8 bg-gradient-to-r from-blue-500 to-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                      variants={numberVariants}
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <span className="text-white font-semibold text-sm">
                        {index + 1}
                      </span>
                    </motion.div>
                    <div>
                      <h3 className="font-semibold mb-3">{item.question}</h3>
                      <p className="text-muted-foreground">{item.answer}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
