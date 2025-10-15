import { motion } from "framer-motion";
import { BarChart3, Shield, Zap } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "User Opt-In & Privacy",
    description:
      "Users consent to contribute their purchase data anonymously to an insights pool. The data is aggregated and never tied to an individual.",
  },
  {
    icon: BarChart3,
    title: "Data Access with Stablecoins",
    description:
      "A beverage company (e.g., Coca-Cola) pays in USDC to query this data pool for specific reports (e.g., Peak Sprite consumption times in Abuja, Nigeria).",
  },
  {
    icon: Zap,
    title: "On-Chain Revenue Sharing",
    description:
      " A smart contract automatically distributes the USDC payment, with the majority shared pro-rata among all users who opted-in and contributed data to that report.",
  },
];

export default function EnterpriseSection() {
  return (
    <section className="py-24 md:py-32 bg-white dark:bg-black" id="enterprise">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-bold uppercase text-accent mb-2 tracking-wider">
              For Businesses
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              The Future of Consumer Insights
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              SolVend provides a low-friction reason for large-scale Web2
              companies to interact with Web3 by providing access to
              ethically-sourced, real-time, and anonymous consumer data.
              Understand your customers like never before while rewarding the
              community.
            </p>
          </motion.div>

          {/* Right Column */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="p-6 border border-gray-200 dark:border-gray-800 rounded-2xl bg-gray-50 dark:bg-gray-900/50"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                    <benefit.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
