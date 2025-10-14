import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Smartphone, Coins, PackageOpen } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    number: "01",
    title: "Buy Your Drink",
    description:
      "Select your favorite drink in the app and pay seamlessly via Solana Pay.",
  },
  {
    icon: PackageOpen,
    number: "02",
    title: "Dispense & Enjoy",
    description:
      "Get a unique 4-digit code to input on the vending machine keypad and enjoy your cold drink.",
  },
  {
    icon: Coins,
    number: "03",
    title: "Earn Instantly",
    description:
      "Receive rewards directly to your wallet for your purchase and for anonymously sharing your data.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-32 relative" id="how-it-works">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Getting Rewarded is Easy as 1-2-3
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-accent/40 to-primary/20" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="p-8 relative hover-elevate active-elevate-2 h-full"
                data-testid={`card-step-${index + 1}`}
              >
                {/* Step number */}
                <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10 font-heading">
                  {step.number}
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="font-heading text-xl font-semibold mb-3">
                    {step.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
