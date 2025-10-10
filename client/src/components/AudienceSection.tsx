import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface AudienceSectionProps {
  id: string;
  title: string;
  subtitle: string;
  benefits: Benefit[];
  ctaText?: string;
  imagePosition?: "left" | "right";
  imageSrc?: string;
}

export default function AudienceSection({
  id,
  title,
  subtitle,
  benefits,
  ctaText,
  imagePosition = "right",
  imageSrc,
}: AudienceSectionProps) {
  const content = (
    <motion.div
      initial={{ opacity: 0, x: imagePosition === "left" ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
        {title}
      </h2>
      <p className="text-xl text-muted-foreground mb-8">
        {subtitle}
      </p>

      <div className="space-y-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="p-6 hover-elevate" data-testid={`card-benefit-${index + 1}`}>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {ctaText && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <Button size="lg" className="hover-elevate active-elevate-2" data-testid="button-cta">
            {ctaText}
          </Button>
        </motion.div>
      )}
    </motion.div>
  );

  const image = imageSrc && (
    <motion.div
      initial={{ opacity: 0, x: imagePosition === "left" ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="rounded-2xl overflow-hidden border border-border">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );

  return (
    <section className="py-24 md:py-32" id={id}>
      <div className="container mx-auto px-6">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${imagePosition === "left" ? "lg:grid-flow-dense" : ""}`}>
          {imagePosition === "left" && <div className="lg:col-start-1">{image}</div>}
          <div className={imagePosition === "left" ? "lg:col-start-2" : ""}>{content}</div>
          {imagePosition === "right" && image}
        </div>
      </div>
    </section>
  );
}
