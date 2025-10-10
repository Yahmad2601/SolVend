import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Sparkles, DollarSign, Shield, Zap, Globe, Users } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Evolving NFTs",
    description: "Your NFT grows and transforms with each purchase, creating a unique digital collectible that tells your story",
  },
  {
    icon: DollarSign,
    title: "Passive Income",
    description: "Earn USDC rewards automatically through our ethical data marketplace while maintaining full control of your information",
  },
  {
    icon: Shield,
    title: "Ethical Data Marketplace",
    description: "Your data, your choice. Opt-in to share anonymized purchase data and earn rewards while supporting better products",
  },
  {
    icon: Zap,
    title: "Powered by Solana",
    description: "Lightning-fast transactions with minimal fees, making micro-rewards practical and immediate",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Access SolVend machines worldwide and earn rewards wherever you go",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Join a growing community of users earning rewards and shaping the future of retail",
  },
];

export default function KeyFeatures() {
  return (
    <section className="py-24 md:py-32 bg-card/30" id="features">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Key Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Revolutionary technology that transforms everyday purchases into valuable rewards
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8 hover-elevate active-elevate-2 h-full" data-testid={`card-feature-${index + 1}`}>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6"
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </motion.div>

                <h3 className="font-heading text-xl font-semibold mb-3">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
