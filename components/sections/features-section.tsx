"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { AccentText } from "@/components/ui/accent-text";
import { siteConfig } from "@/lib/site-config";
import { motion, easeOut } from "framer-motion";

export function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
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

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Zašto <AccentText>NovaLume</AccentText>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Gradimo poverenje sa publikom kroz autentičnost, kvalitet i
            transparentnost
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {siteConfig.features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <GlassCard className="p-8 text-center">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-blue-500 to-primary rounded-2xl flex items-center justify-center mx-auto mb-6"
                    whileHover={{
                      rotate: 5,
                      scale: 1.1,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
