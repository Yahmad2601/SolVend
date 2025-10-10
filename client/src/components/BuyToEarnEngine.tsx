import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Shield, Sparkles } from "lucide-react";

export default function BuyToEarnEngine() {
  return (
    <section className="py-24 md:py-32 bg-card/30" id="buy-to-earn">
      <div className="container mx-auto px-6">
        <div className="space-y-24">
          {/* Part A: Your Data, Your Money */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Stop Giving Your Data Away for Free. Start Earning From It.
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                With SolVend, you have the choice to anonymously contribute your purchasing habits to a secure data pool. 
                When companies like Coca-Cola pay for insights, you get a share of the revenue. It's that simple.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-12 relative overflow-hidden">
                <div className="flex items-center justify-between gap-8">
                  <div className="flex flex-col items-center">
                    <div className="text-4xl mb-2">👥</div>
                    <span className="text-sm text-muted-foreground">Users</span>
                  </div>
                  
                  <div className="flex-1 flex items-center justify-center">
                    <Shield className="w-16 h-16 text-primary" />
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="text-4xl mb-2">💰</div>
                    <span className="text-sm text-muted-foreground">USDC</span>
                  </div>
                </div>
                <div className="mt-6 text-center text-sm text-muted-foreground">
                  Data Marketplace
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Part B: Your Loyalty, Your Collection */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="grid grid-cols-3 gap-4">
                {[
                  { emoji: "🍾", label: "Base", glow: false },
                  { emoji: "🍾", label: "Evolving", glow: true },
                  { emoji: "✨", label: "Complete", glow: true },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className={`p-6 text-center ${item.glow ? 'ring-2 ring-primary/50' : ''}`}>
                      <div className="text-5xl mb-3">{item.emoji}</div>
                      <div className="text-sm font-medium">{item.label}</div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                A Loyalty Program You Actually Own.
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Every drink you buy helps you build a unique, evolving NFT. Start with a base collectible and watch it 
                transform with each purchase. Complete your collection to unlock free drinks and rare, tradable assets.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
