import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Smartphone, Coins, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: ShoppingCart,
    number: "01",
    title: "Buy from SolVend",
    description: "Purchase your favorite drink from any SolVend machine using Solana",
  },
  {
    icon: Smartphone,
    number: "02",
    title: "Receive Your NFT",
    description: "Get a unique, evolving NFT that grows with each purchase you make",
  },
  {
    icon: Coins,
    number: "03",
    title: "Earn Rewards",
    description: "Earn USDC rewards and participate in our ethical data marketplace",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Watch It Grow",
    description: "Your NFT evolves and your passive income increases over time",
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
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to start earning from your everyday purchases
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-accent/40 to-primary/20" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8 relative hover-elevate active-elevate-2 h-full" data-testid={`card-step-${index + 1}`}>
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
